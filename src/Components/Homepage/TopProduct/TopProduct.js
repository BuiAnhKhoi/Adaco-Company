import React from "react";
import { Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import ImageTopProduct from '../../../assets/images/Logo-Adaco-100x100.png'
import './TopProduct.css'

const TopProduct = () => {
    const { t } = useTranslation();

    return (
        <div class="top__products">
            <div class="infor__top__products">
                <div class="text__top__products">
                    <h3>{t('homepageTopProductTitle')}</h3>
                    <h6 id="subtitle__top__products">{t('homepageTopProductDetail')}</h6>
                </div>
                <button type="button" class="more_product__btn">
                    <Link to="/allproducts" className='more_product__link'>{t('homepageTopProductBtnMoreProduct')}</Link>
                </button>
            </div>
            <div class="top__product__list">
                <div class="card__product">
                    <img src={ImageTopProduct} alt="product Photos" class="card__image" />
                    <h5>Sản phẩm 1</h5>
                    <h3>000.000đ</h3>
                </div>
                <div class="card__product">
                    <img src={ImageTopProduct} alt="product Photos" class="card__image" />
                    <h5>Sản phẩm 1</h5>
                    <h3>000.000đ</h3>
                </div>
                <div class="card__product">
                    <img src={ImageTopProduct} alt="product Photos" class="card__image" />
                    <h5>Sản phẩm 1</h5>
                    <h3>000.000đ</h3>
                </div>
                <div class="card__product">
                    <img src={ImageTopProduct} alt="product Photos" class="card__image" />
                    <h5>Sản phẩm 1</h5>
                    <h3>000.000đ</h3>
                </div>
                <div class="card__product">
                    <img src={ImageTopProduct} alt="product Photos" class="card__image" />
                    <h5>Sản phẩm 1</h5>
                    <h3>000.000đ</h3>
                </div>
            </div>
        </div>
    )
}

export default TopProduct;