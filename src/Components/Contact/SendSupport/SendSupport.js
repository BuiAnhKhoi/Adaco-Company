import { useTranslation } from 'react-i18next'

import './SendSupport.css'

const SendSupport = () => {
    const { t } = useTranslation();

    function sendSupportbtn(){
        alert('Tính năng đang phát triển')
    }

    return (
        <div className='sendSupport'>
            <div class="contact__inner2">
                <div class="send__question">
                    <p id="send__questionTitle">{t('sendSupportTitle')}</p>
                    <div class="send__questionInner">
                        <div class="require__infor">
                            <div class="require__Name">
                                <p>{t('sendSupportFullNameTitle')}<span>{t('sendSupportRequiredTitle')}</span></p>
                                <input type="text" maxlength="50" id="NameSupport" />
                            </div>
                            <div class="require__NumberPhone">
                                <p>{t('sendSupportTelephoneTitle')}<span>{t('sendSupportRequiredTitle')}</span></p>
                                <input type="text" maxlength="50" id="NumberPhoneSupport" />
                            </div>
                            <div class="require__Email">
                                <p>{t('sendSupportEmailTitle')}<span>{t('sendSupportRequiredTitle')}</span></p>
                                <input type="text" maxlength="50" id="EmailSupport" />
                            </div>
                        </div>
                        <div class="require__content">
                            <p>{t('sendSupportContentTitle')}<span>{t('sendSupportRequiredTitle')}</span></p>
                            <textarea id="contentSupport"></textarea>
                        </div>
                    </div>
                    <button id="button__sendQuestion" type="submit" onClick={sendSupportbtn}>{t('sendSupportBtnSend')}</button>
                </div>
            </div>
        </div>
    )
}

export default SendSupport;