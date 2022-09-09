import React, { useContext } from 'react'
import { GlobalContext } from '../../../GlobalContext';

import UserMenu from '../menu/user-menu'

function StudentReport() {
    const data = useContext(GlobalContext)

    return (
        <div className="container-fluid">
            <div className="row">
                <section className="col-md-10 offset-md-1 offset-lg-1 col-lg-10 px-md-4 mt-2">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 mb-3 border-bottom">
                        <h2 className="h2">Report</h2>
                        <button className="btn btn-primary  float-end" data-bs-toggle="offcanvas" data-bs-target="#userMenu">
                            <span className="bi bi-arrow-left"></span>
                        </button>
                    </div>

                    <div className="row">

                    </div>
                </section>
            </div>
            <UserMenu />
        </div>
    )
}

export default StudentReport