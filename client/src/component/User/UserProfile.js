import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext';

function UserProfile() {
    const data = useContext(GlobalContext)
    const [user] = data.authApi.userData
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5">
                    <h5 className="text-secondary">Profile Details</h5>
                </div>
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
        </div>
    )
}

export default UserProfile