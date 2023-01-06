import "./login.css";

export default function Login() {
  return (
    <div className="loginContainer">
                <div className="loginWrapper">
                        <div className="loginLeft">
                                <h3 className="loginLogo">JT Social App</h3>
                                <span className="loginDesc">
                                        Connect with your friends around the world on JT Social App today!!!
                                </span>
                        </div>
                        <div className="loginRight">
                                <div className="loginBox">
                                        <input type="email" className="loginInput" placeholder="Enter your email address" />
                                        <input type="password" className="loginInput"  placeholder="Enter your password"/>
                                        <button type="submit" className="loginBtn">Log In</button>
                                        <span className="loginForgot">Forgot password ?</span>
                                        <button type="submit" className="loginCreat">Create a new account</button>
                                </div>
                        </div>
                </div>
    </div>
  );
}
