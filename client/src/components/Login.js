import React from "react";

const Login = () => {

  // const [userState, setUserState]

  return (
    <div>
    <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3"></div>
      <h1>Log In</h1>
      <form className="login">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email-input" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password-input" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-default">Login</button>
        </form>
        <br />
        <p>Or sign up <a href="/signup">here</a></p>
      </div>
      </div>
    </div>
  );
};

export default Login;