import { useLocation } from "react-router-dom";

const DetailProduct = () => {
  let data = useLocation();
  console.log(data);
  return <div>Product </div>;
};

export default DetailProduct;
