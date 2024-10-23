import styled from 'styled-components'
import { breakpoint } from '../../../lib/theme'
import { H2, Text } from '../../ui/Typography'
import { BaseContentContainer } from '../../Common'

export const Advantage = ({ title, content, number }) => {
    return (
        <AdvantageWrapper>
                <AdvantageBaseContainer1><Title>{title}</Title></AdvantageBaseContainer1>
                <AdvantageBaseContainer><Content>{content}</Content></AdvantageBaseContainer>
        </AdvantageWrapper>
    )
}

const AdvantageWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    height: 80px;
    max-width: 85%;
    margin: 0 auto;
    margin-bottom: 40px;
    /* border-top: 1px solid ${({ theme }) => theme.colors.grayed}; */
`

const Number = styled.div`
    font-size: 80px;
    font-weight: bold;
    margin-right: 30px;
    color: ${({ theme }) => theme.colors.active};
`

const AdvantageBaseContainer1 = styled(BaseContentContainer)`
    width: 33%;
    margin-right: 30px;
`

const AdvantageBaseContainer = styled(BaseContentContainer)`
    width: 65%;
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

const Content = styled(Text)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
`
