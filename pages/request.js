import Head from 'next/head'
import { Request } from '../components/RequestPage/Request'
import { getPageCanonical, getPageMetadata } from '../lib/utils/pageHelper'

const RequestPage = () => {
    const pageTitle = 'Оставь заявку в Е-Тим'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку в ЕТИМ'

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical('/request')}
            </Head>
            <Request />
        </>
    )
}

export default RequestPage
