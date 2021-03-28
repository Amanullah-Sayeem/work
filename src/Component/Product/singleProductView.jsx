import { useState } from "react";

const ProductView = () => {
  const [madal, setModal] = useState(true);
  const [styles, setStyles] = useState();

  if (madal === true) {
    return (
      <div className="modalContainer">
        <div className={madal ? "customModal positionTwo " : " customModal "}>
          <div className="">sasas</div>
        </div>
      </div>
    );
  }
  return <div>product vew here</div>;
};

export default ProductView;
