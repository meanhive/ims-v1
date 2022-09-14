import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../GlobalContext';
import SideMenu from './menu/SideMenu';
import ResponsiveMenu from './menu/ResponsiveMenu';
import SettingState from '../../States/SettingState';
// import { NavLink } from 'react-router-dom'

function Settings() {
    const context = useContext(GlobalContext)
    const [setting, setSetting] = useState(SettingState);
    const [logo, setLogo] = useState({
        url: "https://p.kindpng.com/picc/s/195-1951368_here-and-there-movie-hd-png-download.png"
    })

    const readValue = (e) => {
        let { name, value } = e.target;
        setSetting({ ...setting, [name]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }


    const handleUpload = (e) => { }

    return (
        <div className="container">
            <div className="row">
                <SideMenu />
                <section className="col-md-10 ms-sm-auto col-lg-10 px-md-4 mt-2">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 mb-3 border-bottom">
                        <h2 className="h2">Settings</h2>
                        <button className="btn btn-primary d-lg-none d-md-none float-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive">
                            <span className="bi bi-arrow-left"></span>
                        </button>
                    </div>

                    <div className="row">

                        <div className="col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <h4 className="text-center">General Settings</h4>
                                </div>
                                <div className="card-body">
                                    <div className="form-check mt-2">
                                        <input type="checkbox" name="isEnqTitleEnable" id="isEnqTitleEnable" className="form-check-input" />
                                        <label htmlFor="isEnqTitleEnable">Is Enquiry Title Enabled?</label>
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="enqFormTitle">Enquiry Form Title</label>
                                        <input type="text" name="enqFormTitle" id="enqFormTitle" value={setting.enqFormTitle} onChange={readValue} className="form-control" required />
                                    </div>

                                    <div className="form-group mt-3">
                                        <div className="card">
                                            <img src={logo.url} alt="Logo image" className="card-img-top" />
                                            <div className="card-body"></div>
                                        </div>
                                        <input type="file" name="logo" id="logo" className="form-control" required />
                                    </div>

                                    <div className="form-check mt-3">
                                        <input type="checkbox" name="isLogoEnable" id="isLogoEnable" className="form-check-input" />
                                        <label htmlFor="isLogoEnable">Enable institute Logo?</label>
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="instituteName">Institute Name</label>
                                        <input type="text" name="instituteName" id="instituteName" value={setting.instituteName} onChange={readValue} className="form-control" required />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="instituteAddress">Institute Address</label>
                                        <textarea name="instituteAddress" id="instituteAddress" cols="30" rows="5" value={setting.instituteAddress} onChange={readValue} className="form-control" required></textarea>
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="institutePhone">Institute Phone</label>
                                        <input type="number" name="institutePhone" id="institutePhone" value={setting.institutePhone} onChange={readValue} className="form-control" required />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="instituteMobile">Institute Mobile</label>
                                        <input type="number" name="instituteMobile" id="instituteMobile" value={setting.instituteMobile} onChange={readValue} className="form-control" required />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="instituteEmail">Institute Email</label>
                                        <input type="email" name="instituteEmail" id="instituteEmail" value={setting.instituteEmail} onChange={readValue} className="form-control" required />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="enrolmentIdPrefix">Enrollment Id Prefix</label>
                                        <input type="text" name="enrolmentIdPrefix" id="enrolmentIdPrefix" value={setting.enrolmentIdPrefix} onChange={readValue} className="form-control" required />
                                    </div>
                                    <div className="form-group mt-3"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-header bg-info">
                                    <h4 className="text-center">Email Settings</h4>
                                </div>
                                <div className="card-body"></div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <ResponsiveMenu />
        </div>
    )
}

export default Settings