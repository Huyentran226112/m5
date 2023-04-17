import React, { useEffect, useState } from "react";
import LayoutMaster from "../layouts/LayoutMaster";
import Bannershop from "../components/Bannershop";
import ProductModel from "../models/ProductModel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Sidebar from "../includes/Sidebar";
import ProductItem from "../components/ProductItem";

function Shop(props) {
  const image = "http://127.0.0.1:8000/public/assets/product/";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductModel.getAll()
      .then((res) => {
        setProducts(res.data);
        // console.log(res,44 );
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <div>
      <LayoutMaster>
        <>
          <Bannershop />
          <div className="container">
            <div className="row">
              <Sidebar/>
              <div className="col-xl-9 col-lg-8 col-md-7">
                {/* Start Filter Bar */}
                <div className="filter-bar d-flex flex-wrap align-items-center">
                  <div className="sorting">
                    <select>
                      <option value={1}>Default sorting</option>
                      <option value={1}>Default sorting</option>
                      <option value={1}>Default sorting</option>
                    </select>
                  </div>
                  <div className="sorting mr-auto">
                    <select>
                      <option value={1}>Show 12</option>
                      <option value={1}>Show 12</option>
                      <option value={1}>Show 12</option>
                    </select>
                  </div>
                  <div className="pagination">
                    <a href="#" className="prev-arrow">
                      <i className="fa fa-long-arrow-left" aria-hidden="true" />
                    </a>
                    <a href="#" className="active">
                      1
                    </a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#" className="dot-dot">
                      <i className="fa fa-ellipsis-h" aria-hidden="true" />
                    </a>
                    <a href="#">6</a>
                    <a href="#" className="next-arrow">
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
                {/* End Filter Bar */}
                {/* Start Best Seller */}
                <section className="lattest-product-area pb-40 category-list">
                  <div className="row">
                    {/* single product */}
                    {products.map((product, key) => (
                      <div className="col-lg-4 col-md-6">
                        <ProductItem product={product} the_key={key}/>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
          {/* Start related-product Area */}
          <section className="related-product-area section_gap">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <div className="section-title">
                    <h1>Deals of the Week</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                      <div className="single-related-product d-flex">
                        <a href="#">
                          <img src="img/r1.jpg" alt="" />
                        </a>
                        <div className="desc">
                          <a href="#" className="title">
                            Black lace Heels
                          </a>
                          <div className="price">
                            <h6>$189.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                      <div className="single-related-product d-flex">
                        <a href="#">
                          <img src="img/r2.jpg" alt="" />
                        </a>
                        <div className="desc">
                          <a href="#" className="title">
                            Black lace Heels
                          </a>
                          <div className="price">
                            <h6>$189.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                      <div className="single-related-product d-flex">
                        <a href="#">
                          <img src="img/r3.jpg" alt="" />
                        </a>
                        <div className="desc">
                          <a href="#" className="title">
                            Black lace Heels
                          </a>
                          <div className="price">
                            <h6>$189.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                      <div className="single-related-product d-flex">
                        <a href="#">
                          <img src="img/r5.jpg" alt="" />
                        </a>
                        <div className="desc">
                          <a href="#" className="title">
                            Black lace Heels
                          </a>
                          <div className="price">
                            <h6>$189.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                      <div className="single-related-product d-flex">
                        <a href="#">
                          <img src="img/r6.jpg" alt="" />
                        </a>
                        <div className="desc">
                          <a href="#" className="title">
                            Black lace Heels
                          </a>
                          <div className="price">
                            <h6>$189.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                      <div className="single-related-product d-flex">
                        <a href="#">
                          <img src="img/r7.jpg" alt="" />
                        </a>
                        <div className="desc">
                          <a href="#" className="title">
                            Black lace Heels
                          </a>
                          <div className="price">
                            <h6>$189.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="single-related-product d-flex">
                        <a href="#">
                          <img src="img/r9.jpg" alt="" />
                        </a>
                        <div className="desc">
                          <a href="#" className="title">
                            Black lace Heels
                          </a>
                          <div className="price">
                            <h6>$189.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="single-related-product d-flex">
                        <a href="#">
                          <img src="img/r10.jpg" alt="" />
                        </a>
                        <div className="desc">
                          <a href="#" className="title">
                            Black lace Heels
                          </a>
                          <div className="price">
                            <h6>$189.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="single-related-product d-flex">
                        <a href="#">
                          <img src="img/r11.jpg" alt="" />
                        </a>
                        <div className="desc">
                          <a href="#" className="title">
                            Black lace Heels
                          </a>
                          <div className="price">
                            <h6>$189.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ctg-right">
                    <a href="#" target="_blank">
                      <img
                        className="img-fluid d-block mx-auto"
                        src="img/category/c5.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End related-product Area */}
        </>
      </LayoutMaster>
    </div>
  );
}

export default Shop;
