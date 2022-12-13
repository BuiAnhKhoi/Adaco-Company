import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./HeaderOne.css";
import LogoAdacoCompany from "../../assets/images/Logo-Adaco-100x100.png";

const Header = () => {
  function focusSearchInput() {
    document.getElementsByClassName("search__result")[0].style.display =
      "block";
  }

  function blurSearchInput() {
    document.getElementsByClassName("search__result")[0].style.display = "none";
  }

  // function inProcess() {
  //     alert('Tính năng đang phát triển. Vui lòng sử dụng sau')
  // }
  const { t, i18n } = useTranslation();

  const changeLanguageSuccessNotification = () =>
    toast.success(t("changeLanguageSuccess"));

  const inProcess = () => toast.info(t("notSupportFrLanguageRightNow"));

  const ChangeLanguage = (code) => {
    document.querySelector("html").lang = code;
    i18n.changeLanguage(code);
  };

  const changeModeScreen = () => {
    if (document.querySelector("body").className === "lightMode") {
      document.querySelector("body").className = "darkMode";
      document.getElementById("btn__change__mode").innerText = t("lightMode");
    } else if (document.querySelector("body").className === "darkMode") {
      document.querySelector("body").className = "lightMode";
      document.getElementById("btn__change__mode").innerText = t("darkMode");
    }
  };

  return (
    <div>
      <div class="header1">
        <div class="header1__inner">
          <div class="header__brand">
            <div class="brand__name">
              <Link to="/">{t("brandName")}</Link>
            </div>
            <img
              class="header_logo"
              src={LogoAdacoCompany}
              alt="Logo Adaco Company"
              width="70"
              height="70"
            />
          </div>
          <div class="header__search">
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
              alt="Search icon"
              onclick="processDev();"
            />
            <input
              type="text"
              placeholder={t("searchTitle")}
              maxlength="50"
              id="searchProduct"
              oninput="searchInput()"
              onFocus={focusSearchInput}
              onBlur={blurSearchInput}
            />
            <div class="search__result">
              {t("searchResult")}
              <br />
            </div>
          </div>
          <div class="header1__menu">
            <ul class="header1__item">
              <div class="language__page">
                <p id="language__title">{t("languageTitle")}</p>
                <div class="dropdown__language">
                  <p
                    id="vi__language__title"
                    onClick={() => {
                      ChangeLanguage("vn");
                      changeLanguageSuccessNotification();
                    }}
                  >
                    VI
                  </p>
                  <p
                    id="en__language__title"
                    onClick={() => {
                      ChangeLanguage("en");
                      changeLanguageSuccessNotification();
                    }}
                  >
                    EN
                  </p>
                  <p id="fr__language__title" onClick={inProcess}>
                    FR
                  </p>
                </div>
              </div>
            </ul>
            <div class="dark__light__mode">
              <button
                id="btn__change__mode"
                onClick={() => {
                  changeModeScreen();
                }}
              >
                {t("darkMode")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Header;
