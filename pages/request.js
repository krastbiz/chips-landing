import Head from 'next/head'
import { getPageCanonical, getPageMetadata } from '../lib/utils/pageHelper'
import { Request } from '../components/pages/RequestPage/Request'

const RequestPage = () => {
    const pageTitle = 'Электронные компоненты Е-ТИМ'
    const pageDescription = 'Закажите доставку электронных компонентов, оставьте вашу заявку етим'
    const pageRelativeUrl = '/request'

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Request />
        </>
    )
}

export default RequestPage
