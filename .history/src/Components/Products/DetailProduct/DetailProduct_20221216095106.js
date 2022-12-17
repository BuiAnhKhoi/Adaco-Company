import { useLocation } from "react-router-dom";

const DetailProduct = () => {
  const { state } = useLocation();
  console.log(typeof state);
  return <div>Product </div>;
};

export default DetailProduct;
