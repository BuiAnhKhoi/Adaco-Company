import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AllProducts.css";

const json = require("../../../assets/data/allProduct.json");

const AllProduct = () => {
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);

  document.querySelector("title").innerText = t("productHeaderMenu");

  const handleChangePageShowProduct = (e) => {
    console.log(e.value);
  };

  function showAllProduct() {
    let limitProductNeedShow = 8;
    let firstIndexProductNeedShow =
      (currentPage - 1) * limitProductNeedShow + 1;
    let lastIndexProductNeedShow = currentPage * limitProductNeedShow;

    let elementAllProduct = [];
    for (
      let indexJson = firstIndexProductNeedShow;
      indexJson <= lastIndexProductNeedShow;
      indexJson++
    ) {
      elementAllProduct.push(
        <div class="card__item">
          <img
            src={require("../../../assets/images/ImageAllProducts/product_" +
              indexJson +
              "/" +
              "product_" +
              indexJson +
              "_1.png")}
            alt="product images"
            className="card__imageItem"
          />
          <p>
            <a href="index.html">
              {json["product_" + indexJson]["product_" + indexJson + "_name"]}
            </a>
          </p>
          <h3>
            {json["product_" + indexJson]["product_" + indexJson + "_price"]}
          </h3>
        </div>
      );
    }
    return elementAllProduct;
  }

  const inProcess = () => toast.info(t("functionNotSupportRightNow"));

  return (
    <div class="product">
      <div class="product__inner">
        <p class="product__filterTitle">{t("filterTitle")}</p>
        <div class="product__filter">
          <button type="button" onClick={inProcess}>
            <div class="filter__priceHighToLow">
              <img
                src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-arrow-down-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya.png"
                alt="icon Price Top To Down"
              />
              <p>{t("filterPriceTopToDown")}</p>
            </div>
          </button>
          <button type="button" onClick={inProcess}>
            <div class="filter__priceLowToHigh">
              <img
                src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-arrow-down-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya.png"
                alt="icon Price Down To Top"
              />
              <p>{t("filterPriceDownToTop")}</p>
            </div>
          </button>
          <button type="button">
            <div class="filter__mostWatch">
              <img
                src="https://img.icons8.com/material-outlined/24/000000/visible.png"
                alt="icon High View"
              />
              <p>{t("filterProductWatchMore")}</p>
            </div>
          </button>
        </div>
        <div class="all__products">{showAllProduct()}</div>
        <div className="pagination__products">
          <button onClick={handleChangePageShowProduct}>1</button>
          <button>2</button>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
