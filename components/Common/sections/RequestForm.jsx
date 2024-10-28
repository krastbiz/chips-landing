import styled from 'styled-components'

import { breakpoint } from '../../../lib/theme'
import { Button } from '../../ui/buttons/Button'
import { PrimaryButton } from '../../ui/buttons/PrimaryButton'
import { BaseContentContainer } from '../../ui/layouts'
import { H2, H3 } from '../../ui/Typography'
import { StyledLink } from '../../ui/Link'
import { useRequestForm } from '../../hooks/useRequestForm'
import { AppFooter } from '../AppFooter'

export const RequestForm = ({ defaultValue = '' }) => {
    const {
        formData = {},
        emailWasSent,
        requestNumber,
        selectedFiles,
        deleteFile,
        onFormSubmit,
        handleBlur,
        handleFileChange,
        handleChange,
        handleFocus,
        setEmailWasSent,
    } = useRequestForm(defaultValue)
    return (
        <>
            <FormSection id="request">
                <RequestFormWrapper>
                    <StyledH2>
                        <ColoredSpan>Свяжитесь с нами сегодня,</ColoredSpan> чтобы обсудить, как мы можем помочь вашему
                        бизнесу, расти и развиваться!
                    </StyledH2>
                    <FormWrapper>
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
                                    <ContactFormDescription>
                                        Нажимая кнопку "Отправить", Вы даете согласие на
                                        <StyledLink href={'/policy#personalData'}>
                                            обработку персональных данных
                                        </StyledLink>
                                    </ContactFormDescription>
                                </InputsContainer>
                                    <InputsContainer>
                                    {emailWasSent ? (
                                    <ContactFormSuccessMessage>
                                        <H3>Мы приняли Вашу заявку!Номер Вашей заявки: {requestNumber}.</H3>
                                        <H3>Спасибо, что связались с нами!</H3>
                                        <PrimaryButton type="reset" onClick={() => setEmailWasSent(false)}>
                                            Новая заявка
                                        </PrimaryButton>
                                    </ContactFormSuccessMessage>
                                ) : (
                                        <><StyledTextarea
                                                value={formData.components}
                                                name="components"
                                                onChange={handleChange}
                                                onFocus={handleFocus}
                                                onBlur={handleBlur} /><ControlContainer>
                                                    <UploadContainer>
                                                        <FileUploadLabel>
                                                            <input
                                                                type="file"
                                                                name="file"
                                                                onChange={handleFileChange}
                                                                multiple />
                                                            <FileUploadText>
                                                                <img src={'/static/icons/paperclip.svg'} alt="Скрепка" />
                                                                Прикрепите файл
                                                            </FileUploadText>
                                                        </FileUploadLabel>
                                                        {selectedFiles.length > 0 && (
                                                            <AttachedFilesList>
                                                                {selectedFiles.map((file, index) => (
                                                                    <AttachedFileItem
                                                                        key={index}
                                                                        onClick={() => deleteFile(file.name)}
                                                                    >
                                                                        {file.name}
                                                                    </AttachedFileItem>
                                                                ))}
                                                            </AttachedFilesList>
                                                        )}
                                                    </UploadContainer>
                                                    <PrimaryButton primary type="submit">
                                                        Отправить
                                                    </PrimaryButton>
                                                </ControlContainer></>                                )}
                                    </InputsContainer>

                            </ControlsContainer>
                        </StyledContactForm>
                    </FormWrapper>
                </RequestFormWrapper>
            </FormSection>
            <AppFooter />
        </>
    )
}

const FormSection = styled.section`
    background: url('/static/images/main-bg.jpeg') center no-repeat;
    background-size: cover;
    padding-top: 18px;
    padding-bottom: 10px;
`
const RequestFormWrapper = styled(BaseContentContainer)`
    display: flex;
    flex-direction: column;
    max-width: 90%;
    margin: 0 auto;
    padding: 50px 40px 20px;
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
    margin-top: 30px;
`

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex;
`

const ControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const ControlContainer = styled(ControlsContainer)`
    justify-content: space-between;
`

const UploadContainer = styled(BaseContentContainer)`
    align-items: flex-start;
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
    margin-bottom: 10px;
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
    color: ${({ theme }) => theme.colors.base};
    opacity: 0.65;
    resize: none;
    white-space: 'pre-wrap';
    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme.colors.grayed};
    width: 800px;
    height: 345px;
    padding: 10px 20px 0;
    box-sizing: border-box;
    margin-left: 15px;
    margin-bottom: 20px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

const ContactFormSuccessMessage = styled.p`
    display: flex;
    padding-top: 20px;
    justify-content: space-between;
    height: 300px;
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
    width: 428px;
    color: ${({ theme }) => theme.colors.base};
    text-align: start;
`

const FileUploadLabel = styled.label`
    display: flex;
    align-items: flex-start;
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
    font-size: 14px;

    img {
        width: 16px;
        height: 16px;
    }
`

const StyledH2 = styled(H2)`
    margin-bottom: 20px;
`

const AttachedFilesList = styled.ul`
    list-style: none;
    padding: 0;
    max-height: 50px;
    width: 250px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.grayed} transparent;

    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.grayed};
        border-radius: 4px;
    }
`

const AttachedFileItem = styled.li`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.base};
    margin-bottom: 5px;
    width: 100%;

    &::after {
        content: '✕';
        color: ${({ theme }) => theme.colors.base};
        margin-left: 8px;
        cursor: pointer;
    }
    &:hover::after {
        color: ${({ theme }) => theme.colors.active};
    }
`
