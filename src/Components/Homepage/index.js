import { useTranslation } from 'react-i18next'

import SlideShowImage from './Slideshow/SlideshowImage'
import TopProduct from './TopProduct/TopProduct'
import InforCompany from './InforCompany/InforCompany'

import './index.css'

const HomePage = () => {
    const { t } = useTranslation();
    document.querySelector('title').innerText = t('homepageHeaderMenu')

    return (
        <div className='homepageAdaco'>
            <SlideShowImage></SlideShowImage>
            <TopProduct></TopProduct>
            <InforCompany></InforCompany>
        </div>
    )
}

export default HomePage;