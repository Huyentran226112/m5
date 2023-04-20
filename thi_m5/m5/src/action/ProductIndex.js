import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductModel from "../models/ProductModel";
function ProductIndex(props) {
  // const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductModel.getAll()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
    if (isConfirmed) {
      ProductModel.delete(id)
      .then((res) => {
        // navigate("/");
        alert('ok.đã xóa rồi nha !!')
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("Đã có lỗi xảy ra ");
      });
    }
  };
  return (
    <div>
      <table border={1}>
        <thead >
          <h1 >DANH SÁCH SẢN PHẨM</h1>
          <button >
            {" "}
            <Link to={"/Product/create"}>thêm sản phẩm</Link>{" "}
          </button>
          <tr>
            <th> ID </th>
            <th>Tên sản phẩm  </th>
            <th> Giá </th>
            <th> Tồn kho </th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {products.map((Product, key) => (
            <tr key={key}>
              <td>{Product.id}</td>
              <td>{Product.name}</td>
              <td>{Product.price}</td>
              <td>{Product.inventory}</td>
              <td>
                <button className="btn btn-warning">
                  <Link to={"/Product/"+ Product.id}>show</Link>
                </button>{" "}
                ||
                <button className="btn btn-warning">
                  <Link to={"/Product/" + Product.id + "/edit"}>cập nhật</Link>
                </button>{" "}
                ||
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(Product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductIndex;
