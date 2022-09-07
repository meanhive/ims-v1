import React, { useContext } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { GlobalContext } from '../GlobalContext'

/* react toast */
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import history from '../helper/history'

/* component */
import AdminDashboard from './Admin/AdminDashboard'
import Login from './Auth/Login'
import Register from './Auth/Register'
import About from './screens/About'
import Contact from './screens/Contact'
import Home from './screens/Home'
import Menu from './screens/Menu'
import UserDashboard from './User/UserDashboard'
import Pnf from './Util/Pnf'
import ProtectedRoute from '../middleware/ProtectedRoute'
import Order from './screens/Order'
import AdminProfile from './Admin/AdminProfile'
import UserProfile from './User/UserProfile'
import TotalOrders from './Admin/TotalOrders'
import Products from './Admin/Products'
import AllUsers from './Admin/AllUsers'


function Main(props) {
    const context = useContext(GlobalContext)

    const [isLogged, setIsLogged] = context.authApi.isLogged;
    const [isAdmin, setIsAdmin] = context.authApi.isAdmin;
    const [isUser, setIsUser] = context.authApi.isUser;

    return (
        <Router history={history} >
            <Menu />
            <ToastContainer autoClose={5000} position="top-center" />
            <Routes>
                <Route path={`/`} element={<Home />} />
                <Route path={`/about`} element={<About />} />
                <Route path={`/contact`} element={<Contact />} />
                <Route path={`/login`} element={isLogged ? <Pnf /> : <Login />} />
                <Route path={`/register`} element={isLogged ? <Pnf /> : <Register />} />
                {
                    isAdmin ? (
                        <Route element={<ProtectedRoute />}>
                            <Route path={`/admin/dashboard`} element={<AdminDashboard />} />
                            <Route path={`/admin/profile`} element={<AdminProfile />} />
                            <Route path={`/admin/orders`} element={<TotalOrders />} />
                            <Route path={`/admin/products`} element={<Products />} />
                            <Route path={`/admin/allUsers`} element={<AllUsers />} />
                        </Route>) : (
                        <Route element={<ProtectedRoute />}>
                            <Route path={`/user/dashboard`} element={<UserDashboard />} />
                            <Route path={`/user/profile`} element={<UserProfile />} />
                            <Route path={`/user/orders`} element={<Order />} />
                        </Route>
                    )
                }
                <Route path={`/*`} element={<Pnf />} />
            </Routes>
        </Router>
    )
}

export default Main