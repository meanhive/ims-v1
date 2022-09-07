import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext';
import SideMenu from './menu/SideMenu';

function AdminProfile() {
    const data = useContext(GlobalContext)
    const [user] = data.authApi.userData
    return (
        <div className="container">
            <div className="row">
                <SideMenu />
                <section className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 mb-3 border-bottom">
                        <h2 className="h2">Profile</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-4 col-sm-12 mb-2">
                            <div className="card">
                                <img src={user.image.url} alt={user.name} className="card-img-top" />
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 mb-2">
                            <div className="card">
                                <div className="card-header">
                                    <button className="btn btn-outline-info float-end">
                                        <i className="bi bi-pencil"></i>
                                    </button>
                                    <h5 className="text-center card-title display-6"> {user.name} </h5>
                                </div>

                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <strong className="text-secondary">Email</strong>
                                            <span className="text-dark float-end"> {user.email} </span>
                                        </li>
                                        <li className="list-group-item">
                                            <strong className="text-secondary">Mobile</strong>
                                            <span className="text-dark float-end"> {user.mobile} </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AdminProfile