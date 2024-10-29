import styled from 'styled-components'
import { breakpoint } from '../../../lib/theme'

export const ContactItem = (props) => {
    const { title, href } = props

    return (
        <ContactInfoWrapper>
            <a href={href}>{title}</a>
        </ContactInfoWrapper>
    )
}

export const ContactInfoWrapper = styled.div`
    a,
    div {
        display: flex;
        align-items: center;
        margin-left: 50px;
    }

    ${breakpoint.laptop`
        margin-left: 24px;
        font-size: 16px;
    `}
`
