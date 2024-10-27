import Head from 'next/head'
import Contacts from '../components/pages/ContactsPage/Contacts'
import { getPageCanonical, getPageMetadata } from '../lib/utils/pageHelper'

const ContactsPage = () => {
    const pageTitle = 'Электронные компоненты | Наши контакты'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку в ЕТим'
    const pageRelativeUrl = '/contacts'

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

export default ContactsPage
