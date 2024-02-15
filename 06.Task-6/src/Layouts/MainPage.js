import { NavLink, Outlet } from "react-router-dom"
import BreadCrumbs from "../Components/BreadCrumbs";

function MainPage() {
    return (

        <div>

            <header>
                <nav>
                    <NavLink to='/' className='h1'>
                        <h1>NOOBIE</h1>
                    </NavLink>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='about'>About</NavLink>
                    <NavLink to='help'>Help</NavLink>
                    <NavLink to='products'>Products</NavLink>
                </nav>
                <BreadCrumbs/>
            </header>
        
            <main>
                <Outlet />
            </main>
        </div>

    )
}

export default MainPage;