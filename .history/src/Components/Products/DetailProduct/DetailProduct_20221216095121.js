import { useLocation } from "react-router-dom";

const DetailProduct = () => {
  const { state } = useLocation();
  console.log(state[0]);
  return <div>Product </div>;
};

export default DetailProduct;
