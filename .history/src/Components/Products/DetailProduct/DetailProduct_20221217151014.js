import { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

import "./DetailProduct.css";

const DetailProduct = () => {
  const { state } = useLocation();
  const idImage = state["idImage"];
  const [checkCurrentUnit, setCheckCurrentUnit] = useState(true);
  const { t } = useTranslation();

  const CheckNumberValid = () => {
    let currentUnit = document.getElementById("value__unit").value;
    if (currentUnit.length !== 0) {
      for (let i = 0; i < currentUnit.length; i++) {
        const charCodeI = currentUnit.charCodeAt(i);
        if (charCodeI < 48 || charCodeI > 57) {
          setCheckCurrentUnit(false);
          toast.warn(t("currentUnitDetailProductContainLetter"));
          document.getElementById("value__unit").value = "";
          break;
        }
      }
    }
  };

  const plusUnit = () => {
    let currentUnit = parseInt(document.getElementById("value__unit").value);
    if (currentUnit === 99) {
      toast.warn(t("maximumUnitPerOrderProduct"));
    } else if (isNaN(currentUnit)) {
      toast.warn(t("notTypeUnitProduct"));
    } else {
      currentUnit = currentUnit + 1;
      document.getElementById("value__unit").value = currentUnit.toString();
    }
  };

  const minusUnit = () => {
    let currentUnit = parseInt(document.getElementById("value__unit").value);
    if (currentUnit === 1 || currentUnit === 0) {
      toast.warn(t("minimumUnitPerOrderProduct"));
    } else if (isNaN(currentUnit)) {
      toast.warn(t("notTypeUnitProduct"));
    } else {
      currentUnit = currentUnit - 1;
      document.getElementById("value__unit").value = currentUnit.toString();
    }
  };

  const inProcess = () => {
    toast.warn(t("inProcess"));
  };

  const showAnotherImageProduct = () => {
    let anotherImageCount = state["allImagesPerProduct"];
    let showAllAnotherImage = [];
    for (let indexTemp = 2; indexTemp <= anotherImageCount; indexTemp++) {
      showAllAnotherImage.push(
        <img
          src={require(`../../../assets/images/ImageAllProducts/product_${idImage}/product_${idImage}_${indexTemp}.png`)}
          alt="Hình ảnh 1"
          id="image__product1"
          onclick="changeMainImage('1');"
        />
      );
    }
    return showAllAnotherImage;
  };

  const changeMainImage = (image_position) => {
    let idElements = "image__product" + image_position;
    let imageMainProduct = document.getElementById(
      "detail__image-highResolution"
    ).src;
    let anotherProduct = document.getElementById(
      `image__product${image_position}`
    ).src;
    console.log(imageMainProduct);
    console.log(anotherProduct);
  };

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
            <div class="image__more">{showAnotherImageProduct()}</div>
          </div>
          <div class="detail__infor">
            <p class="detail__title">{state["productName"]}</p>
            <p class="detail__price">{state["priceProduct"]}</p>
            <div class="detail__unit">
              <p id="unit__title">Số lượng :</p>
              <button
                class="btn__unit plus__minusUnit"
                id="plus__unit"
                onClick={plusUnit}
              >
                +
              </button>
              <input
                type="tel"
                maxlength="2"
                placeholder="01"
                id="value__unit"
                onChange={CheckNumberValid}
              />
              <button
                class="btn__unit plus__minusUnit"
                id="minus__unit"
                onClick={minusUnit}
              >
                -
              </button>
            </div>
            <i>(Lưu ý: mua ít nhất 1 cái, nhiều nhất 99 cái)</i>
            <div class="button__product">
              <button class="add__cart" onClick={inProcess}>
                <p>THÊM VÀO GIỎ HÀNG</p>
              </button>
              <button class="buy__now" onClick={inProcess}>
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
