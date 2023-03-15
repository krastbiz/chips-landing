import Head from "next/head"
import Contacts from "../components/ContactsPage/Contacts"
import { getPageCanonical } from "../lib/utils/canonicalHelper"

const ContactsPage = () => {
    return (
        <>
            <Head>
                {getPageCanonical('/contacts')}
            </Head>
            <Contacts /> 
        </>
    )
}

export default ContactsPage