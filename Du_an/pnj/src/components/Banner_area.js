import React from 'react';

function Banner_area(props) {
    return (
        <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Product Details Page</h1>
              <nav className="d-flex align-items-center">
                <a href="index.html">
                  Home
                  <span className="lnr lnr-arrow-right" />
                </a>
                <a href="#">
                  Shop
                  <span className="lnr lnr-arrow-right" />
                </a>
                <a href="single-product.html">product-details</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Banner_area;