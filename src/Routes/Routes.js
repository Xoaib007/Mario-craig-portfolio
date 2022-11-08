
import LogIn from "../Components/Authentication/LogIn";
import SignUp from "../Components/Authentication/SignUp";
import HomePage from "../Components/HomePage/HomePage";
import Programs from "../Components/Programs/Programs";
import LogInPage from "../Layout/LogInPage";
import Main from "../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/programs',
                element: <Programs></Programs>
            }
        ]
    },
    {
        path: '/user',
        element: <LogInPage></LogInPage>,
        children: [
            {
                path: '/user/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/user/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])