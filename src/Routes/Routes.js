
import HomePage from "../Components/HomePage/HomePage";
import Programs from "../Components/Programs/Programs";
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
                path:'/programs',
                element: <Programs></Programs>
            }
        ]
    }
])