import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import './styles.css'
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/about";
import Contact from "./components/contact";
import Menu from "./components/menucard";
import Login from "./components/login";
import store from "./store/store";
import { Provider } from "react-redux";
import Cart from "./components/cart";
import Signup from "./components/signup";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const App=()=>{
    const token = localStorage.getItem('token');
    const navigate=useNavigate();
    useEffect(()=>{
        if(token===null)navigate('/login')
    },[])
    
    return (token===null)? <Login redire={true}/>:(
        
    <Provider store={store}>
        <div className="app-container bg-custom-purple fixed top-0 left-0 bottom-0 right-0 overflow-auto" >
        
            <Header/>
         
            <Outlet/>
           
        </div>
    </Provider>
    );

}
const root=ReactDOM.createRoot(document.getElementById("root"));
const route=createBrowserRouter([
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:"/body",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/menu/:menuid",
                element:<Menu/>

            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    }
    
]);

root.render(<RouterProvider router={route}/>);