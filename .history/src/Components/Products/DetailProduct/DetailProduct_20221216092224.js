import { useLocation } from "react-router-dom";

const DetailProduct = () => {
  const location = useLocation();
  const Name = location.state.productName;
  return <div>Product {Name}</div>;
};

export default DetailProduct;
