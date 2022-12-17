import { Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './HeaderTwo.css'

const HeaderTwo = () => {
    const { t } = useTranslation();

    return (
        <div class="header2">
            <div class="header2__inner">
                <div class="header__breadcrumb">
                    <p id="breadcrumb__title">{
                        setInterval(()=>{document.getElementById('breadcrumb__title').innerText = new Date().toLocaleTimeString()}, 1000)}
                    </p>
                </div>
                <p id="localTime">
                    {/* {
                    setInterval(()=>{document.getElementById('localTime').innerText = new Date().toLocaleTimeString()}, 1000)} */}
                </p>
                <div class="header2__menu">
                    <ul class="header2__item">
                        <li class="header__homepage">
                            <Link to="/" className='header2__link'>{t('homepageHeaderMenu')}</Link>
                        </li>
                        <li class="header__products">
                            <Link to="/allproducts" className='header2__link'>{t('productHeaderMenu')}</Link>
                        </li>
                        <li class="header__contact">
                            <Link to="/contact" className='header2__link'>{t('contactHeaderMenu')}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default HeaderTwo;