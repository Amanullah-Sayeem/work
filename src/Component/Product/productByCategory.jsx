import { useEffect, useState } from "react";
import axios from "axios";
import { apiEndPoint } from "./../Api/Product/product";
import ProductCart from "./cart/productCart";
import { useParams } from "react-router";

const ProductByCategory = () => {
  const [products, setProducts] = useState(null);
  const categoryProduct = useParams();

  useEffect(() => {
    console.log(
      "asasas",
      apiEndPoint + `/api/category/${categoryProduct.id}/product`
    );

    const getData = async () => {
      const { data } = await axios.get(
        apiEndPoint + `/api/category/${categoryProduct.id}/product`
      );
      setProducts(data.data);
    };
    getData();
  }, [categoryProduct]);

  if (!products) {
    return "Loadding";
  }

  return (
    <div className="allProduct">
      <div className="container">
        <div className="headerOne">{categoryProduct.name}</div>
        <div className="row">
          {products.map((item) => (
            <div className="p-1 col-3">
              <ProductCart item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductByCategory;
