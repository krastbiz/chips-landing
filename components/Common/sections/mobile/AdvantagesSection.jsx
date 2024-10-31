import styled from 'styled-components'
import { H1 } from '../../../ui/Typography'
import { Advantage } from '../components/Advantage'
import { breakpoint } from '../../../../lib/theme'

export const AdvantagesSectionTop = ({ advantages }) => {
    return (
        <Section id="advantages">
            <Title>Преимущества</Title>
            <AdvantagesContainer>
                {advantages.map((advantage, index) => (
                    <Advantage key={index} title={advantage.title} content={advantage.content} />
                ))}
            </AdvantagesContainer>
        </Section>
    )
}
export const AdvantagesSectionBottom = ({ advantages }) => {
    return (
        <Section id="advantages">
            <AdvantagesContainer>
                {advantages.map((advantage, index) => (
                    <Advantage key={index} title={advantage.title} content={advantage.content} />
                ))}
            </AdvantagesContainer>
        </Section>
    )
}

const Section = styled.section`
    position: relative;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    ${breakpoint.mobile`
        height: 80%;
    `}
`

const Title = styled(H1)`
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
    ${breakpoint.mobile`
        justify-content: center;
    `}
`

const AdvantagesContainer = styled.div`
    ${breakpoint.mobile`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    width: 100%;
    height: 100%;
    `}
`
