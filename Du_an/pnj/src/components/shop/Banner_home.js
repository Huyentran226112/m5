import React from 'react';

function Banner_home(props) {
    return (
        <section className="banner-area">
        <div className="container">
          <div className="row fullscreen align-items-center justify-content-start">
            <div className="col-lg-12">
              <div className="active-banner-slider owl-carousel">
                {/* single-slide */}
                <div className="row single-slide align-items-center d-flex">
                  <div className="col-lg-5 col-md-6">
                    <div className="banner-content">
                      <h1>
                       Cart would!
                      </h1>
                      <p>
                       Thương hiệu mang đến sự thành công 
                      </p>
                      <div className="add-bag d-flex align-items-center">
                        <a className="add-btn" href="">
                          <span className="lnr lnr-cross" />
                        </a>
                        <span className="add-text text-uppercase">Add to Bag</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="banner-img">
                      <img
                        className="img-fluid"
                        src="img/banner/anhbia.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
           
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Banner_home;