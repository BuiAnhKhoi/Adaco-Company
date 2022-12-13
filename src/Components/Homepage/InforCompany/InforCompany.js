import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useTranslation } from 'react-i18next'

import 'react-tabs/style/react-tabs.css';
import './InforCompany.css'

const InforCompany = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Tabs className="TabsIndex">
                <TabList>
                    <Tab>{t('homepageTabAboutCompanyTitle')}</Tab>
                    <Tab>{t('homepageTabVisionTitle')}</Tab>
                    <Tab>{t('homepageTabMissionTitle')}</Tab>
                </TabList>
                <div className='TabsPanel'>
                    <TabPanel>
                        <h2>{t('brandName')}</h2>
                        <ul class="Content-Detail-TabPanel">
                            <li>{t('homepageTabAboutUsDetailTitle')}</li>
                            <li>{t('homepageTabAboutUsDetailTitle')}</li>
                            <li>{t('homepageTabAboutUsDetailTitle')}</li>
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <h2>{t('homepageTabVisionTitle')}</h2>
                        <ul class="Content-Detail-TabPanel">
                            <li>{t('homepageTabVisionDetail')}</li>
                            <li>{t('homepageTabVisionDetail')}</li>
                            <li>{t('homepageTabVisionDetail')}</li>
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <h2>{t('homepageTabMissionTitle')}</h2>
                        <ul class="Content-Detail-TabPanel">
                            <li>{t('homepageTabMissionDetail')}</li>
                            <li>{t('homepageTabMissionDetail')}</li>
                            <li>{t('homepageTabMissionDetail')}</li>
                        </ul>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    )
}

export default InforCompany;