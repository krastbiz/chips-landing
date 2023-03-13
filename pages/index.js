import Home from '../components/HomePage/Home'
import Head from 'next/head'
import { getPageCanonical } from '../lib/utils/canonicalHelper'

const HomePage = () => {
    return (
        <>
            <Head>
                {getPageCanonical('/')}
            </Head>
            <Home/>
        </>
    )
}

export default HomePage
