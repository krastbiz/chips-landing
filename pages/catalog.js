import Head from 'next/head'
import { getPageCanonical, getPageMetadata } from '../lib/utils/pageHelper'
import { Catalog } from '../components/pages/Catalog/Catalog'

const CatalogPage = () => {
    const pageTitle = 'Электронные компоненты Е-ТИМ'
    const pageDescription = 'Закажите доставку электронных компонентов, оставьте вашу заявку етим'
    const pageRelativeUrl = '/catalog'

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Catalog />
        </>
    )
}

export default CatalogPage
