import { useLocation } from "react-router-dom";

const DetailProduct = () => {
  let data = useLocation();
  console.log(data.productName);
  return <div>Product </div>;
};

export default DetailProduct;
