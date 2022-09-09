import React from 'react'
import { NavLink } from 'react-router-dom'

function ResponsiveMenu() {
    return (
        <div className="offcanvas-lg offcanvas-end" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">Institute Management System</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="nav flex-column text-center">
                    <li className="nav-item">
                        <NavLink to="/admin/dashboard" className="nav-link">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/courses" className="nav-link">Courses</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/batches" className="nav-link">Batches</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/enquiries" className="nav-link">Enquiry</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/students" className="nav-link">Students</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/fee" className="nav-link">Fee</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/exam" className="nav-link">Exam</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/certificates" className="nav-link">Certificates</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/id-cards" className="nav-link">Id Cards</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/notifications" className="nav-link">Notifications</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/employees" className="nav-link">Employees</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/settings" className="nav-link">Settings</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ResponsiveMenu
