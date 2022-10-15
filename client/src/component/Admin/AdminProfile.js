import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../GlobalContext';
import SideMenu from './menu/SideMenu';
import ResponsiveMenu from './menu/ResponsiveMenu';
import { toast } from 'react-toastify';
import axios from 'axios';

function AdminProfile() {
    const data = useContext(GlobalContext)
    const [user] = data.authApi.userData
    const [token] = data.token

    const [isEdit,setIsEdit] = useState(false)
    const [person,setPerson] = useState({
        name: user.name,
        email: user.email,
        mobile: user.mobile,
    })
    const [img,setImg] = useState(false)
    const [loading,setLoading] = useState(false)

    const handleUpload  = async (e) => {
        e.preventDefault()
        try {

        }catch(err) {
            const file = e.target.files[0]
            if(!file)
            return toast.error("file not exists..")

            if(file.size > 1 * 1024 * 1024)
            return toast.error("file size is too large, not more than 1Mb")

            let formData = new FormData()
            formData.append('profileImg',file)

            setLoading(true)

            const res = await axios.post(`/api/v1/image/profile/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: token
                }
            })

            setLoading(false)
            setImg(res.data)
        }
    }

    const readValue = (e) => {
        const { name, value } = e.target
        setPerson({...person,[name]:value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        try {
            console.log('update data =', person)
        } catch (err) {
            toast.error(err.message)
        }
    }

    const toggleEdit = () => {
        setIsEdit(prevState => !prevState)
    }

    return (
        <div className="container">
            <div className="row">
                <SideMenu />
                <section className="col-md-10 ms-sm-auto col-lg-10 px-md-4 mt-2">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 mb-3 border-bottom">
                        <h2 className="h2"> {isEdit ? "Edit Profile": "Profile"} </h2>
                        <button className="btn btn-primary d-lg-none d-md-none float-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive">
                            <span className="bi bi-arrow-left"></span>
                        </button>
                    </div>

                    {
                        isEdit ? (
                            <div className="row">
                        <div className="col-md-4 col-sm-12 mb-2">
                            <div className="card">
                                <img src={user.image.url} alt={user.name} className="card-img-top" />
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 mb-2">
                            <div className="card">
                                <div className="card-header">
                                    <button onClick={toggleEdit} className="btn btn-outline-danger float-end">
                                        <i className="bi bi-x-circle"></i>
                                    </button>
                                    <h5 className="text-center card-title display-6"> Edit Admin </h5>
                                </div>

                                <div className="card-body">
                                    <form autoComplete="off" onSubmit={submitHandler} >
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                            <div className="form-group">
                                                    <label htmlFor="name">Name</label>
                                                    <input type="text" name="name" value={person.name} onChange={readValue} id="name" className="form-control"  required/>
                                            </div>
                                            </li>
                                            <li className="list-group-item">
                                            <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email" name="email" value={person.email} onChange={readValue} id="email" className="form-control"  required/>
                                            </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="form-group">
                                                    <label htmlFor="mobile">Mobile</label>
                                                    <input type="number" name="mobile" value={person.mobile} onChange={readValue} id="mobile" className="form-control" required />
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <input type="submit" value="Update Profile" className="btn btn-outline-success" />
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                        ): (
                            <div className="row">
                        <div className="col-md-4 col-sm-12 mb-2">
                            <div className="card">
                                <img src={user.image.url} alt={user.name} className="card-img-top" />
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 mb-2">
                            <div className="card">
                                <div className="card-header">
                                    <button onClick={toggleEdit} className="btn btn-outline-info float-end">
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
                        )
                    }
                </section>
            </div>
        </div>
    )
}

export default AdminProfile