import React from "react";
import { Link } from "react-router-dom";

function ProductItem(props) {
    let {the_key,product} = props
  return (
    <div className="single-product" key={the_key}>
      <Link to={"/ProductDetails/" + product.id}>
        <img className="imgf-luid" src={`${product.image}`} alt="" />
        <div className="product-details">
          <h6>{product.name}</h6>
          <div className="price">
            <h6>{product.price}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
