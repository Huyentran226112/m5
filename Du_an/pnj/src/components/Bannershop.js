import React from "react";

function Bannershop(props) {
  return (
    <section className="banner-area organic-breadcrumb">
      <div className="container">
        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
          <div className="col-first">
            <h1>Shop Category page</h1>
            <nav className="d-flex align-items-center">
              <a href="index.html">
                Home
                <span className="lnr lnr-arrow-right" />
              </a>
              <a href="#">
                Shop
                <span className="lnr lnr-arrow-right" />
              </a>
              <a href="category.html">Fashon Category</a>
            </nav>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default Bannershop;
