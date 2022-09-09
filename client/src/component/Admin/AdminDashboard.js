import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext';
import SideMenu from './menu/SideMenu';
import ResponsiveMenu from './menu/ResponsiveMenu';
import { NavLink } from 'react-router-dom'

function AdminDashboard() {
  const context = useContext(GlobalContext)

  return (
    <div className="container">
      <div className="row">
        <SideMenu />
        <section className="col-md-10 ms-sm-auto col-lg-10 px-md-4 mt-2">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 mb-3 border-bottom">
            <h2 className="h2">Dashboard</h2>
            <button className="btn btn-primary d-lg-none d-md-none float-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive">
              <span className="bi bi-arrow-left"></span>
            </button>
          </div>

          <div className="row">
            <div className="col-md-4 col-lg-3 col-sm-6 mt-2 mb-2">
              <div className="card bg-primary">
                <div className="card-header text-center">
                  <NavLink to={`/admin/courses`} className="btn">
                    <h5 className="text-light">Courses</h5></NavLink>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Total </strong>
                      <strong className="text-secondary float-end">0</strong>
                    </li>
                    <li className="list-group-item">
                      <strong>Active</strong>
                      <strong className="text-secondary float-end">0</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-sm-6 mt-2 mb-2">
              <div className="card bg-secondary">
                <div className="card-header text-center">
                  <NavLink to={`/admin/batches`} className="btn">
                    <h5 className="text-light">Batches</h5></NavLink>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Total </strong>
                      <strong className="text-secondary float-end">0</strong>
                    </li>
                    <li className="list-group-item">
                      <strong>Active</strong>
                      <strong className="text-secondary float-end">0</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-sm-6 mt-2 mb-2">
              <div className="card bg-info">
                <div className="card-header text-center">
                  <NavLink to={`/admin/enquiries`} className="btn">
                    <h5 className="text-light">Enquiries</h5></NavLink>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Total </strong>
                      <strong className="text-secondary float-end">0</strong>
                    </li>
                    <li className="list-group-item">
                      <strong>Active</strong>
                      <strong className="text-secondary float-end">0</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-sm-6 mt-2 mb-2">
              <div className="card bg-warning">
                <div className="card-header text-center">
                  <NavLink to={`/admin/students`} className="btn">
                    <h5 className="text-light">Students</h5></NavLink>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Total </strong>
                      <strong className="text-secondary float-end">0</strong>
                    </li>
                    <li className="list-group-item">
                      <strong>Active</strong>
                      <strong className="text-secondary float-end">0</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-sm-6 mt-2 mb-2">
              <div className="card bg-warning">
                <div className="card-header text-center">
                  <NavLink to={`/admin/fees`} className="btn">
                    <h5 className="text-light">Fees</h5></NavLink>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Total </strong>
                      <strong className="text-secondary float-end">0</strong>
                    </li>
                    <li className="list-group-item">
                      <strong>Active</strong>
                      <strong className="text-secondary float-end">0</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-sm-6 mt-2 mb-2">
              <div className="card bg-warning">
                <div className="card-header text-center">
                  <NavLink to={`/admin/installments`} className="btn">
                    <h5 className="text-light">Installments</h5></NavLink>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Total </strong>
                      <strong className="text-secondary float-end">0</strong>
                    </li>
                    <li className="list-group-item">
                      <strong>Active</strong>
                      <strong className="text-secondary float-end">0</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-sm-6 mt-2 mb-2">
              <div className="card bg-warning">
                <div className="card-header text-center">
                  <NavLink to={`/admin/allUsers`} className="btn">
                    <h5 className="text-light">All Users</h5></NavLink>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Total </strong>
                      <strong className="text-secondary float-end">0</strong>
                    </li>
                    <li className="list-group-item">
                      <strong>Active</strong>
                      <strong className="text-secondary float-end">0</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* offcanvas body */}
      <ResponsiveMenu />
    </div>
  )
}

export default AdminDashboard