import Head from 'next/head'
import { getPageCanonical, getPageMetadata } from '../lib/utils/pageHelper'
import { Policy } from '../components/PolicyPage/Policy'

const PolicyPage = () => {
    const pageTitle = 'Электронные компоненты'
    const pageDescription = 'Закажите доставку электронных компонентов, оставьте вашу заявку'
    const pageRelativeUrl = '/policy'

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Policy />
        </>
    )
}

export default PolicyPage
