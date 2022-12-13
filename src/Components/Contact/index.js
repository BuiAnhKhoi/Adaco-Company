import { useTranslation } from 'react-i18next'

import AddressCompany from "./AddressCompany/AddressCompany";
import SendSupport from "./SendSupport/SendSupport";

const Contact = () => {
    const { t } = useTranslation();
    document.querySelector('title').innerText = t('contactHeaderMenu')

    return (
        <div>
            <AddressCompany></AddressCompany>
            <SendSupport></SendSupport>
        </div>
    )
}

export default Contact;