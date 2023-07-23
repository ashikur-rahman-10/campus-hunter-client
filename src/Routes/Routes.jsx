import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/LoginRegister/Login";
import Register from "../Pages/LoginRegister/Register";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import CollegeDetails from "../Pages/Home/CollegeDetails/CollegeDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/college-details/:id",
                element: <CollegeDetails></CollegeDetails>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/college/${params.id}`),
            },
        ],
    },
    {
        path: "/*",
        element: <NotFound></NotFound>,
    },
]);

export default router;
