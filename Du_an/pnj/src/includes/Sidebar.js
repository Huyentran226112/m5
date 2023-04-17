import React from "react";

function Sidebar(props) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-5">
      <div className="sidebar-categories">
        <div className="head">Browse Categories</div>
        <ul className="main-categories">
          <li className="main-nav-list">
            <a
              data-toggle="collapse"
              href="#fruitsVegetable"
              aria-expanded="false"
              aria-controls="fruitsVegetable"
            >
              <span className="lnr lnr-arrow-right" />
              Fruits and Vegetables
              <span className="number">(53)</span>
            </a>
            <ul
              className="collapse"
              id="fruitsVegetable"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="fruitsVegetable"
            >
              <li className="main-nav-list child">
                <a href="#">
                  Frozen Fish<span className="number">(13)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Dried Fish<span className="number">(09)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Fresh Fish<span className="number">(17)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat Alternatives
                  <span className="number">(01)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat<span className="number">(11)</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="main-nav-list">
            <a
              data-toggle="collapse"
              href="#meatFish"
              aria-expanded="false"
              aria-controls="meatFish"
            >
              <span className="lnr lnr-arrow-right" />
              Meat and Fish<span className="number">(53)</span>
            </a>
            <ul
              className="collapse"
              id="meatFish"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="meatFish"
            >
              <li className="main-nav-list child">
                <a href="#">
                  Frozen Fish<span className="number">(13)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Dried Fish<span className="number">(09)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Fresh Fish<span className="number">(17)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat Alternatives
                  <span className="number">(01)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat<span className="number">(11)</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="main-nav-list">
            <a
              data-toggle="collapse"
              href="#cooking"
              aria-expanded="false"
              aria-controls="cooking"
            >
              <span className="lnr lnr-arrow-right" />
              Cooking<span className="number">(53)</span>
            </a>
            <ul
              className="collapse"
              id="cooking"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="cooking"
            >
              <li className="main-nav-list child">
                <a href="#">
                  Frozen Fish<span className="number">(13)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Dried Fish<span className="number">(09)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Fresh Fish<span className="number">(17)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat Alternatives
                  <span className="number">(01)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat<span className="number">(11)</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="main-nav-list">
            <a
              data-toggle="collapse"
              href="#beverages"
              aria-expanded="false"
              aria-controls="beverages"
            >
              <span className="lnr lnr-arrow-right" />
              Beverages<span className="number">(24)</span>
            </a>
            <ul
              className="collapse"
              id="beverages"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="beverages"
            >
              <li className="main-nav-list child">
                <a href="#">
                  Frozen Fish<span className="number">(13)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Dried Fish<span className="number">(09)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Fresh Fish<span className="number">(17)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat Alternatives
                  <span className="number">(01)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat<span className="number">(11)</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="main-nav-list">
            <a
              data-toggle="collapse"
              href="#homeClean"
              aria-expanded="false"
              aria-controls="homeClean"
            >
              <span className="lnr lnr-arrow-right" />
              Home and Cleaning<span className="number">(53)</span>
            </a>
            <ul
              className="collapse"
              id="homeClean"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="homeClean"
            >
              <li className="main-nav-list child">
                <a href="#">
                  Frozen Fish<span className="number">(13)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Dried Fish<span className="number">(09)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Fresh Fish<span className="number">(17)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat Alternatives
                  <span className="number">(01)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat<span className="number">(11)</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="main-nav-list">
            <a href="#">
              Pest Control<span className="number">(24)</span>
            </a>
          </li>
          <li className="main-nav-list">
            <a
              data-toggle="collapse"
              href="#officeProduct"
              aria-expanded="false"
              aria-controls="officeProduct"
            >
              <span className="lnr lnr-arrow-right" />
              Office Products<span className="number">(77)</span>
            </a>
            <ul
              className="collapse"
              id="officeProduct"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="officeProduct"
            >
              <li className="main-nav-list child">
                <a href="#">
                  Frozen Fish<span className="number">(13)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Dried Fish<span className="number">(09)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Fresh Fish<span className="number">(17)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat Alternatives
                  <span className="number">(01)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat<span className="number">(11)</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="main-nav-list">
            <a
              data-toggle="collapse"
              href="#beauttyProduct"
              aria-expanded="false"
              aria-controls="beauttyProduct"
            >
              <span className="lnr lnr-arrow-right" />
              Beauty Products<span className="number">(65)</span>
            </a>
            <ul
              className="collapse"
              id="beauttyProduct"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="beauttyProduct"
            >
              <li className="main-nav-list child">
                <a href="#">
                  Frozen Fish<span className="number">(13)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Dried Fish<span className="number">(09)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Fresh Fish<span className="number">(17)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat Alternatives
                  <span className="number">(01)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat<span className="number">(11)</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="main-nav-list">
            <a
              data-toggle="collapse"
              href="#healthProduct"
              aria-expanded="false"
              aria-controls="healthProduct"
            >
              <span className="lnr lnr-arrow-right" />
              Health Products<span className="number">(29)</span>
            </a>
            <ul
              className="collapse"
              id="healthProduct"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="healthProduct"
            >
              <li className="main-nav-list child">
                <a href="#">
                  Frozen Fish<span className="number">(13)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Dried Fish<span className="number">(09)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Fresh Fish<span className="number">(17)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat Alternatives
                  <span className="number">(01)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat<span className="number">(11)</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="main-nav-list">
            <a href="#">
              Pet Care<span className="number">(29)</span>
            </a>
          </li>
          <li className="main-nav-list">
            <a
              data-toggle="collapse"
              href="#homeAppliance"
              aria-expanded="false"
              aria-controls="homeAppliance"
            >
              <span className="lnr lnr-arrow-right" />
              Home Appliances<span className="number">(15)</span>
            </a>
            <ul
              className="collapse"
              id="homeAppliance"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="homeAppliance"
            >
              <li className="main-nav-list child">
                <a href="#">
                  Frozen Fish<span className="number">(13)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Dried Fish<span className="number">(09)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Fresh Fish<span className="number">(17)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat Alternatives
                  <span className="number">(01)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat<span className="number">(11)</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="main-nav-list">
            <a
              className="border-bottom-0"
              data-toggle="collapse"
              href="#babyCare"
              aria-expanded="false"
              aria-controls="babyCare"
            >
              <span className="lnr lnr-arrow-right" />
              Baby Care<span className="number">(48)</span>
            </a>
            <ul
              className="collapse"
              id="babyCare"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="babyCare"
            >
              <li className="main-nav-list child">
                <a href="#">
                  Frozen Fish<span className="number">(13)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Dried Fish<span className="number">(09)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Fresh Fish<span className="number">(17)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#">
                  Meat Alternatives
                  <span className="number">(01)</span>
                </a>
              </li>
              <li className="main-nav-list child">
                <a href="#" className="border-bottom-0">
                  Meat<span className="number">(11)</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
