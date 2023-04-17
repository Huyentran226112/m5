import React, { useEffect, useState } from 'react';
import LayoutHome from '../layouts/LayoutHome';
import Banner_home from '../components/shop/Banner_home';
import ProductModel from '../models/ProductModel';
import { Link } from "react-router-dom";
function Home(props) {
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
        <LayoutHome>
        <>
        <Banner_home/> 
        <section className="features-area section_gap">
        <div className="container">
          <div className="row features-inner">
            {/* single features */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="img/features/f-icon1.png" alt="" />
                </div>
                <h6>Free Delivery</h6>
                <p>Free Shipping on all order</p>
              </div>
            </div>
            {/* single features */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="img/features/f-icon2.png" alt="" />
                </div>
                <h6>Return Policy</h6>
                <p>Free Shipping on all order</p>
              </div>
            </div>
            {/* single features */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="img/features/f-icon3.png" alt="" />
                </div>
                <h6>24/7 Support</h6>
                <p>Free Shipping on all order</p>
              </div>
            </div>
            {/* single features */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="img/features/f-icon4.png" alt="" />
                </div>
                <h6>Secure Payment</h6>
                <p>Free Shipping on all order</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className="category-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-lg-8 col-md-8">
                    <div className="single-deal">
                      <div className="overlay" />
                      <img
                        className="img-fluid w-100"
                        src="img/category/c1.jpg"
                        alt=""
                      />
                      <a
                        href="img/category/c1.jpg"
                        className="img-pop-up"
                        target="_blank"
                      >
                        <div className="deal-details">
                          <h6 className="deal-title">Sneaker for Sports</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-deal">
                      <div className="overlay" />
                      <img
                        className="img-fluid w-100"
                        src="img/category/c2.jpg"
                        alt=""
                      />
                      <a
                        href="img/category/c2.jpg"
                        className="img-pop-up"
                        target="_blank"
                      >
                        <div className="deal-details">
                          <h6 className="deal-title">Sneaker for Sports</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-deal">
                      <div className="overlay" />
                      <img
                        className="img-fluid w-100"
                        src="img/category/c3.jpg"
                        alt=""
                      />
                      <a
                        href="img/category/c3.jpg"
                        className="img-pop-up"
                        target="_blank"
                      >
                        <div className="deal-details">
                          <h6 className="deal-title">Product for Couple</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <div className="single-deal">
                      <div className="overlay" />
                      <img
                        className="img-fluid w-100"
                        src="img/category/c4.jpg"
                        alt=""
                      />
                      <a
                        href="img/category/c4.jpg"
                        className="img-pop-up"
                        target="_blank"
                      >
                        <div className="deal-details">
                          <h6 className="deal-title">Sneaker for Sports</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-deal">
                  <div className="overlay" />
                  <img className="img-fluid w-100" src="img/category/c5.jpg" alt="" />
                  <a
                    href="img/category/c5.jpg"
                    className="img-pop-up"
                    target="_blank"
                  >
                    <div className="deal-details">
                      <h6 className="deal-title">Sneaker for Sports</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <section className="owl-carousel active-product-area section_gap">
          {/* single product slide */}
          <div className="single-product-slider">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <div className="section-title">
                    <h1>Latest Products</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* single product */}
                {products.map((product, key) => (
                <div className="col-lg-3 col-md-6">
                  <Link to={"/ProductDetails/" + product.id}>
                    <div className="single-product">
                      <img className="img-fluid" src={`${product.image}`}  alt="" />
                      <div className="product-details">
                        <h6>{product.name}</h6>    
                           <div className="price">
                             <h6>{product.price}vnd</h6>
                            </div>
                      </div>
                    </div>
                   </Link>
                </div>
                   ))}
              </div>
            </div>
          </div>
          {/* single product slide */}
         
        </section>
       
        <section className="exclusive-deal-area">
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 no-padding exclusive-left">
                <div className="row clock_sec clockdiv" id="clockdiv">
                  <div className="col-lg-12">
                    <h1>Exclusive Hot Deal Ends Soon!</h1>
                    <p>Who are in extremely love with eco friendly system.</p>
                  </div>
                  <div className="col-lg-12">
                    <div className="row clock-wrap">
                      <div className="col clockinner1 clockinner">
                        <h1 className="days">150</h1>
                        <span className="smalltext">Days</span>
                      </div>
                      <div className="col clockinner clockinner1">
                        <h1 className="hours">23</h1>
                        <span className="smalltext">Hours</span>
                      </div>
                      <div className="col clockinner clockinner1">
                        <h1 className="minutes">47</h1>
                        <span className="smalltext">Mins</span>
                      </div>
                      <div className="col clockinner clockinner1">
                        <h1 className="seconds">59</h1>
                        <span className="smalltext">Secs</span>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="" className="primary-btn">
                  Shop Now
                </a>
              </div>
              <div className="col-lg-6 no-padding exclusive-right">
                <div className="active-exclusive-product-slider">
                  {/* single exclusive carousel */}
                  <div className="single-exclusive-slider">
                    <img className="img-fluid" src="img/product/e-p1.png" alt="" />
                    <div className="product-details">
                      <div className="price">
                        <h6>$150.00</h6>
                        <h6 className="l-through">$210.00</h6>
                      </div>
                      <h4>addidas New Hammer sole for Sports person</h4>
                      <div className="add-bag d-flex align-items-center justify-content-center">
                        <a className="add-btn" href="">
                          <span className="ti-bag" />
                        </a>
                        <span className="add-text text-uppercase">Add to Bag</span>
                      </div>
                    </div>
                  </div>
                  {/* single exclusive carousel */}
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="brand-area section_gap">
          <div className="container">
            <div className="row">
              <a className="col single-img" href="#">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/brand/1.png"
                  alt=""
                />
              </a>
              <a className="col single-img" href="#">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/brand/2.png"
                  alt=""
                />
              </a>
              <a className="col single-img" href="#">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/brand/3.png"
                  alt=""
                />
              </a>
              <a className="col single-img" href="#">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/brand/4.png"
                  alt=""
                />
              </a>
              <a className="col single-img" href="#">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/brand/5.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </section>
        
       
      </>
        </LayoutHome>
    );
}

export default Home;