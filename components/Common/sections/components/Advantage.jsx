import styled from 'styled-components'
import { breakpoint } from '../../../../lib/theme'
import { H2, Text } from '../../../ui/Typography'
import { BaseContentContainer } from '../../../ui/layouts'

export const Advantage = ({ title, content, number }) => {
    return (
        <AdvantageWrapper>
            <AdvantageBaseContainer1>
                <Title>{title}</Title>
            </AdvantageBaseContainer1>
            <AdvantageBaseContainer>
                <Content>{content}</Content>
            </AdvantageBaseContainer>
        </AdvantageWrapper>
    )
}

const AdvantageWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    max-width: 85%;
    margin: 0 auto;
    margin-bottom: 40px;
    ${breakpoint.mobile`
    height: 130px;
    margin: 0px 10px 20px;
    max-width: 100%;
    `}
`

const AdvantageBaseContainer1 = styled(BaseContentContainer)`
    width: 32%;
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${breakpoint.mobile`
    margin-right: 15px;
    min-width: 135px;
    width: 45%;
    padding: 5px;
    `}
`

const AdvantageBaseContainer = styled(BaseContentContainer)`
    width: 65%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    ${breakpoint.mobile`
    margin-right: 10px;
    width: 55%;
    padding: 5px;
    `}
`

const Title = styled(H2)`
    color: ${({ theme }) => theme.colors.active};
    text-align: center;
`

const Content = styled(Text)`
    padding: 10px;
`
