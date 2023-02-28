import React from 'react'
import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/products/:id",
                element: <Products/>
            },
            {
                path: "/product/:id",
                element: <Product/>
            }
        ]
    },
])

function App() {

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
