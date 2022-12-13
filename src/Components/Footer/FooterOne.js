import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LogoAdacoCompany from "../../assets/images/Logo-Adaco-100x100.png";
import "./FooterOne.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div class="footer1">
      <div class="footer1__inner">
        <div class="footer__brand">
          <img src={LogoAdacoCompany} alt="Logo Adaco" class="footer__logo" />
          <p>
            <Link to="/">CÔNG TY TNHH ADACO</Link>
          </p>
        </div>
        <div class="footer__address">
          <div class="footer__address1">
            <div class="footer_addressNumberPhone">
              <p class="footer_addressTitle">{t("numberTelephoneCompany")}</p>
              <p>+84 123 456 789</p>
            </div>
            <div class="footer_addressGmail">
              <p class="footer_addressTitle">{t("gmailAddress")}</p>
              <p>alice[@]google[.]com</p>
            </div>
            <div class="footer_addressWebsite">
              <p class="footer_addressTitle">{t("websiteCompany")}</p>
              <Link to="/">http:[://]adaco[.]com[.]vn</Link>
            </div>
          </div>
          <div class="footer_address2">
            <p class="footer_addressTitle">{t("addressCompany")}</p>
            <p>{t("addressCompanyDetail")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
