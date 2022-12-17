import { useLocation } from "react-router-dom";

const DetailProduct = (props) => {
  console.log(props);
  return <div>Product {props.productName}</div>;
};

export default DetailProduct;
