import { useLocation } from "react-router-dom";

const DetailProduct = (props) => {
  let data = useLocation();
  console.log(props.data);
  return <div>Product </div>;
};

export default DetailProduct;
