import Iframe from 'react-iframe'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './AddressCompany.css'

const AddressCompany = () => {
    const { t } = useTranslation();

    return (
        <div className='AddressCompany'>
            <div class="contact__inner">
                <div class="contact__map">
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31351.371221955702!2d106.76216111784545!3d10.817326806793188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526f07f6e787f%3A0x28314d3c3c460662!2zUGjGsOG7m2MgTG9uZyBCLCBRdeG6rW4gOSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1666790225374!5m2!1svi!2s"
                    width='600px'
                    height='450px'/>
                </div>
                <div class="contact__infor">
                    <div class="contact__address">
                        <h3>{t('addressCompany')}</h3>
                        <p>{t('addressCompanyDetail')}</p>
                    </div>
                    <div class="contact__telephoneNumber">
                        <h3>{t('numberTelephoneCompany')}</h3>
                        <p>+84 822 971 247</p>
                    </div>
                    <div class="contact__email">
                        <h3>{t('gmailAddress')}</h3>
                        <p>alice.adaco@gmail.com</p>
                    </div>
                    <div class="contact__website">
                        <h3>Website</h3>
                        <p><Link to="/">Adaco company</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressCompany;