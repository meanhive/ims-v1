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

import AdminProfile from './Admin/AdminProfile'
import UserProfile from './User/UserProfile'
import AllUsers from './Admin/AllUsers'
import Courses from './Admin/Courses'
import Batches from './Admin/Batches'
import Enquiries from './Admin/Enquiries'
import Students from './Admin/Students'
import Fees from './Admin/Fees'
import Exam from './Admin/Exam'
import Certificate from './Admin/Certificates'
import IdCards from './Admin/IdCards'
import Notifications from './Admin/Notifications'
import Employees from './Admin/Employees'
import Settings from './Admin/Settings'
import Installments from './Admin/Installments'
import StudentReport from './User/component/StudentReport'
import StudentId from './User/component/StudentId'
import AdmissionDetails from './User/component/AdmissionDetails'
import FeeReport from './User/component/FeeReport'
import UpdateSetting from './Admin/screens/UpdateSetting'
import Batch from './User/component/Batch'


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
                <Route path={`/`} element={isAdmin ? <Navigate to={`/admin/dashboard`} /> : <Home />} />
                <Route path={`/about`} element={<About />} />
                <Route path={`/contact`} element={<Contact />} />
                <Route path={`/login`} element={isLogged ? <Pnf /> : <Login />} />
                <Route path={`/register`} element={isLogged ? <Pnf /> : <Register />} />
                {
                    isAdmin ? (
                        <Route element={<ProtectedRoute />}>
                            <Route path={`/admin/dashboard`} element={<AdminDashboard />} />
                            <Route path={`/admin/dashboard`} element={<AdminDashboard />} />
                            <Route path={`/admin/profile`} element={<AdminProfile />} />
                            <Route path={`/admin/allUsers`} element={<AllUsers />} />
                            <Route path={`/admin/courses`} element={<Courses />} />
                            <Route path={`/admin/batches`} element={<Batches />} />
                            <Route path={`/admin/enquiries`} element={<Enquiries />} />
                            <Route path={`/admin/students`} element={<Students />} />
                            <Route path={`/admin/fees`} element={<Fees />} />
                            <Route path={`/admin/exam`} element={<Exam />} />
                            <Route path={`/admin/certificates`} element={<Certificate />} />
                            <Route path={`/admin/id-cards`} element={<IdCards />} />
                            <Route path={`/admin/notifications`} element={<Notifications />} />
                            <Route path={`/admin/employees`} element={<Employees />} />
                            <Route path={`/admin/settings`} element={<Settings />} />
                            <Route path={`/admin/installments`} element={<Installments />} />
                            <Route path={`/admin/settings/update`} element={<UpdateSetting />} />
                        </Route>) : null
                }

                {
                        isUser ? (
                            <Route element={<ProtectedRoute />}>
                                <Route path={`/student/dashboard`} element={<UserDashboard />} />
                                <Route path={`/student/profile`} element={<UserProfile />} />
                                <Route path={`/student/report`} element={<StudentReport />} />
                                <Route path={`/student/id`} element={<StudentId />} />
                                <Route path={`/student/admission`} element={<AdmissionDetails />} />
                                <Route path={`/student/fee`} element={<FeeReport />} />
                                <Route path={`/student/batch`} element={<Batch />} />
                            </Route>
                        ) : null
                }
                <Route path={`/*`} element={<Pnf />} />
            </Routes>
        </Router>
    )
}

export default Main