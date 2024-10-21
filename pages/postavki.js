import { Supply } from '../components/SupplyPage/Supply'
import Head from 'next/head'
import { getPageCanonical, getPageMetadata } from '../lib/utils/pageHelper'

const SupplyPage = () => {
    const pageTitle = 'Электронные компоненты купить в E-Тим'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку в етим'
    const pageRelativeUrl = '/postavki'

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Supply />
        </>
    )
}

export default SupplyPage
