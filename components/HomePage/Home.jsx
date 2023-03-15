import { MainLayout } from "../ui/layouts/MainLayout"
import styled from "styled-components"
import { Container } from "../ui/layouts/Container"
import { PrimaryButton } from "../ui/buttons/PrimaryButton"
import Link from "next/link"
import { AsideLayout } from "../ui/layouts/AsideLayout"
import { H1, H2, Text } from "../ui/Typography"
import { FeatureCard, FeatureCardWrapper } from "./components/FeatureCard"
import { MainSection } from "../Common/MainSection"
import { Section } from "./components/Section"
import { breakpoint } from "../../lib/theme"

const Home = () => {

    const mainSection = (
        <>
            <H1Styled>ЭЛЕКТРОННЫЕ КОМПОНЕНТЫ</H1Styled>
            <MainCTAWrapper>
                <Link href="/contacts" passHref legacyBehavior><PrimaryButton as={'a'}>Контакты</PrimaryButton></Link>
                <Link href="/delivery" passHref legacyBehavior><PrimaryButton as={'a'} filled marginLeft={'26px'}>Каталог</PrimaryButton></Link>
            </MainCTAWrapper>
        </>
    )

    const featureCards = [
        {
            iconUrl: '/static/icons/feature-1.svg',
            description: 'Предоставлении лучшего сервиса нашим клиентам',
        },
        {
            iconUrl: '/static/icons/feature-2.svg',
            description: 'Уникальных технических решениях наших партнеров',
        },
        {
            iconUrl: '/static/icons/feature-3.svg',
            description: 'Грамотной технической поддержке силами наших инженеров',
        },
        {
            iconUrl: '/static/icons/feature-4.svg',
            description: 'Построении открытых партнерских отношений с клиентами и поставщиками',
        },
        {
            iconUrl: '/static/icons/feature-5.svg',
            description: 'Надежности, настойчивости и постоянном совершенствовании',
        },
    ]

    return (
        <MainLayout>
            <Container>
                <MainSection>
                    {mainSection}
                </MainSection>
            </Container>
            <AsideLayout>
                <Section
                    images={[
                        { url: '/static/images/chip-1.jpeg', alt: 'Изображение чипа' },
                        { url: '/static/images/chip-2.jpeg', alt: 'Изображение чипа' },
                        { url: '/static/images/chip-3.jpeg', alt: 'Изображение чипа' },
                    ]}
                    title="ИНОВАЦИОННЫЕ РАЗРАБОТКИ"
                    content={<>ЧипТрейд– Российский дистрибьютор ведущих мировых производителей компонентов и оборудования<br /><br />ЧипТрейд предлагает инновационные разработки, используемые для ответственных применений. Поставляемые компанией компоненты и оборудование отвечают самым высоким требованиям наших заказчиков – промышленных предприятий к высокой надежности, качеству и инновационности технических решений.</>}/>

                <Section
                    id="develop"
                    images={[
                        { url: '/static/images/chip-4.jpeg', alt: 'Изображение чипа' },
                        { url: '/static/images/chip-5.jpeg', alt: 'Изображение чипа' },
                        { url: '/static/images/chip-6.jpeg', alt: 'Изображение чипа' },
                    ]}
                    title="ПОСТАВКА КОМПОНЕНТОВ ПОД РАЗРАБОТКУ"
                    content="Наша компания сотрудничает с крупнейшими мировыми интернет-магазинами электронных компонентов - такими как: Digi-Key, Farnell, Mouser, Newark и десятком других – за счет этого у нас есть возможность поставлять компоненты под разработку – поштучно, а не нормоупаковками. Доставка продукции до нашего склада в Санкт-Петербурге составляет 2-3 недели, однако при необходимости мы можем обеспечить доставку за одну неделю."
                />

                <Section
                    id="quality"
                    images={[
                        { url: '/static/images/chip-7.jpeg', alt: 'Изображение чипа' },
                        { url: '/static/images/chip-8.jpeg', alt: 'Изображение чипа' },
                    ]}
                    title="КОНТРОЛЬ КАЧЕСТВА"
                    content="Компания «ЧипТрейд» производит входной контроль ПКИ на антистатическом оборудовании, имеется специализированный склад для хранения ЭКБ ИП и ЭКБ ОП. Проверка включает в себя визуальный осмотр и инструментальные измерения основных параметров заявленных в технической документации производителей. Данный метод гарантированно позволяет обнаружить и исключить из поставки продукцию, имеющую дефекты. Компания имеет Сертификат соответствия ГОСТ Р ИСО 9001-2015 (ISO 9001:2015)."
                />
            </AsideLayout>

            <FeaturesSections id="bulk">
                <Container>
                    <FeaturesSectionsTitle>МЫ СТРОИМ НАШУ РАБОТУ, БАЗИРУЯСЬ НА:</FeaturesSectionsTitle>
                    <FeatureCardsWrapper>
                        {featureCards.map((card, index) => (
                            <FeatureCard key={card.iconUrl + index} title={`0${index + 1}`} description={card.description} iconUrl={card.iconUrl}/>
                        ))}
                    </FeatureCardsWrapper>
                </Container>
            </FeaturesSections>

            <AdvantagesSection>
                <AdvantagesTitle>
                СОТРУДНИЧАЯ С ЧИПТРЕЙД НАШИ ЗАКАЗЧИКИ-ПАРТНЕРЫ ПОЛУЧАЮТ:
                </AdvantagesTitle>
                <Container>
                <AdvantagesList>
                    <AdvantagesItem>индивидуальный гибкий подход к каждому клиенту</AdvantagesItem>
                    <AdvantagesItem>своевременную и оперативную информацию</AdvantagesItem>
                    <AdvantagesItem>доступ к товарам на разных рынках</AdvantagesItem>
                    <AdvantagesItem>бесплатные образцы</AdvantagesItem>
                    <AdvantagesItem>бесплатные образцы</AdvantagesItem>
                    <AdvantagesItem>сопровождение проектов</AdvantagesItem>
                    <AdvantagesItem>оригинальные качественные компоненты</AdvantagesItem>
                    <AdvantagesItem>высокую надежность поставок</AdvantagesItem>
                    <AdvantagesItem>сроки поставки от 10 дней</AdvantagesItem>
                    <AdvantagesItem>гарантию на поставленные компоненты</AdvantagesItem>
                    <AdvantagesItem>новые знания о рынке и продукте</AdvantagesItem>
                </AdvantagesList>
                </Container>
            </AdvantagesSection>
        </MainLayout>
    )
}

