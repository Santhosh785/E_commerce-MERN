import { createBrowserRouter } from "react-router-dom"; //without reloading the page
import App from "../App"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Forgotpassword from "../pages/Forgotpassword"
import Signup from "../pages/Signup"
import Adminpanel from "../pages/Adminpanel"

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "Forgot-password",
                element : <Forgotpassword/>
            },
            {
                path : "signup",
                element : <Signup/>
            },
            {
                path : "admin-panel",
                element : <Adminpanel/>
            },
            
            
        ]
    }
])

export default router 