import React from 'react'
import { Outlet } from 'react-router-dom'
function ProductsPage() {
    return (
        <div className="products">
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default ProductsPage;