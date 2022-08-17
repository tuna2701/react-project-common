import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import LanguageUtils from "../../utils/LangugeUtils";
import Login from "../login/Login";
import useToken from "../../auth/useToken";

const Nav = (props) => {
  const lang = props.lang

  const { setToken } = useToken();

  function logout() {
    localStorage.removeItem('token');
  }
  //Toi uu hoa ham LanguageUtils.getMessageByKey(value, lang) thanh ham translate(value, lang)
  // function translate (value) {
  //   LanguageUtils.getMessageByKey(value, lang)
  //   console.log(`"${value}"`)
  //   console.log(lang)
  // } 
  let menu;
  const isLogin = localStorage.getItem('token');
  if (!isLogin) {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <Link to="/login">
            {LanguageUtils.getMessageByKey("login.login", lang)}
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/register">
            {LanguageUtils.getMessageByKey("login.register", lang)}
          </Link>
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <button type="button" onClick={logout}>
            {LanguageUtils.getMessageByKey("login.logout", lang)}
          </button>
        </li>
      </ul>
    );
  }

  return (
    <div>
      <Routes>
          <Route path='/login' element={<Login setToken={setToken} />}/>
      </Routes>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
          Home

        <div>{menu}</div>
      </div>
      </nav>
    </div>
      
    
  );
};

export default Nav;
