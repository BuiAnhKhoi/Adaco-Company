import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./AllProducts.css";

const json = require("../../../assets/data/allProduct.json");

const AllProduct = () => {
  const { t } = useTranslation();

  document.querySelector("title").innerText = t("productHeaderMenu");

  function showAllProduct() {
    let elementAllProduct = [];

    for (let indexJson in json) {
      elementAllProduct.push(
        <div class="card__item">
          <img
            src={require("../../../assets/images/ImageAllProducts/" +
              indexJson +
              "/" +
              indexJson +
              "_1.png")}
            alt="product images"
            className="card__imageItem"
          />
          <p>
            <a href="index.html">{json[indexJson][indexJson + "_name"]}</a>
          </p>
          <h3>{json[indexJson][indexJson + "_price"]}</h3>
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
      </div>
    </div>
  );
};

export default AllProduct;
