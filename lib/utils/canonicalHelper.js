const BASE_URL = process.env.SITE_BASE_URL

export const getPageCanonical = (url) => <link rel="canonical" href={`${BASE_URL}${url}`}></link>