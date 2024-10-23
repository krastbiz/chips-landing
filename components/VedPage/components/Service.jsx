import styled from 'styled-components'
import { BaseContentContainer } from '../../Common'
import { H2, H3, Text } from '../../ui/Typography'
import { breakpoint } from '../../../lib/theme'

export const Service = ({ title, content }) => {
    return (
        <ServiceContainer>
            <Title>{title}</Title>
            <Text>{content}</Text>
        </ServiceContainer>
    )
}

export const ServiceWithIcon = ({ title, content, icon }) => {
    return (
        <ServiceContainerHigh>
            <ServiceWrapper>
                <ServiceIcon src={`/static/icons/${icon}.svg`} alt={icon}></ServiceIcon>
                <Text>{title}</Text>
            </ServiceWrapper>

            <ServiceWrapper1>
                <StyledText>{content}</StyledText>
            </ServiceWrapper1>
        </ServiceContainerHigh>
    )
}

const ServiceContainer = styled(BaseContentContainer)`
    opacity: 0.98;
    width: 325px;
    height: 160px;
    margin-bottom: 16px;

    ${breakpoint.desktop`
        width: 273px;
        height: 150px;
    `}

    ${breakpoint.tablet`
    width: 207px;
    height: 139px;
    `}

    ${breakpoint.mobile`
    width: 173px;
    height: 136px;
    `}
`

const ServiceContainerHigh = styled.div`
    height: 120px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 20px;
`

const ServiceWrapper = styled(BaseContentContainer)`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 280px;
    margin-right: 30px;
`

const ServiceWrapper1 = styled(ServiceWrapper)`
    width: 410px;
`

const ServiceIcon = styled.img`
    height: 64px;
    margin-right: 16px;
`

const Title = styled(H3)`
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.active};
    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.velasans};
`

const StyledText = styled(H3)`
    color: ${({ theme }) => theme.colors.base};
`