const H1Styled = styled(H1)`
    margin-bottom: 52px;
`

const FeatureCardsWrapper = styled.div`
    display: flex;

    ${FeatureCardWrapper} + ${FeatureCardWrapper} {
        margin-left: 30px;
    }

    ${breakpoint.tablet`
        flex-wrap: wrap;
        justify-content: center;

        ${FeatureCardWrapper} {
            width: 40%;
        }
    `}
`

const FeaturesSections = styled.section`
    margin-bottom: 100px;
    ${Container} {
        overflow: hidden;
        position: relative;
        padding: 88px 20px;
        background: ${({ theme }) => theme.colors.secondary};

        ::before {
            content: '';
            display: block;
            position: absolute;
            width: 487px;
            height: 38px;
            background: #ffffff;
            transform: skewX(-45deg);
            z-index: 100;
            bottom: 0px;
            right: -14px;
        }
    }

    ${breakpoint.laptop`
        ${Container} {
            padding: 70px 20px;
        }
    `}

    ${breakpoint.tablet`
        ${Container} {
            ::before {
                display: none;
            }
        }
    `}

`

const FeaturesSectionsTitle = styled(H2)`
    margin-top: 20px;
    margin-bottom: 60px;
    text-align: center;

    ${breakpoint.laptop`
        margin-bottom: 30px;
    `}
`

const MainCTAWrapper = styled.div`
    display: flex;

    a + a {
        margin-left: 26px;
    }
`

const AdvantagesSection = styled.section`
    margin-bottom: 250px;

    ${breakpoint.tablet`
        margin-bottom: 100px;
    `}
`
const AdvantagesTitle = styled(H2)`
    margin-bottom: 50px;
    text-align: center;
`

const AdvantagesItem = styled.li`
    display: block;
    width: 50%;

    font-family: ${({ theme }) => theme.fonts.roboto};
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 30px;
    position: relative;

    ::before {
        content: '';
        display: block;
        position: absolute;
        width: 8px;
        height: 8px;
        background: #D8A835;
        top: 12px;
        left: -34px;
    }

    ${breakpoint.tablet`
        width: 100%;
        margin-bottom: 10px;
    `}

`
const AdvantagesList = styled.ul`
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    ${AdvantagesItem}:nth-child(odd) {
        padding-right: 40px;
    }

    ${breakpoint.laptop`
        width: 80%;
    `}

    ${breakpoint.tablet`
        ${AdvantagesItem}:nth-child(odd) {
            padding-right: 0;
        }
    `}
`

export default Home