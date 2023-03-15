import styled from "styled-components"
import { MainSection } from "../Common/MainSection"
import { AsideLayout } from "../ui/layouts/AsideLayout"
import { Container } from "../ui/layouts/Container"
import { MainLayout } from "../ui/layouts/MainLayout"
import { H1, H2 } from "../ui/Typography"
import { CompanyCard } from "./components/CompanyCard"

const Delivery = () => {
    const companyCards = [
        { url: '/static/images/company-1.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-2.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-3.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-4.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-5.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-6.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-7.jpeg', alt: 'Изображение кампании' },
        { url: '/static/images/company-8.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-9.jpeg', alt: 'Изображение кампании' },
        { url: '/static/images/company-10.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-11.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-12.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-13.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-14.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-15.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-16.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-17.jpeg', alt: 'Изображение кампании' },
        { url: '/static/images/company-18.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-19.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-20.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-21.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-22.jpeg', alt: 'Изображение кампании' },
        { url: '/static/images/company-23.jpeg', alt: 'Изображение кампании' },
        { url: '/static/images/company-24.jpeg', alt: 'Изображение кампании' },
        { url: '/static/images/company-25.jpeg', alt: 'Изображение кампании' },
        { url: '/static/images/company-26.jpeg', alt: 'Изображение кампании' },
        { url: '/static/images/company-27.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-28.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-29.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-30.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-31.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-32.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-33.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-34.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-35.png', alt: 'Изображение кампании' },
        { url: '/static/images/company-36.jpeg', alt: 'Изображение кампании' },
    ]

    return (
        <MainLayout>
            <Container>
                <MainSection>
                    <H1Styled>ЛИНЕЙКА ПОСТАВОК</H1Styled>
                </MainSection>
            </Container>

            <AsideLayout>
                <H2Styled>ЛИНЕЙКА ПОСТАВОК</H2Styled>
                <CardsWrapper>
                    {companyCards.map(card => (
                        <CompanyCard url={card.url} alt={card.alt} />
                    ))}
                </CardsWrapper>
            </AsideLayout>
        </MainLayout>
    )
}

const H1Styled = styled(H1)`
    padding-right: 300px;
`

const H2Styled = styled(H2)`
    margin-bottom: 30px;
`

const CardsWrapper = styled.div`
    margin-bottom: 250px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 30px;
    row-gap: 30px;
    flex-wrap: wrap;
`

export default Delivery