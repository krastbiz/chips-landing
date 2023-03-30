import styled from "styled-components"
import { Delimeter } from "../../ui/Delimeter"
import { breakpoint } from '../../../lib/theme'

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
    color: #00d79f;

    ::before {
        content: '';
        width: 100px;
        height: 100px;
        position: absolute;
        right: 25px;
        bottom: 0;

        background: url(${({ iconUrl }) => iconUrl}) no-repeat;
        background-size: cover;
    }

    ${breakpoint.desktop`
        ::before {
            width: 70px;
            height: 70px;
            bottom: 15px;
            right: 35px;
        }
    `}

    ${breakpoint.laptop`
        height: 120px;
        font-size: 70px;
        margin-bottom: 10px;

        ::before {
            width: 50px;
            height: 50px;
            bottom: 5px;
            right: 20px;
        }
    `}

    ${breakpoint.mobile`
        display: flex;
        align-items: center;

        ::before {
            width: 50px;
            height: 50px;
            bottom: 50%;
            transform: translateY(50%);
            right: 20px;
        }
    `}
`
const FeatureDescription = styled.p`
    margin-top: 24px;
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    color: #14140C;

    ${breakpoint.laptop`
        margin-bottom: 10px;
        font-size: 14px;
    `}
`
