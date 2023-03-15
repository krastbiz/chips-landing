import Head from "next/head"
import Delivery from "../components/DeliveryPage/Delivery"
import { getPageCanonical } from "../lib/utils/canonicalHelper"

const DeliveryPage = () => {
    return (
        <>
            <Head>
                {getPageCanonical('/delivery')}
            </Head>
            <Delivery />
        </>
    )
}

export default DeliveryPage