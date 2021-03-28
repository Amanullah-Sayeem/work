import { Link, useHistory } from "react-router-dom";
import "./sidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiEndPoint } from "./../Api/Product/product";
const Sidebar = () => {
  const [category, setCategory] = useState(null);
  const history = useHistory();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(apiEndPoint + "/api/category");

      setCategory(data.data);
    };
    getData();
  }, []);

  const [active, setActive] = useState(null);
  const [all, setallActive] = useState(true);
  const handleActiveAll = () => {
    setallActive(true);
    setActive(null);
  };
  const handleActiveCategory = (index) => {
    setActive(index);
    setallActive(false);
  };
  if (all) {
    history.push("/product/all");
  }
  if (category) {
    return (
      <div className="container-fluid">
        <div className="logo mt-3 mb-3 text-center">
          <img src="/Image/logo/welcome.png" width="40%" alt="" />
        </div>
        <div className="conatiner">
          <div className="sidebarItem" onClick={handleActiveAll}>
            <Link to="/product/all/">
              <div className={all ? " row activeStyle" : " row"}>
                <div>All</div>
              </div>
            </Link>
          </div>
          {category.map((item) => (
            <div
              className="sidebarItem"
              onClick={() => handleActiveCategory(category.indexOf(item))}
            >
              <Link to={`/product/by/category/${item._id}/${item.name}`}>
                <div
                  className={
                    category.indexOf(item) === active
                      ? " row activeStyle"
                      : " row"
                  }
                >
                  <div>{item.name}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return "looding";
  }
};

export default Sidebar;
