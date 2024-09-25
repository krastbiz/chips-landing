import { useRef, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { sendContactForm } from '../../../lib/api'
import { breakpoint } from '../../../lib/theme'
import { Button } from '../../ui/buttons/Button'
import { H3 } from '../../ui/Typography'
import { StyledLink } from '../../ui/Link'
import { Container } from '../../ui/layouts/Container'

export const RequestForm = () => {
    const textareaRef = useRef(null)
    const { query } = useRouter()
    const [formData, setFormData] = useState({
        components: query.brand && query.partnumber ? `${query.brand} ${query.partnumber}` : '',
        name: '',
        company: '',
        email: '',
        tel: '',
    })
    const [emailWasSent, setEmailWasSent] = useState(false)
    const [selectedFiles, setSelectedFiles] = useState([])
    const [requestNumber, setRequestNumber] = useState(null)

    const resetForm = () => {
        setFormData({
            components: '',
            name: '',
            company: '',
            email: '',
            tel: '',
        })
        setSelectedFiles([])
    }

    const onFormSubmit = (e) => {
        e.preventDefault()

        const formDataToSend = new FormData()

        formDataToSend.append('components', formData.components)
        formDataToSend.append('name', formData.name)
        formDataToSend.append('company', formData.company)
        formDataToSend.append('email', formData.email)
        formDataToSend.append('tel', formData.tel)

        selectedFiles.forEach((file) => {
            formDataToSend.append('file', file)
        })

        sendContactForm(formDataToSend)
            .then((response) => {
                setEmailWasSent(true)
                setRequestNumber(response.data.requestNumber)
                resetForm()
            })
            .catch((error) => {
                console.error('Error sending form: ', error)
            })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files)
        setSelectedFiles((prevFiles) => [...prevFiles, ...files])
    }

    const handleTextAreaChange = (e) => {
        handleChange(e)
        const textarea = textareaRef.current
        textarea.style.height = 'auto'
        textarea.style.height = `${textarea.scrollHeight}px`
    }

    return (
        <Container>
            <RequestFormWrapper>
                <TitleWrapper>
                    <CustomH3>Рассчитаем стоимость и сроки доставки комплектующих</CustomH3>
                    <FormSubtitle>
                        Заполняя данную форму, по возможности, просим указать: партномер, наименование производителя,
                        тип корпуса, пожелания по году производства и срокам поставок, а также любые другие
                        дополнительные требования к запрашиваемым компонентам. Эта информация позволит нам оперативно
                        сформировать для Вас коммерческое предложение, что ускорит процесс обработки вашего запроса.
                    </FormSubtitle>
                </TitleWrapper>
                <FormWrapper>
                    {emailWasSent ? (
                        <ContactFormSuccessMessage>
                            <div>Мы приняли Вашу заявку!Номер Вашей заявки: {requestNumber}.</div>
                            <div>Спасибо, что связались с нами!</div>
                            <ContactFormSuccessMessageButton
                                primary
                                type="reset"
                                onClick={() => setEmailWasSent(false)}
                            >
                                Новая заявка
                            </ContactFormSuccessMessageButton>
                        </ContactFormSuccessMessage>
                    ) : (
                        <StyledContactForm onSubmit={onFormSubmit} encType="multipart/form-data">
                            <FormSubtitle>Ограничения по заказу: только юридические лица и ИП.</FormSubtitle>
                            <FormSubtitle>Минимальный заказ для новых партнеров от 10000 рублей.</FormSubtitle>
                            <StyledTextarea
                                name="components"
                                placeholder="Какие комплектующие вам необходимы и какое количество вам необходимо?"
                                value={formData.components}
                                onChange={handleTextAreaChange}
                                ref={textareaRef}
                            />
                            <FileUploadLabel>
                                <input type="file" name="file" onChange={handleFileChange} multiple />
                                <FileUploadText>
                                    <img src={'/static/icons/paperclip.svg'} alt="Скрепка" />
                                    Прикрепите файл
                                </FileUploadText>
                            </FileUploadLabel>
                            {selectedFiles.length > 0 && (
                                <AttachedFilesList>
                                    {selectedFiles.map((file, index) => (
                                        <AttachedFileItem key={index}>{file.name}</AttachedFileItem>
                                    ))}
                                </AttachedFilesList>
                            )}
                            <input
                                name="name"
                                type="text"
                                placeholder="Ваше имя?"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                name="company"
                                type="text"
                                placeholder="Ваша компания?"
                                required
                                value={formData.company}
                                onChange={handleChange}
                            />
                            <input
                                name="email"
                                required
                                type="email"
                                placeholder="Ваш email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                name="tel"
                                type="tel"
                                placeholder="Ваш телефон"
                                required
                                value={formData.tel}
                                onChange={handleChange}
                            />
                            <Button primary type="submit">
                                Отправить
                            </Button>
                            <ContactFormDescription>
                                Нажимая кнопку "Отправить", Вы даете согласие на
                                <StyledLink href={'/policy#personalData'}> обработку персональных данных</StyledLink>
                            </ContactFormDescription>
                        </StyledContactForm>
                    )}
                </FormWrapper>
            </RequestFormWrapper>
        </Container>
    )
}

const RequestFormWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 350px;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    ${breakpoint.mobile`
        flex-direction: column`}
`

const TitleWrapper = styled.div`
    flex: 1;
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    ${breakpoint.mobile`
    width: 100%;`}
`

const CustomH3 = styled(H3)`
    margin-bottom: 20px;
    font-size: 14px;
`

const FormSubtitle = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
    padding-right: 20px;
`

const FormWrapper = styled.div`
    flex: 1;
    width: 50%;
    ${breakpoint.mobile`
    width: 100%;`}
`

const StyledContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    input,
    textarea {
        padding-left: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin-bottom: 20px;
        font-family: ${({ theme }) => theme.fonts.montserrat};
    }

    input {
        box-sizing: border-box;
        min-height: 40px;
        margin-bottom: 20px;
        padding: 10px;
        color: #ccc;
    }
`

const StyledTextarea = styled.textarea`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    min-height: 60px;
    line-height: 1.5;
    overflow-y: hidden;
    ${breakpoint.mobile`
    min-height: 75px;
    `}
`

const ContactFormSuccessMessage = styled.p`
    display: flex;
    padding-top: 20px;
    justify-content: center;
    height: 180px;
    flex-direction: column;
`

const ContactFormSuccessMessageButton = styled(Button)`
    width: 30%;
    margin-top: 20px;
`

const ContactFormDescription = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.main};
    text-align: start;
`

const FileUploadLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;

    input[type='file'] {
        display: none;
    }
`

const FileUploadText = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #333;
    font-size: 14px;

    img {
        width: 16px;
        height: 16px;
    }
`

const AttachedFilesList = styled.ul`
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
`

const AttachedFileItem = styled.li`
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;
`
