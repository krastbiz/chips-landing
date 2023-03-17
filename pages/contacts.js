import Head from "next/head"
import Contacts from "../components/ContactsPage/Contacts"
import { getPageCanonical, getPageMetadata } from "../lib/utils/pageHelper"

const ContactsPage = () => {
    const pageTitle = 'Электронные компоненты | Наши контакты'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку'

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription )}
                {getPageCanonical('/contacts')}
            </Head>
            <Contacts /> 
        </>
    )
}

export default ContactsPage