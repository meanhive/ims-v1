import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext';
import SideMenu from './menu/SideMenu';

function Products() {
    const context = useContext(GlobalContext)

    return (
        <div className="container">
            <div className="row">
                <SideMenu />
                <section className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 mb-3 border-bottom">
                        <h2 className="h2">Products</h2>
                    </div>

                    <div className="row">

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Products