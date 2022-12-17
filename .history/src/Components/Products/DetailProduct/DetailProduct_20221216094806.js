import { useLocation } from "react-router-dom";

const DetailProduct = () => {
  const location = useLocation();
  console.log(location.state);
  return <div>Product </div>;
};

export default DetailProduct;
