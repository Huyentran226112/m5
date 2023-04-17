import React, { useEffect, useState } from "react";
import LayoutMaster from "../layouts/LayoutMaster";
import Banner_area from "../components/Banner_area";
import { useParams } from "react-router-dom";
import ProductModel from "../models/ProductModel";

function ProductDetails(props) {
  const image = "http://127.0.0.1:8000/public/assets/product/";
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const formattedPrice =
    product?.price?.toLocaleString("vi-VN") || "Price not available";
  useEffect(() => {
    ProductModel.find(id)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <div>
      <LayoutMaster>
        <>
          <Banner_area />
          {loading ? (
            "Loading"
          ) : (
            <>
              <div className="product_image_area">
                <div className="container">
                  <div className="row s_product_inner">
                    <div className="col-lg-6">
                      <div className="s_Product_carousel">
                        <div className="single-prd-item">
                          <img
                            className="img-fluid"
                            src={`${product.image}`}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                      <div className="s_product_text">
                        <h3> Tên:{product.name}</h3>
                        <h2> Giá :{product.price} VND</h2>
                        <ul className="list">
                          <li>
                            <a className="active">
                              <span>Thể loại </span> :{" "}
                              {product.category.name ?? ""}
                            </a>
                          </li>
                        </ul>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: product.description,
                          }}
                        />
                        <div className="product_count">
                          <label htmlFor="qty">Quantity:</label>
                          <input
                            type="text"
                            name="qty"
                            id="sst"
                            maxLength={12}
                            defaultValue={product.quantity}
                            title="Quantity:"
                            className="input-text qty"
                          />
                          <button
                            onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                            className="increase items-count"
                            type="button"
                          >
                            <i className="lnr lnr-chevron-up" />
                          </button>
                          <button
                            onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) && sst > 0 ) result.value--;return false;"
                            className="reduced items-count"
                            type="button"
                          >
                            <i className="lnr lnr-chevron-down" />
                          </button>
                        </div>
                        <div className="card_area d-flex align-items-center">
                          <a className="primary-btn" href="/Cart">
                            Add to Cart
                          </a>
                          <a className="icon_btn" href="#">
                            <i className="lnr lnr lnr-diamond" />
                          </a>
                          <a className="icon_btn" href="#">
                            <i className="lnr lnr lnr-heart" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section className="product_description_area">
                <div className="container">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Specification
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="contact-tab"
                        data-toggle="tab"
                        href="#contact"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Comments
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="review-tab"
                        data-toggle="tab"
                        href="#review"
                        role="tab"
                        aria-controls="review"
                        aria-selected="false"
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <p>
                        Mercedes-AMG GT là dòng xe thể thao (Sport cars) của nhà
                        sản xuất ô tô Mercedes-AMG, Đức. Ra đời lần đầu năm 2014
                        tại triển lãm Paris Motor Show, Mercedes AMG GT có 2
                        kiểu thân là Coupe và Roadster. Có nhiều biến thể của
                        dòng GT là GT, GTS, GT3, GT4 nhất là bản hiệu năng cao
                        GT-R. Tất cả các biến thể được lắp ráp tại nhà máy của
                        Mercedes-Benz ở Sindelfingen, Đức.
                      </p>
                      <p>
                        GT R ​​là biến thể hiệu suất cao của Mercedes-AMG GT và
                        được giới thiệu tại Goodwood Festival of Speed ​​vào
                        tháng 6 năm 2016 và chính thức bán ra từ cuối năm 2017.
                        Phiên bản hiệu năng cao Mercedes AMG GTR Coupe chính
                        thức ra mắt thị trường Việt Nam trong tháng 5 năm 2020.
                        Ngoài ra, Mercedes-Benz Việt Nam còn có kế hoạch mang
                        thêm nhiều chiếc xe thể thao hiệu năng cao nữa về phục
                        vụ khách hàng Việt.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div className="table-responsive">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>
                                <h5>Width</h5>
                              </td>
                              <td>
                                <h5>128mm</h5>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h5>Height</h5>
                              </td>
                              <td>
                                <h5>508mm</h5>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h5>Depth</h5>
                              </td>
                              <td>
                                <h5>85mm</h5>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h5>Weight</h5>
                              </td>
                              <td>
                                <h5>52gm</h5>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h5>Quality checking</h5>
                              </td>
                              <td>
                                <h5>yes</h5>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h5>Freshness Duration</h5>
                              </td>
                              <td>
                                <h5>03days</h5>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h5>When packeting</h5>
                              </td>
                              <td>
                                <h5>Without touch of hand</h5>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h5>Each Box contains</h5>
                              </td>
                              <td>
                                <h5>60pcs</h5>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="comment_list">
                            <div className="review_item">
                              <div className="media">
                                <div className="d-flex">
                                  <img src="img/product/review-1.png" alt="" />
                                </div>
                                <div className="media-body">
                                  <h4>Blake Ruiz</h4>
                                  <h5>12th Feb, 2018 at 05:56 pm</h5>
                                  <a className="reply_btn" href="#">
                                    Reply
                                  </a>
                                </div>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                              </p>
                            </div>
                            <div className="review_item reply">
                              <div className="media">
                                <div className="d-flex">
                                  <img src="img/product/review-2.png" alt="" />
                                </div>
                                <div className="media-body">
                                  <h4>Blake Ruiz</h4>
                                  <h5>12th Feb, 2018 at 05:56 pm</h5>
                                  <a className="reply_btn" href="#">
                                    Reply
                                  </a>
                                </div>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                              </p>
                            </div>
                            <div className="review_item">
                              <div className="media">
                                <div className="d-flex">
                                  <img src="img/product/review-3.png" alt="" />
                                </div>
                                <div className="media-body">
                                  <h4>Blake Ruiz</h4>
                                  <h5>12th Feb, 2018 at 05:56 pm</h5>
                                  <a className="reply_btn" href="#">
                                    Reply
                                  </a>
                                </div>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="review_box">
                            <h4>Post a comment</h4>
                            <form
                              className="row contact_form"
                              action="contact_process.php"
                              method="post"
                              id="contactForm"
                              noValidate="novalidate"
                            >
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Your Full name"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Email Address"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="number"
                                    name="number"
                                    placeholder="Phone Number"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    name="message"
                                    id="message"
                                    rows={1}
                                    placeholder="Message"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 text-right">
                                <button
                                  type="submit"
                                  value="submit"
                                  className="btn primary-btn"
                                >
                                  Submit Now
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show active"
                      id="review"
                      role="tabpanel"
                      aria-labelledby="review-tab"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="row total_rate">
                            <div className="col-6">
                              <div className="box_total">
                                <h5>Overall</h5>
                                <h4>4.0</h4>
                                <h6>(03 Reviews)</h6>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="rating_list">
                                <h3>Based on 3 Reviews</h3>
                                <ul className="list">
                                  <li>
                                    <a href="#">
                                      5 Star <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" /> 01
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      4 Star <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" /> 01
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      3 Star <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" /> 01
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      2 Star <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" /> 01
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      1 Star <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" /> 01
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="review_list">
                            <div className="review_item">
                              <div className="media">
                                <div className="d-flex">
                                  <img src="img/product/review-1.png" alt="" />
                                </div>
                                <div className="media-body">
                                  <h4>Blake Ruiz</h4>
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                </div>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                              </p>
                            </div>
                            <div className="review_item">
                              <div className="media">
                                <div className="d-flex">
                                  <img src="img/product/review-2.png" alt="" />
                                </div>
                                <div className="media-body">
                                  <h4>Blake Ruiz</h4>
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                </div>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                              </p>
                            </div>
                            <div className="review_item">
                              <div className="media">
                                <div className="d-flex">
                                  <img src="img/product/review-3.png" alt="" />
                                </div>
                                <div className="media-body">
                                  <h4>Blake Ruiz</h4>
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                </div>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="review_box">
                            <h4>Add a Review</h4>
                            <p>Your Rating:</p>
                            <ul className="list">
                              <li>
                                <a href="#">
                                  <i className="fa fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-star" />
                                </a>
                              </li>
                            </ul>
                            <p>Outstanding</p>
                            <form
                              className="row contact_form"
                              action="contact_process.php"
                              method="post"
                              id="contactForm"
                              noValidate="novalidate"
                            >
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Your Full name"
                                    onFocus="this.placeholder = ''"
                                    onBlur="this.placeholder = 'Your Full name'"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Email Address"
                                    onFocus="this.placeholder = ''"
                                    onBlur="this.placeholder = 'Email Address'"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="number"
                                    name="number"
                                    placeholder="Phone Number"
                                    onFocus="this.placeholder = ''"
                                    onBlur="this.placeholder = 'Phone Number'"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    name="message"
                                    id="message"
                                    rows={1}
                                    placeholder="Review"
                                    onFocus="this.placeholder = ''"
                                    onBlur="this.placeholder = 'Review'"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 text-right">
                                <button
                                  type="submit"
                                  value="submit"
                                  className="primary-btn"
                                >
                                  Submit Now
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Start related-product Area */}
          {/* <section className="related-product-area section_gap_bottom">
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
          </section> */}
        </>
      </LayoutMaster>
    </div>
  );
}

export default ProductDetails;
