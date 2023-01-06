import "./register.css";

export default function Register() {
  return (
        <div className="registernContainer">
        <div className="registernWrapper">
                <div className="registernLeft">
                        <h3 className="registerLogo">JT Social App</h3>
                        <span className="registerDesc">
                                Connect with your friends around the world on JT Social App today!!!
                        </span>
                </div>
                <div className="registerRight">
                        <div className="registerBox">
                                <input type="email" className="registerInput" placeholder="Enter your email address" />
                                <input type="password" className="registerInput"  placeholder="Enter your password"/>
                                <button type="submit" className="registerBtn">Sign Up</button>
                                <button type="submit" className="registerCreat">Log Into  Account</button>
                        </div>
                </div>
        </div>
</div>
  )
}
