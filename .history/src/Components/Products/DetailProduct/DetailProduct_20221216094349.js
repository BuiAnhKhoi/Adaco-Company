import { useLocation } from "react-router-dom";

const DetailProduct = () => {
  const location = useLocation();
  const { productName } = location.state;
  console.log(productName);
  return <div>Product </div>;
};

export default DetailProduct;
