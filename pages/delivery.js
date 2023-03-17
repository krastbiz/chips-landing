import Head from "next/head"
import Delivery from "../components/DeliveryPage/Delivery"
import { getPageCanonical, getPageMetadata } from "../lib/utils/pageHelper"

const DeliveryPage = () => {
    const pageTitle = 'Электронные компоненты'
    const pageDescription = 'Закажите доставку электронных компонентов, оставьте вашу заявку'

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription )}
                {getPageCanonical('/delivery')}
            </Head>
            <Delivery />
        </>
    )
}

export default DeliveryPage