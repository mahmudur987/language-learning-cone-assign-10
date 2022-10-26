import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import Cheakout from "../../Components/CheakOut/Cheakout";
import CourseDetail from "../../Components/CourseDetail/CourseDetail";
import Courses from "../../Components/Courses/Courses";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import Maintain from "../../Components/Maintain/Maintain";
import Profile from "../../Components/Profile/Profile";
import SignUp from "../../Components/SignUp/SignUp";
import Main from "../../Layouts/Main";
import PrivatRoutes from "../PrivetRoute/PrivetRoute";





const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => {
                    return fetch('https://language-learning-server.vercel.app/courses')
                }
            },
            {
                path: '/courses/:id',
                element: <CourseDetail></CourseDetail>,
                loader: async ({ params }) => {
                    return fetch(`https://language-learning-server.vercel.app/courses/${params.id}`)
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/blog",
                element: <PrivatRoutes>  <Blog></Blog>  </PrivatRoutes>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/cheakout",
                element: <PrivatRoutes><Cheakout></Cheakout></PrivatRoutes>
            },
            {
                path: "/profile",
                element: <PrivatRoutes><Profile></Profile></PrivatRoutes>
            },
            {
                path: '*',
                element: <Maintain></Maintain>

            }
        ]
    },
    {
        path: '*',
        element: <Maintain></Maintain>
    }
])

export default route;