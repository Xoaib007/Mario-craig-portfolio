
import AddProgram from "../Components/AddProgram/AddProgram";
import LogIn from "../Components/Authentication/LogIn";
import SignUp from "../Components/Authentication/SignUp";
import Blog from "../Components/Blog/Blog";
import HomePage from "../Components/HomePage/HomePage";
import Programs from "../Components/Programs/Programs";
import SingleProgram from "../Components/SingleProgram/SingleProgram";
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
            },
            {
                path: '/programs/:id',
                element: <SingleProgram></SingleProgram>,
                loader: ({params}) => fetch(`http://localhost:5000/programs/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/addprogram',
                element: <AddProgram></AddProgram>,
                loader: () => fetch(`http://localhost:5000/programs`)
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