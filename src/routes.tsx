import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layout/Default";
import { SignUp } from "./pages/SignUp";
import { Categories } from "./pages/Categories";
import { Profile } from "./pages/Profile";
import { Subscribe } from "./pages/Subscribe";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default />
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
    {
        path: '/categories',
        element: <Categories />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/subscribe',
        element: <Subscribe />
    }
])