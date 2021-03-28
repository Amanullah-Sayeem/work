import "./productCart.css";
import { apiEndPoint } from "./../../Api/Product/product";
import { useHistory } from "react-router-dom";

const ProductCart = ({ item }) => {
  const history = useHistory();
  const onProductClick = () => {
    history.push(`/product/view/${item._id}`);
  };
  return (
    <div className="cartContainer">
      <div
        onClick={onProductClick}
        style={{ cursor: "pointer" }}
        className="container"
      >
        <img src={`${apiEndPoint}${item.cover.medium}`} alt="" />

        <div className="itemName">
          <p>{item.name}</p>
        </div>
        <ul className="groupItemsX">
          <li className="tkOne">
            ${item.price.offer ? item.price.offer : item.price.regular}
          </li>
          <li className="tkTwo">
            ${item.price.offer ? item.price.regular : ""}
          </li>
          <li>
            <button className="customButton">Add Cart</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ProductCart;
