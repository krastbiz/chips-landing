import Home from '../components/HomePage/Home'
import Head from 'next/head'
import { getPageCanonical, getPageMetadata } from '../lib/utils/pageHelper'

const HomePage = () => {
    const pageTitle = 'Электронные компоненты'
    const pageDescription = 'Закажите электронные компоненты, оставьте вашу заявку в етим'

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical('/')}
            </Head>
            <Home />
        </>
    )
}

export default HomePage
