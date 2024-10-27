import styled from 'styled-components'
import { BaseContentContainer } from '../../ui/layouts'
import { H2, Text } from '../../ui/Typography'

export const AboutSection = () => {
    const valuesContent = [
        {
            keyword: 'Качество',
            description:
                'Мы работаем только с проверенными поставщиками, гарантируя надежность и долговечность наших компонентов.',
        },
        {
            keyword: 'Скорость',
            description: 'Понимая важность времени, мы обеспечиваем быструю доставку и оперативное обслуживание.',
        },
        {
            keyword: 'Прозрачность',
            description: 'Мы предлагаем конкурентоспособные цены и открытость на всех этапах сотрудничества.',
        },
    ]
    return (
        <AboutSectionContainer id="about">
            <AboutContainer>
                <AboutSectionItem
                    title="О компании"
                    content="Наша компания специализируется на поставке высококачественных электронных компонентов для различных отраслей промышленности. Мы предлагаем широкий ассортимент продукции, включая микросхемы, резисторы, конденсаторы и другие компоненты от ведущих мировых производителей."
                />
                <AboutSectionItem
                    title="Наша миссия"
                    content="Миссия нашей компании – обеспечивать наших клиентов надежными и современными электронными компонентами, способствуя их успеху и инновациям. Мы стремимся к долгосрочному сотрудничеству, предоставляя продукцию высочайшего качества в кратчайшие сроки."
                />
                <ValuesItem title="Наши ценности" content={valuesContent} />
                <AboutSectionItem
                    title="Наши достижения"
                    content="За годы работы мы стали надежным партнером для более чем 500 компаний, помогая им реализовывать проекты любой сложности. Мы гордимся тем, что 95% наших клиентов возвращаются к нам за новыми заказами."
                />
                <AboutSectionItem
                    title="Наша команда"
                    content="В нашей команде работают эксперты с многолетним опытом в области электроники. Их знания и профессионализм позволяют нам предлагать лучшие решения для наших клиентов."
                />
                <AboutSectionItem
                    title="География работы"
                    content="Мы осуществляем поставки по всей России и странам СНГ, обеспечивая индивидуальный подход к каждому клиенту. Мы всегда открыты для новых партнерств и готовы рассмотреть любые предложения."
                />
            </AboutContainer>
        </AboutSectionContainer>
    )
}

export const AboutSectionItem = ({ title, content }) => {
    return (
        <ItemContainer>
            <Title>{title}</Title>
            <Text>{content}</Text>
        </ItemContainer>
    )
}

export const ValuesItem = ({ title, content }) => {
    return (
        <ItemContainer>
            <Title>{title}</Title>
            <ValueContainer>
                {content.map(({ keyword, description }, index) => (
                    <Text key={index}>
                        <HighlightedWord>{keyword} : </HighlightedWord> {description}
                        <br />
                    </Text>
                ))}
            </ValueContainer>
        </ItemContainer>
    )
}

const AboutSectionContainer = styled.section`
    overflow-y: hidden;
    max-width: 90%;
    margin: 0 auto;
`

const AboutContainer = styled(BaseContentContainer)`
    padding: 20px 30px;
`
const ValueContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    width: 100%;
`

const Title = styled(H2)`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.active};
`
const HighlightedWord = styled.span`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.active};
    display: inline-block;
    margin-bottom: 5px;
`
