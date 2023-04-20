import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductModel from "../models/ProductModel";

function ProductShow(props) {
  const { id } = useParams();
  const [products, setProducts] = useState({});

  useEffect(function () {
    ProductModel.find(id)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <div>
      Chi tiết sản phẩm
      <table border={1} width={"100%"}>
        <tr>
          <td>Id</td>
          <td>{products.id}</td>
        </tr>
        <tr>
          <td>tên sản phẩm</td>
          <td>{products.name}</td>
        </tr>
        <tr>
          <td>giá </td>
          <td>{products.price}</td>
        </tr>
        <tr>
          <td>tồn kho </td>
          <td>{products.inventory}</td>
        </tr>
        <tr>
          <td>mô tả </td>
          <td>{products.description}</td>
        </tr>
      </table>
    </div>
  );
}

export default ProductShow;
