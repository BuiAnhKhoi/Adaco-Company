import { useLocation } from "react-router-dom";

const DetailProduct = () => {
  const { state } = useLocation();
  //   console.log();
  return (
    <div>
      {/* Product {state["productName"]} {state["priceProduct"]}{" "} */}
    </div>
  );
};

export default DetailProduct;
