import { useLocation } from "react-router-dom";

const DetailProduct = () => {
  let data = useLocation();
  consolelog(data);
  return <div>Product </div>;
};

export default DetailProduct;
