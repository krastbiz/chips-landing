import styled from 'styled-components'
import { H1 } from '../../ui/Typography'
import { Advantage } from './components/Advantage'

export const AdvantagesSection = ({advantages }) => {
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

const Section = styled.section`
    position: relative;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
`

const Title = styled(H1)`
    align-items: flex-start;
    padding: 20px 0 40px 150px;
    margin-bottom: 30px;
`

const AdvantagesContainer = styled.div``
