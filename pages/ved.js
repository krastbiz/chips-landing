import Head from 'next/head'
import Contacts from '../components/ContactsPage/Contacts'
import { getPageCanonical, getPageMetadata } from '../lib/utils/pageHelper'

const VedPage = () => {
    const pageTitle = 'Комплексные ВЭД решения етим'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку в ЕТим'
    const pageRelativeUrl = '/ved'

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Contacts />
        </>
    )
}

export default VedPage
