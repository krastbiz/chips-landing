import styled from "styled-components"
import { breakpoint } from "../../../lib/theme"
import { H2, Text } from "../../ui/Typography"

export const Section = (props) => {
    const { title, content, images, id } = props
    return (
        <PageSection id={id ? id: null}>
            <H2>{title}</H2>
            <TextStyled>{content}</TextStyled>

            <Images>
                {images.map(image => (
                    <ImageWrapper key={image.url}><img src={image.url} alt={image.alt} /></ImageWrapper>
                ))}
            </Images>
        </PageSection>
    )
}

const PageSection = styled.section`
    margin-bottom: 100px;
`

const ImageWrapper = styled.div`
    width: 33%;

    img {
        display: block;
        width: 100%;
        max-height: 170px;
    }
`

const Images = styled.div`
    display: flex;

    ${ImageWrapper} + ${ImageWrapper} {
        margin-left: 40px;
    }

    ${breakpoint.tablet`
        ${ImageWrapper} + ${ImageWrapper} {
            margin-left: 10px;
        }
    `}
`

const TextStyled = styled(Text)`
    margin-bottom: 30px;
`