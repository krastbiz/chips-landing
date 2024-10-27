import { Supply } from '../components/pages/SupplyPage/Supply'
import Head from 'next/head'
import { getPageCanonical, getPageMetadata } from '../lib/utils/pageHelper'

const SupplyPage = () => {
    const pageTitle = 'Электронные компоненты'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку в етим'

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical('/')}
            </Head>
            <Supply />
        </>
    )
}

export default SupplyPage
