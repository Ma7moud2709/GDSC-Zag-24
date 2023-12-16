/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'

function Banner() {
  return (
    <div>
      {/* <!-- ***** Banner Area Start ***** --> */}
      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="caption header-text">
                <h6 className='wow bounceInLeft'>Welcome to lugx</h6>
                <h2 className='wow bounceInLeft' data-wow-delay="0.5s">BEST GAMING SITE EVER!</h2>
                <p className='wow bounceInLeft' data-wow-delay="1s">LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.</p>
                <div className="search-input">
                  <form id="search" action="#">
                    <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                    <button role="button">Search Now</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-2">
              <div className="right-image animate__animated animate__fadeInRight wow">
                <img src="/img/banner-image.jpg" alt="" />
                <span className="price">$22</span>
                <span className="offer">-40%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ***** Banner Area End ***** --> */}
    </div>
  )
}

export default Banner;
