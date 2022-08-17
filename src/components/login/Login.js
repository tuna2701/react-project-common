import React, { useState } from "react";
import PropTypes from "prop-types";

import './Login.scss'

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="main">

        <form action="" method="POST" className="form" id="form-1" onSubmit={handleSubmit}>
            <h3 className="heading">Đăng nhập</h3>
        
            <div className="spacer"></div>
        
            <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input id="email" name="email" type="text" placeholder="VD: email@domain.com" 
            className="form-control" 
            onChange={(e) => setUserName(e.target.value)}/>
            <span className="form-message"></span>
            </div>
        
            <div className="form-group">
            <label htmlFor="password" className="form-label">Mật khẩu</label>
            <input id="password" name="password" type="password" placeholder="Nhập mật khẩu" 
            className="form-control" 
            onChange={(e) => setPassword(e.target.value)}/>
            <span className="form-message"></span>
            </div>

            <div className="form-group login-question">
                <div className="remember-password pull-left">
                    <input type="checkbox" name="remember-password" id="remember-password" />
                    <span className="remember-password-text">Nhớ mật khẩu?</span>
                    <div>
                        <a href="/register" className="link-to-register pull-left">
                            Tạo tài khoản
                        </a>
                        <a style={{float:'right'}} href="/forgot-password" className="link-to-register pull-right">
                            Quên mật khẩu
                        </a>
                    </div>
                    
                </div>

            </div>
        
            <button className="form-submit">Đăng nhập</button>

            
        </form>
        
    </div>
    
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
