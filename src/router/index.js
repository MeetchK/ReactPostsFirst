import PostIdPages from "../pages/PostIdPages";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Login from "../pages/Login";


export const privateRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPages, exact: true},
]

export const PublicRoutes = [
    {path: '/login', component: Login, exact: true},
]

