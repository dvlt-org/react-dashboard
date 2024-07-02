import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ProductsList from "./pages/productsList/productsList"
import Sidebar from "./components/sidebar/sidebar"
import UserList from "./pages/userList/userList"
import Topbar from "./components/topbar/topbar"
import Products from "./pages/product/product"
import NewUser from "./pages/newUser/newUser"
import Home from "./pages/home/home"
import User from "./pages/User/user"
import React from 'react'
import "./index.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: (<Home />)
    },
    {
        path: "/user-list",
        element: (<UserList />)
    },
    {
        path: "/user/:id",
        element: (<User />)
    },
    {
        path: "/new-user",
        element: (<NewUser />)
    },
    {
        path: "/product-list",
        element: (<ProductsList />)
    },
    {
        path: "/product",
        element: (<Products />)
    }

])

export default function App() {
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <RouterProvider router={router} />
            </div>
        </div>
    )
}
