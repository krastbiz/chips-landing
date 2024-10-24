import styled from 'styled-components'
import { BaseContentContainer } from '../../Common'
import { H3, Text } from '../../ui/Typography'
import { breakpoint } from '../../../lib/theme'

export const Service = ({ title, content }) => {
    return (
        <ServiceContainer>
            <Title>{title}</Title>
            <Text>{content}</Text>
        </ServiceContainer>
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

const Title = styled(H3)`
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.active};
    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.velasans};
`
