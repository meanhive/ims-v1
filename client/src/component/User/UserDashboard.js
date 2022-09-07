import React from 'react'
import AddressBook from './component/AddressBook'
import Reviews from './component/Reviews'

import './css/style.css'

function UserDashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-3">
          <div className="d-flex align-items-start">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button className="nav-link" id="address-tab" data-bs-toggle="pill" data-bs-target="#address" type="button" role="tab" aria-controls="address" aria-selected="false">Address Book</button>

              <button className="nav-link" id="reviews-tab" data-bs-toggle="pill" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Reviews</button>
            </div>

            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="address" role="tabpanel" aria-labelledby="address-tab" tabindex="0">
                <h3 className="text-center">Address</h3>
                <AddressBook />
              </div>

              <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab" tabindex="0">
                <h3 className="text-center">Reviews</h3>
                <Reviews />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default UserDashboard