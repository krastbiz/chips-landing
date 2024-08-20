import nodemailer from 'nodemailer'

// Email configs
const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = process.env.SMTP_PORT

const EMAIL_FROM = process.env.EMAIL_FROM
const EMAIL_FROM_PASS = process.env.EMAIL_FROM_PASS

const EMAIL_TO = process.env.EMAIL_TO

const EMAIL_SUBJECT = 'Новое письмо от пользователя сайта E-ТИМ!'
const getEmailTemplate = ({ email, message, name, tel, components }) => `
    <html>
        <body>
            ${name ? `<p><b>Запрос на звонок от:</b> <i>${name}</i></p>` : ""}
            ${email ? `<p><b>Новое сообщение от:</b> <i>${email}</i></p>` : ""}
            ${tel ? `<p><b>Телефон:</b> <i>${tel}</i></p>` : ""}
            ${
                message ?
                `<p><b>Текст сообщения: </b></p>
                <p><i>${message}</i></p>` : ""
            }
            ${
                components ?
                `<p><b>Интересующие компоненты: </b></p>
                <p><i>${components}</i></p>` : ""
            }
        </body>
    </html>
`

const _mailTransporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    auth: {
        user: EMAIL_FROM,
        pass: EMAIL_FROM_PASS,
    },
})

export const sendMail = (data) => {
    const { userEmail, message, name, tel, components, file } = data || {}

    const attachments = Array.isArray(file)
    ? file.map(f => ({
        filename: f.originalname,
        content: f.buffer,
      }))
    : file
    ? [{
        filename: file.originalname,
        content: file.buffer,
      }]
    : [];

    const mailOptions = {
        from: EMAIL_FROM,
        to: EMAIL_TO,
        subject: EMAIL_SUBJECT,
        html: getEmailTemplate({ email: userEmail, message, name, tel, components }),
        attachments: attachments,
    }

    const mailPromise = new Promise((res, rej) => {
        _mailTransporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
                rej(false)
            }

            console.log(`Message successfully sent. Info: ${info.response}`)
            res(true)
        })
    })

    return mailPromise
}
