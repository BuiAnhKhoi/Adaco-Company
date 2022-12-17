import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AllProducts.css";

const json = require("../../../assets/data/allProduct.json");

const AllProduct = () => {
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);
  const [currentFilter, setCurrentFilter] = useState("");

  document.querySelector("title").innerText = t("productHeaderMenu");

  const handleChangePageShowProduct = (e) => {
    setCurrentPage(parseInt(e.target.value));
  };

  const handleFilter = (e) => {
    setCurrentFilter(e.target.innerText);
  };

  const showAllProduct = (filterPara) => {
    let limitProductNeedShow = 8;
    let firstIndexProductNeedShow =
      (currentPage - 1) * limitProductNeedShow + 1;
    let lastIndexProductNeedShow = currentPage * limitProductNeedShow;

    let elementAllProduct = [];
    let productFilterArray = [];

    for (
      let indexJson = firstIndexProductNeedShow;
      indexJson <= lastIndexProductNeedShow;
      indexJson++
    ) {
      productFilterArray.push([
        indexJson,
        json["product_" + indexJson]["product_" + indexJson + "_price"],
      ]);
    }

    if (filterPara === "") {
    } else if (filterPara === "Price Top - Down") {
      productFilterArray.sort(function (para_1, para_2) {
        return para_1[1] - para_2[1];
      });
    } else if (filterPara === "Price Down - Top") {
    }

    for (let index in productFilterArray) {
      index++;
      console.log(
        "../../../assets/images/ImageAllProducts/product_" +
          index +
          "/" +
          "product_" +
          index +
          "_1.png"
      );
      elementAllProduct.push(
        <div class="card__item">
          <img
            src={require("../../../assets/images/ImageAllProducts/product_" +
              index +
              "/" +
              "product_" +
              index +
              "_1.png")}
            alt="product images"
            className="card__imageItem"
          />
          <p>
            <a href="index.html">
              {json["product_" + index]["product_" + index + "_name"]}
            </a>
          </p>
          <h3>{json["product_" + index]["product_" + index + "_price"]}</h3>
        </div>
      );
    }
    // console.log(elementAllProduct);
    return elementAllProduct;
  };

  const inProcess = () => toast.info(t("functionNotSupportRightNow"));

  return (
    <div class="product">
      <div class="product__inner">
        <p class="product__filterTitle">{t("filterTitle")}</p>
        <div class="product__filter">
          <button onClick={handleFilter}>
            <div class="filter__priceHighToLow">
              <img
                src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-arrow-down-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya.png"
                alt="icon Price Top To Down"
              />
              <p>{t("filterPriceTopToDown")}</p>
            </div>
          </button>
          <button type="button" onClick={handleFilter}>
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
        <div class="all__products">{showAllProduct(currentFilter)}</div>
        <div className="pagination__products">
          <button value={1} onClick={handleChangePageShowProduct}>
            1
          </button>
          <button value={2} onClick={handleChangePageShowProduct}>
            2
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
