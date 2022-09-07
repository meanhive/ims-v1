import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../GlobalContext'


function Pnf() {
  const context = useContext(GlobalContext)
  const [isAdmin] = context.authApi.isAdmin
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-danger">Path Not Found</h3>
          <NavLink to={isAdmin ? '/admin/dashboard' : '/'} className="btn btn-outline-warning">Return Home</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Pnf