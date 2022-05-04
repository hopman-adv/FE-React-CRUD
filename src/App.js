import { Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm.js";
import Profile from "./Components/Profile.js";
import SignupForm from "./Components/SignupForm.js";
import UsersTable from "./Components/UsersTable.js";
import Menu from "./Components/Menu.js";
import Home from "./Components/Home.js";
import { useState, useEffect} from 'react';
import TokenService from "./Services/token.service.js";
import { useLocation } from "react-router-dom";


function App() {
  const [userLogged, setUserLogged] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    if(TokenService.getUser()) {
      setUserLogged(true);
    }else{
      setUserLogged(false);
    }
  }, [location]);
  return (<>
      <Menu userLogged={userLogged}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/users" element={<UsersTable />} />
      </Routes>
      </>
  );
}

export default App;
