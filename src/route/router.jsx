import Login from "../auth/login";
import Signup from "../auth/Signup";
import Header from "../components/Header";





const ROUTES = [
    {
        path: "/signup",
        element:<Signup/>
    },
   
    {
        path: "/login",
        element:<Login/>
    },
    {
        path: "/home",
        element: <Header/>
    },
    {
        path: "/",
        element: <Header/> 
    }
   

]
export default ROUTES;