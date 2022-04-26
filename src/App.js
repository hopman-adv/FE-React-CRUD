import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm.js";
import Profile from "./Components/Profile.js";
import SignupForm from "./Components/SignupForm.js";
import UsersTable from "./Components/UsersTable.js";
import Menu from "./Components/Menu.js";
import Home from "./Components/Home.js";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/users" element={<UsersTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
