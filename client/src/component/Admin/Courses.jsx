import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext';
import SideMenu from './menu/SideMenu';
import ResponsiveMenu from './menu/ResponsiveMenu';
import { NavLink } from 'react-router-dom'

function Courses() {
    const context = useContext(GlobalContext)

    return (
        <div className="container">
            <div className="row">
                <SideMenu />
                <section className="col-md-10 ms-sm-auto col-lg-10 px-md-4 mt-5">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 mb-3 border-bottom">
                        <h2 className="h2">Courses</h2>
                        <button className="btn btn-primary d-lg-none d-md-none float-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive">
                            <span className="bi bi-arrow-left"></span>
                        </button>
                    </div>

                    <div className="row">

                    </div>
                </section>
            </div>
            <ResponsiveMenu />
        </div>
    )
}

export default Courses