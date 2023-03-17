import styled from "styled-components"
import { breakpoint } from "../../lib/theme"

export const ContactItem = (props) => {
    const { title, image, href } = props
    const { url, alt } = image

    return (
        <ContactInfoWrapper>
            {href ? (
                <a href={href}>
                    <img src={url} alt={alt} />
                    {title}
                </a>
            ) : (
                <div href={href}>
                    <img src={url} alt={alt} />
                    {title}
                </div>
            )}

        </ContactInfoWrapper>
    )
}

export const ContactInfoWrapper = styled.div`
    margin-left: 32px;
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grayed};

    a, div {
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