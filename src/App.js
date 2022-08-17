import React from "react";
import { Routes, Route} from "react-router-dom";

// Css
import "./App.scss";

// Component
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import useToken from "./auth/useToken";

function App() {
  const { token, setToken } = useToken();

  // local language
  const lang = 'vi'

  // Check Login status
  // If isn't login and user request access to the admin page => redirect to '/login' (Login components)
  const currentUrl = window.location.pathname;
  if (!token && currentUrl === "/dashboard") {
    return <Login setToken={setToken} />;
  }


  return (
    <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard lang={lang}/>} />
          <Route exact path="*" element={<Home lang={lang}/>} />
          <Route path="/login" element={<Login setToken={setToken}/>} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </div>
  );
}

export default App;
