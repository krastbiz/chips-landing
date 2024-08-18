import { useState } from 'react'
import styled from 'styled-components'
import { breakpoint } from '../../lib/theme'
import { ContactFormHeader } from '../Common/ContactFormHeader'

export const PhoneItem = (props) => {
    const { title, image, href } = props
    const { url, alt } = image
    const [isFormVisible, setIsFormVisible] = useState(false)

    const toggleFormVisibility = () => {
        setIsFormVisible((prevState) => !prevState)
    }

    return (
        <ContactInfoWrapper>
            <a href={href}>
                <img src={url} alt={alt} />
                {title}
            </a>
            <HeaderContactMe onClick={toggleFormVisibility}>Заказать звонок</HeaderContactMe>
            <ContactFormHeader isVisible={isFormVisible} setIsFormVisible={setIsFormVisible} />
        </ContactInfoWrapper>
    )
}

export const ContactInfoWrapper = styled.div`
    position: relative;
    margin-left: 32px;
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grayed};
    display: flex;
    flex-direction: column;
    gap: 5px;

    a,
    div {
        font-size: 12px;
        font-weight: 500;
        display: flex;
        align-items: center;

        img {
            margin-right: 6px;
        }
    }

    ${breakpoint.laptop`
        margin-left: 24px;
        font-size: 12px;
    `}
`

const HeaderContactMe = styled.div`
    color: ${({ theme }) => theme.colors.active};
    font-size: 12px;
    user-select: none;
    text-align: center;
    &:hover {
        color: ${({ theme }) => theme.colors.hover};
    }
`
