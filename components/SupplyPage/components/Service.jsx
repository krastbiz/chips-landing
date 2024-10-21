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
            <ServiceIconWrapper>
                <ServiceIcon src={`/static/icons/${icon}.svg`} alt={icon}></ServiceIcon>
                <Text>{title}</Text>
            </ServiceIconWrapper>

            <StyledText>{content}</StyledText>
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

const ServiceContainerHigh = styled(BaseContentContainer)`
    width: 444px;
    height: 305px;
    justify-content: space-between;
    margin-left: 10px;
`

const ServiceIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const ServiceIcon = styled.img`
    height: 64px;
    margin-right: 16px;
`

const Title = styled(H3)`
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.active};
`

const StyledText = styled(H2)`
    color: ${({ theme }) => theme.colors.base};
`
