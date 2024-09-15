import Head from 'next/head'
import { getPageCanonical, getPageMetadata } from '../lib/utils/pageHelper'
import { Catalog } from '../components/Catalog/Catalog'

const CatalogPage = () => {
    const pageTitle = 'Электронные компоненты'
    const pageDescription = 'Закажите доставку электронных компонентов, оставьте вашу заявку'
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
