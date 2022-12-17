import { useLocation } from "react-router-dom";

const DetailProduct = () => {
  const location = useLocation();
  console.log(location);
  return <div>Product </div>;
};

export default DetailProduct;
