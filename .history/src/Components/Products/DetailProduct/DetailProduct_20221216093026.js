import { useLocation } from "react-router-dom";

const DetailProduct = () => {
  let data = useLocation();
  console.log(data.state);
  return <div>Product </div>;
};

export default DetailProduct;
