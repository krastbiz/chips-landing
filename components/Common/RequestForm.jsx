import { useRef, useState } from 'react'
import styled from 'styled-components'
import { sendContactForm } from '../../lib/api'
import { breakpoint } from '../../lib/theme'
import { Button } from '../ui/buttons/Button'
import { BaseContentContainer } from './BaseContentContainer'
import { H2 } from '../ui/Typography'
import { StyledLink } from '../ui/Link'

export const RequestForm = () => {
    const [formData, setFormData] = useState({
        components: '',
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

    return (
        <FormSection id="#request">
            <RequestFormWrapper>
                <H2>
                    <ColoredSpan>Свяжитесь с нами сегодня,</ColoredSpan> чтобы обсудить, как мы можем помочь вашему
                    бизнесу, расти и развиваться!
                </H2>
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
                            <ControlsContainer>
                            <InputsContainer>
                                <StyledInput
                                    name="name"
                                    type="text"
                                    placeholder="Ваше имя"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <StyledInput
                                    name="company"
                                    type="text"
                                    placeholder="Ваша компания"
                                    required
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                                <StyledInput
                                    name="email"
                                    required
                                    type="email"
                                    placeholder="mail@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <StyledInput
                                    name="tel"
                                    type="tel"
                                    placeholder="+79999999"
                                    required
                                    value={formData.tel}
                                    onChange={handleChange}
                                />
                            </InputsContainer>
                            <StyledTextarea
                                name="components"
                                placeholder="Какие комплектующие вам необходимы и какое количество вам необходимо?"
                                value={formData.components}
                                onChange={handleChange}
                            />
                            </ControlsContainer>
                            <ControlsContainer>
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
                                <Button primary type="submit">
                                    Отправить
                                </Button>
                                <ContactFormDescription>
                                    Нажимая кнопку "Отправить", Вы даете согласие на
                                    <StyledLink href={'/policy#personalData'}>обработку персональных данных</StyledLink>
                                </ContactFormDescription>
                            </ControlsContainer>
                        </StyledContactForm>
                    )}
                </FormWrapper>
            </RequestFormWrapper>
        </FormSection>
    )
}

const FormSection = styled.div`
    background: url('/static/images/main-bg1.png') center no-repeat;
    background-size: cover;
    padding-top: 100px;
`
const RequestFormWrapper = styled(BaseContentContainer)`
    display: flex;
    flex-direction: column;
    max-width: 90%;
    margin: 0 auto;
    padding: 50px 40px;
    opacity: 0.9;

    ${breakpoint.desktop`
        max-width: 100%;
    `}

    ${breakpoint.tablet`
        padding-right: 10px;
        padding-left: 10px;
        width: 100%;
    `}
`

const ColoredSpan = styled.span`
    color: ${({ theme }) => theme.colors.active};
`

const FormWrapper = styled.div`
    margin-top: 50px;
`

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 235px;
    justify-content: space-between;
`

const ControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`

const StyledInput = styled.input`
    background-color: ${({ theme }) => theme.colors.altBackground};
    font-family: ${({ theme }) => theme.fonts.velasanslight};
    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme.colors.grayed};
    width: 428px;
    height: 50px;
    font-size: 16px;
    line-height: 22px;
    padding: 10px;
    opacity: 1;
    color: ${({ theme }) => theme.colors.base};
`

const StyledTextarea = styled.textarea`
    background-color: ${({ theme }) => theme.colors.altBackground};
    font-family: ${({ theme }) => theme.fonts.velasanslight};
    resize: none;
    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme.colors.grayed};
    width: 800px;
    height: 235px;
    padding: 10px 20px 0;
    box-sizing: border-box;
    margin-left: 15px;
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

const BottomContainer = styled.div`
    display: flex;
    flex-direction: row;
`
