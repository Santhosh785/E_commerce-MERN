import { createBrowserRouter } from "react-router-dom"; //without reloading the page
import App from "../App"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Forgotpassword from "../pages/Forgotpassword"
import Signup from "../pages/Signup"

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
            }
        ]
    }
])

export default router 