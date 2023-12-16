/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
function Features() {
  return (
    <div>
      {/* <!-- ***** Features Area Start ***** --> */}
      <div className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <a to="#">
                <div className="item">
                  <div className="image">
                    <img src="/img/featured-01.png" className='img-fluid' alt="" style={{width: "50%"}} />
                  </div>
                  <h4>Free Storage</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a to="#">
                <div className="item">
                  <div className="image">
                    <img src="/img/featured-02.png" className='img-fluid' alt="" style={{width: "50%"}} />
                  </div>
                  <h4>User More</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a to="#">
                <div className="item">
                  <div className="image">
                    <img src="/img/featured-03.png" className='img-fluid' alt="" style={{width: "50%"}} />
                  </div>
                  <h4>Reply Ready</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a to="#">
                <div className="item">
                  <div className="image">
                    <img src="/img/featured-04.png" className='img-fluid' alt="" style={{width: "50%"}} />
                  </div>
                  <h4>Easy Layout</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Features;
