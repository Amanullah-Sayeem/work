import Sidebar from "./Component/Sidebar/sidebar";
import { Route, Switch } from "react-router";
import AllProduct from "./Component/Product/allProduct";
import "./App.css";
import ProductByCategory from "./Component/Product/productByCategory";
import ProductView from "./Component/Product/singleProductView";
const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <Route path="/product/view/" component={ProductView} />
          {/* <Sidebar /> */}
        </div>
        <div style={{ backgroundColor: "#f6f7f9" }} className="col-9">
          <Switch>
            <Route path="/product/all/" component={AllProduct} />
            <Route
              path="/product/by/category/:id/:name/"
              component={ProductByCategory}
            />

            {/* <Route path="/profile/:id?/" component={Profile} />
          <Route path="/request/:id?/" component={RequestPage} />
          <Route path="/notification/:id?/" component={Notification} />
          <Route path="/request/:id?/" component={RequestPage} /> */}

            {/* <Route path="/home/" component={Home} /> */}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
