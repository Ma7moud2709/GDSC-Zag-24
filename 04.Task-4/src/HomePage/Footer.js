import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div>
            {/* <!-- ***** Footer Area Start ***** --> */}
            <footer>
                <div className="container">
                    <div className='row'>
                        <p className='col-lg-12'>Copyright © 2023 LUGX Gaming Company. All rights reserved. &nbsp;&nbsp;
                            <Link rel="nofollow" to="https://facebook.com/Ma7moud009" target="_blank">Design: Mahmoud Said</Link>

                        </p>
                        {/* <!-- Section: Social media --> */}
                        <div class="social mx-auto fs-1">
                            <Link to=''><i class="fa-brands fa-facebook icon" style={{color: "blue"}}></i></Link>
                            <Link to=''><i class="fa-brands fa-github icon" style={{color: "black"}}></i></Link>
                            <Link to=''><i class="fa-brands fa-whatsapp icon" style={{color: "green"}}></i></Link>
                            <Link to=''><i class="fa-brands fa-linkedin-in icon" style={{color: "blue"}}></i></Link>
                            <Link to=''><i class="fa-brands fa-google icon" style={{color: "red"}}></i></Link>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- ***** Footer Area End ***** --> */}

        </div>
    )
}

export default Footer;
