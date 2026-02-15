import { createBrowserRouter } from "react-router-dom"; //without reloading the page
import App from "../App"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Forgotpassword from "../pages/Forgotpassword"
import Signup from "../pages/Signup"
import Adminpanel from "../pages/Adminpanel"
import Allusers from "../pages/Allusers"
import Allproducts from "../pages/Allproducts"
import Cart from "../pages/Cart"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "Forgot-password",
                element: <Forgotpassword />
            },
            {
                path: "signup",
                element: <Signup />
            },
            {
                path: "admin-panel",
                element: <Adminpanel />,
                children: [
                    {
                        path: "all-users",
                        element: <Allusers />
                    },
                    {
                        path: "all-products",
                        element: <Allproducts />
                    }
                ]
            },


        ]
    }
])

export default router 