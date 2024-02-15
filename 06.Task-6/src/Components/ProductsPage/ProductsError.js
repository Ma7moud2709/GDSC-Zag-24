import { useRouteError, Link } from 'react-router-dom'
function ProductsError() {
    const error = useRouteError();
    return (
        <div className='productsError'>
            <h2>Error</h2>
            <p>{error.message}</p>
            <Link to='/' style={{ display: 'block', width: 'fit-content', backgroundColor: 'red', borderRadius: '10px', marginTop: '20px' }}>Back to the home page</Link>
        </div>
    )
}

export default ProductsError