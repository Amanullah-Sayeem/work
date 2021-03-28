import { useEffect, useState } from "react";
import { apiEndPoint } from "./../Api/Product/product";
import axios from "axios";
import "./product.css";
import ProductCart from "./cart/productCart";

const AllProduct = () => {
  const [allProduct, setAllProduct] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(apiEndPoint + "/api/product");
      setAllProduct(data.data);
    };
    getData();
  }, []);

  if (!allProduct) {
    return "loading";
  }
  return (
    <div className="allProduct">
      <div className="container">
        <div className="headerOne">All Products</div>
        <div className="row">
          {allProduct.map((item) => (
            <div className="p-1 col-3">
              <ProductCart item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
