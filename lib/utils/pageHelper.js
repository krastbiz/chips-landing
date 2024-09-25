const BASE_URL = process.env.SITE_BASE_URL

export const getPageCanonical = (url) => <link rel="canonical" href={`${BASE_URL}${url}`}></link>

export const getPageMetadata = (title, description) => (
    <>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
            name="keywords"
            content="етим, компоненты, китай, интернет-магазин, е-тим, антенны, wf-fi, модуль, датчики, военная приемка, быстро"
        />
    </>
)
