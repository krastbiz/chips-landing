import axios from 'axios'

export const sendContactForm = (formData) => {
    return axios.post('/api/contact-form', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export const search = (searchParams) => {
    const { q, page, itemsPerPage } = searchParams
    return axios.get('/api/catalog', {
        params: {
            q,
            page,
            itemsPerPage,
        },
        headers: {
            'Cache-Control': 'no-cache',
        },
    })
}
