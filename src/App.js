import Home from "./components/pages/home/Home";
import Profile from "./components/pages/profile/Profile";
import Login from "./components/pages/login/Login";
// import Register from "./components/pages/register/Register";
import { Posts } from "./dummyData";


function App() {
return(
  <div>
            <Home/>
            <Profile/>
            <Login/>
            {/* <Register/> */}
  </div>
);
}
export default App;
