import styled from "styled-components"
import { Delimeter } from "../../ui/Delimeter"

export const FeatureCard = ({ title, iconUrl, description }) => {
    return (
        <FeatureCardWrapper>
            <FeatureNumber iconUrl={iconUrl}>
                {title}
            </FeatureNumber>
            <Delimeter hideDot/>
            <FeatureDescription>
             {description}
            </FeatureDescription>
        </FeatureCardWrapper>
    )
}

export const FeatureCardWrapper = styled.div`
    width: 20%;
`
const FeatureNumber = styled.div`
    margin-bottom: 24px;
    position: relative;
    height: 164px;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-style: normal;
    font-weight: 200;
    font-size: 96px;
    line-height: 117px;
    text-transform: uppercase;
    color: #D8A835;

    ::before {
        content: '';
        width: 100px;
        height: 100px;
        position: absolute;
        right: 25px;
        bottom: 0;

        background: url(${({ iconUrl }) => iconUrl}) no-repeat;
    }
`
const FeatureDescription = styled.p`
    margin-top: 24px;
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    color: #14140C;
`
