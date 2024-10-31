import Contacts from '../components/pages/ContactsPage/Contacts'
import Head from 'next/head'
import { getPageCanonical, getPageMetadata } from '../lib/utils/pageHelper'

const ContractPage = () => {
    const pageTitle = 'Контрактное производство E-Тим'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку в етим'
    const pageRelativeUrl = '/contract'

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

export default ContractPage
