/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function HomePage() {
    return (
        <div >
            <nav className='container-fluid pl-5'>
                <div className='row  py-md-3'>
                    <div className='left col-md-6'>
                        <div className='logo col-md-6'>
                            <img src=".\img\logo.svg" className='d-inline-block' />
                            <h1 className='d-inline-block'>ReactFeatures</h1>
                        </div>
                    </div>
                    <div className='right col-md-6 '>
                        <h4> React course - Project1 </h4>

                    </div>
                </div>
            </nav>

            <section className='container-fluid pl-5'>
                <div className='about'>
                    <h1 className='pb-5'>Fun facts about React</h1>
                    <div className='pl-4'>
                        <ul>
                            <li>Was first released in 2013</li>
                            <li>Was originally created by Jordan walke</li>
                            <li>Has well over 100K stars on GitHub</li>
                            <li>Is maintained by Facebook</li>
                            <li>Power thousands of enterprise app, including mobile apps</li>
                        </ul>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default HomePage;
