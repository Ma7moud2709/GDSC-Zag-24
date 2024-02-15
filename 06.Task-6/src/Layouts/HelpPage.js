import { NavLink, Outlet } from "react-router-dom";
function HelpPage() {

    return (
        <div className='help'>
            <h1 className='welcome'>Welcome To <span>Help</span> Page</h1>

            <nav>
                <NavLink to='faq'>Faq</NavLink>
                <NavLink to='contact'>Contact</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default HelpPage;