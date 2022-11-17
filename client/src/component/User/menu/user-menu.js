import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../../GlobalContext'

function UserMenu() {
    const data = useContext(GlobalContext);
    const [user] = data.authApi.userData
    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="userMenu" aria-labelledby="userMenuLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="userMenuLabel">Hi, <span className="text-uppercase">{user.name}</span> </h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#userMenu" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="nav flex-column text-center">
                    <li className="nav-item">
                        <NavLink to="/student/dashboard" className="nav-link">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/student/batch" className="nav-link">Batch Details</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/student/report" className="nav-link">Report</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/student/id" className="nav-link">Id Card</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/student/admission" className="nav-link">Admission Details</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/student/fee" className="nav-link">Fee Report</NavLink>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default UserMenu
