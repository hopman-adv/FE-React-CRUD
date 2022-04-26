import axios from "axios";
import TokenService from "../services/token.service";

export const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const nonauthInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});


instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        //_retry flag to prevent infinite loop
        originalConfig._retry = true;

        try {
          const rs = await refreshToken();
          const { accessToken } = rs.data;
          TokenService.updateLocalAccessToken(accessToken);
          instance.defaults.headers.common["Authorization"] =
            "Bearer " + accessToken;

          return instance(originalConfig);
        } catch (_error) {
          if (_error.response && _error.response.data) {
            console.log("Nepřihlášen!");
            window.location = "/src/pages/login.html";    
            return Promise.reject(_error.response.data);
          }

          return Promise.reject(_error);
        }
      }

      if (err.response.status === 403 && err.response.data) {
        console.log("Odhlášen!");
        TokenService.removeUser();
        window.location = "/src/pages/login.html";
        return Promise.reject(err.response.data);
      }
    }

    return Promise.reject(err);
  }
);

function signin(username, password) {
  return nonauthInstance.post("/auth/signin", {
    username: username,
    password: password,
  });
}

function logout(id) {
  return nonauthInstance.post("/auth/logout", {
    userId: id
  });
}

function refreshToken() {
  return nonauthInstance.post("/auth/refreshtoken", {
    refreshToken: TokenService.getLocalRefreshToken(),
  });
}

export async function login(username, password) {
  try {
    const res = await signin(username, password);

    const user = res.data;
    TokenService.setUser(user).then((bool) => {
      window.location = "/src/pages/profile.html";
    });
  } catch (err) {
    if(err.response.status === 401) {
      alert("Non-existing user or bad password!");  
    }
    console.log("Error:");
    console.log(err);
    console.log(err.response);
  }
}

export async function logoutUser() {
  try {
    const userData = TokenService.getUser();
    console.log(userData);
    const res = await logout(userData.id);
    
    console.log(res.data);
    TokenService.removeUser();
    window.location = "index.html";
  }catch(error) {
    console.log(error);
  }
}