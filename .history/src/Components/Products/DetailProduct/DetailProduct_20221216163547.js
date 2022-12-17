import { useLocation } from "react-router-dom";

const DetailProduct = () => {
  const { state } = useLocation();
  const idImage = state["idImage"];
  return (
    <div>
      {/* Product {state["productName"]} {state["priceProduct"]}{" "} */}
      <div class="detail__product">
        <div class="detail__productInner">
          <div class="detail__image">
            <img
              src={require(`../../../assets/images/ImageAllProducts/product_${idImage}/product_${idImage}_1.png`)}
              alt=""
              id="detail__image-highResolution"
            ></img>
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
      <div class="description__product">
        <div class="description__title">MÔ TẢ SẢN PHẨM</div>
        <div class="description__content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            impedit dolore amet assumenda ullam blanditiis molestias commodi
            nemo a atque corrupti deserunt quidem, repudiandae doloremque
            aspernatur dolor? Quod repellat distinctio nisi totam sapiente
            fugiat rem unde obcaecati dolor animi libero neque facere vero
            deleniti earum harum doloribus iure consectetur voluptatem
            asperiores, ex autem ratione! Dolorem vitae omnis doloribus
            asperiores cumque beatae ratione veritatis voluptas autem quaerat
            dolore officia excepturi totam explicabo, aspernatur repudiandae
            quo, illo repellendus quam tempora, sequi molestias ipsum pariatur
            cum. Sapiente minima ab veniam optio rem dignissimos similique esse
            eum. Voluptatibus neque commodi nam quidem natus, vel beatae
            explicabo harum voluptate. Unde distinctio magnam dolorem libero,
            aliquid quisquam iste molestias velit earum, possimus labore maiores
            a sint est, itaque illum? Fugiat maxime delectus enim, deserunt
            accusantium repellendus quibusdam animi tempore at nemo eum
            recusandae fugit quod sapiente assumenda nam velit vero placeat,
            itaque soluta tenetur libero? Ullam!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            impedit dolore amet assumenda ullam blanditiis molestias commodi
            nemo a atque corrupti deserunt quidem, repudiandae doloremque
            aspernatur dolor? Quod repellat distinctio nisi totam sapiente
            fugiat rem unde obcaecati dolor animi libero neque facere vero
            deleniti earum harum doloribus iure consectetur voluptatem
            asperiores, ex autem ratione! Dolorem vitae omnis doloribus
            asperiores cumque beatae ratione veritatis voluptas autem quaerat
            dolore officia excepturi totam explicabo, aspernatur repudiandae
            quo, illo repellendus quam tempora, sequi molestias ipsum pariatur
            cum. Sapiente minima ab veniam optio rem dignissimos similique esse
            eum. Voluptatibus neque commodi nam quidem natus, vel beatae
            explicabo harum voluptate. Unde distinctio magnam dolorem libero,
            aliquid quisquam iste molestias velit earum, possimus labore maiores
            a sint est, itaque illum? Fugiat maxime delectus enim, deserunt
            accusantium repellendus quibusdam animi tempore at nemo eum
            recusandae fugit quod sapiente assumenda nam velit vero placeat,
            itaque soluta tenetur libero? Ullam!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            impedit dolore amet assumenda ullam blanditiis molestias commodi
            nemo a atque corrupti deserunt quidem, repudiandae doloremque
            aspernatur dolor? Quod repellat distinctio nisi totam sapiente
            fugiat rem unde obcaecati dolor animi libero neque facere vero
            deleniti earum harum doloribus iure consectetur voluptatem
            asperiores, ex autem ratione! Dolorem vitae omnis doloribus
            asperiores cumque beatae ratione veritatis voluptas autem quaerat
            dolore officia excepturi totam explicabo, aspernatur repudiandae
            quo, illo repellendus quam tempora, sequi molestias ipsum pariatur
            cum. Sapiente minima ab veniam optio rem dignissimos similique esse
            eum. Voluptatibus neque commodi nam quidem natus, vel beatae
            explicabo harum voluptate. Unde distinctio magnam dolorem libero,
            aliquid quisquam iste molestias velit earum, possimus labore maiores
            a sint est, itaque illum? Fugiat maxime delectus enim, deserunt
            accusantium repellendus quibusdam animi tempore at nemo eum
            recusandae fugit quod sapiente assumenda nam velit vero placeat,
            itaque soluta tenetur libero? Ullam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
