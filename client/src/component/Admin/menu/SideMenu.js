import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../../GlobalContext'
import "./dashboard.css"

function SideMenu() {
    const context = useContext(GlobalContext)

    return (
        <nav id="sidebarMenu" className="col-md-2 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-0 text-center sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/admin/dashboard">
                            <span data-feather="home" className="align-text-bottom"></span>
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/courses">
                            <span data-feather="file" className="align-text-bottom"></span>
                            Courses
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/batches">
                            <span data-feather="shopping-cart" className="align-text-bottom"></span>
                            Batches
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/enquiries">
                            <span data-feather="users" className="align-text-bottom"></span>
                            Enquiry
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/students">
                            <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                            Students
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/fees">
                            <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                            Fees
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/exam">
                            <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                            Exam
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/certificates">
                            <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                            Certificates
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/id-cards">
                            <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                            ID cards
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/notifications">
                            <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                            Notifications
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/employees">
                            <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                            Employees
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/settings">
                            <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                            Settings
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/profile">
                            <span data-feather="layers" className="align-text-bottom"></span>
                            Profile
                        </NavLink>
                    </li>
                </ul>

                {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                    <span>Saved reports</span>
                    <NavLink className="link-secondary" to="#" aria-label="Add a new report">
                        <span data-feather="plus-circle" className="align-text-bottom"></span>
                    </NavLink>
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">
                            <span data-feather="file-text" className="align-text-bottom"></span>
                            Current month
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">
                            <span data-feather="file-text" className="align-text-bottom"></span>
                            Last quarter
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">
                            <span data-feather="file-text" className="align-text-bottom"></span>
                            Social engagement
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">
                            <span data-feather="file-text" className="align-text-bottom"></span>
                            Year-end sale
                        </NavLink>
                    </li>
                </ul> */}
            </div>
        </nav>

    )
}

export default SideMenu
