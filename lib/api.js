import axios from 'axios'

export const sendContactForm = ({ email, message, name, tel, components, file }) => {
    return axios.post('/api/contact-form', { email, message, name, tel, components, file })
}
