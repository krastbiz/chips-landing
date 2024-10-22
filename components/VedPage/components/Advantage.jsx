import styled from 'styled-components'
import { breakpoint } from '../../../lib/theme'
import { H2, Text } from '../../ui/Typography'

export const Advantage = ({ title, content, number }) => {
    return (
        <AdvantageWrapper>
            <Number>{number}</Number>
            <AdvantageContainer>
                <Title>{title}</Title>
                <Content>{content}</Content>
            </AdvantageContainer>
        </AdvantageWrapper>
    )
}

const AdvantageWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 500px;
`

const Number = styled.div`
    font-size: 80px;
    font-weight: bold;
    margin-right: 30px;
    color: ${({ theme }) => theme.colors.active};
`

const AdvantageContainer = styled.div`
    width: 100%;
    height: 210px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-top: 1px solid ${({ theme }) => theme.colors.grayed};
    background-color: ${({ theme }) => theme.colors.altBackground};

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

const Title = styled(H2)`
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.active};
`

const Content = styled(Text)`
    max-width: 450px;
`
