import { useLocation } from "react-router-dom";

const DetailProduct = () => {
  const { state } = useLocation();
  console.log(state["imageProduct"]);
  return (
    <div>
      {/* Product {state["productName"]} {state["priceProduct"]}{" "} */}
      <div class="detail__product">
        <div class="detail__productInner">
          <div class="detail__image">
            <img
              src={require(state["imageProduct"])}
              //   id="detail__image-highResolution"
              //   alt="Hình ảnh chính"
            />
            {/* <div class="image__more">
                        <img src="#" alt="Hình ảnh 1" id="image__product1" onclick="changeMainImage('1');" />
                        <img src="#" alt="Hình ảnh 2" id="image__product2" onclick="changeMainImage('2');" />
                    </div> */}
          </div>
          <div class="detail__infor">
            <p class="detail__title">SẢN PHẨM PRODUCT 1</p>
            <p class="detail__price">000.000 vnđ</p>
            <div class="detail__unit">
              <p id="unit__title">Số lượng :</p>
              <button
                class="btn__unit plus__minusUnit"
                id="plus__unit"
                onclick="plusUnit();"
              >
                +
              </button>
              <input
                type="tel"
                maxlength="2"
                placeholder="01"
                id="value__unit"
                value="1"
              />
              <button
                class="btn__unit plus__minusUnit"
                id="minus__unit"
                onclick="minusUnit();"
              >
                -
              </button>
            </div>
            <i>(Lưu ý: mua ít nhất 1 cái, nhiều nhất 99 cái)</i>
            <div class="button__product">
              <button
                class="add__cart"
                onclick="alert('Tính năng đang phát triển, muốn mua sản phẩm hãy liên hệ thông tin cửa hàng, xin cảm ơn');"
              >
                <p>THÊM VÀO GIỎ HÀNG</p>
              </button>
              <button
                class="buy__now"
                onclick="alert('Tính năng đang phát triển, muốn mua sản phẩm hãy liên hệ thông tin cửa hàng, xin cảm ơn');"
              >
                <p>MUA NGAY</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
