class TokenService {
    getLocalRefreshToken() {
      const user = JSON.parse(localStorage.getItem("user"));
      return user?.refreshToken;
    }
  
    getLocalAccessToken() {
      const user = JSON.parse(localStorage.getItem("user"));
      return user?.accessToken;
    }
  
    updateLocalAccessToken(token) {
      let user = JSON.parse(localStorage.getItem("user"));
      user.accessToken = token;
      localStorage.setItem("user", JSON.stringify(user));
    }

    getUsername() {
      const user = this.getUser();
      return user?.username;
    }

    getEmail() {
      const user = this.getUser();
      return user?.email;
    }

    getId() {
      const user = this.getUser();
      return user?.id;
    }

    getRoles() {
      const user = this.getUser();
      return user?.roles;
    }
  
    getUser() {
      return JSON.parse(localStorage.getItem("user"));
    }
  
    async setUser(user) {
      console.log(JSON.stringify(user));
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    }
  
    removeUser() {
      localStorage.removeItem("user");
    }
  }
  
  export default new TokenService();
