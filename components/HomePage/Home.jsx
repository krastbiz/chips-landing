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
            <H1Styled> ЭЛЕКТРОТЕХНИЧЕСКАЯ ПРОДУКЦИЯ И ОБОРУДОВАНИЕ</H1Styled>
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
                        { url: '/static/images/equipment-2.jpg', alt: 'Изображение оборудования' },
                        { url: '/static/images/equipment-3.jpg', alt: 'Изображение оборудования' },
                        { url: '/static/images/equipment-1.jpg', alt: 'Изображение оборудования' },
                    ]}
                    title="ИНОВАЦИОННЫЕ РАЗРАБОТКИ"
                    content={<><b>Элсеть</b> - комплексный поставщик электротехнической продукции: кабельно-проводниковая продукция, светильники, опоры освещения, электрощитовое оборудование, компоненты систем безопасности и СКС, крепеж, систем обогрева и вентиляции.<br /><br />
                    Оптимальный выбор материалов и оборудования на всех стадиях проектирования и строительства на основе современных технологий совместно с производителями позволяет нашим заказчикам и партнерам быть эффективными и конкурентоспособными.</>}/>

                <Section
                    id="develop"
                    images={[
                        { url: '/static/images/chip-4.jpeg', alt: 'Изображение чипа' },
                        { url: '/static/images/chip-5.jpeg', alt: 'Изображение чипа' },
                        { url: '/static/images/chip-6.jpeg', alt: 'Изображение чипа' },
                    ]}
                    title="ПОСТАВКА КОМПОНЕНТОВ ПОД РАЗРАБОТКУ"
                    content="Наша компания напрямую сотрудничает с производтителями и крупнейшими мировыми интернет-магазинами электронных компонентов. За счет этого у нас есть возможность поставлять компоненты под разработку – поштучно, а не нормоупаковками. Доставка продукции до нашего склада в Санкт-Петербурге составляет 2-3 недели, однако при необходимости мы можем обеспечить доставку за одну неделю."
                />

                <Section
                    id="quality"
                    images={[
                        { url: '/static/images/chip-7.jpeg', alt: 'Изображение чипа' },
                        { url: '/static/images/chip-8.jpeg', alt: 'Изображение чипа' },
                    ]}
                    title="КОНТРОЛЬ КАЧЕСТВА"
                    content="Компания «ЭлСеть-ЭТК» производит входной контроль ПКИ на антистатическом оборудовании, имеется специализированный склад для хранения ЭКБ ИП и ЭКБ ОП. Проверка включает в себя визуальный осмотр и инструментальные измерения основных параметров заявленных в технической документации производителей. Данный метод гарантированно позволяет обнаружить и исключить из поставки продукцию, имеющую дефекты. Компания имеет Сертификат соответствия ГОСТ Р ИСО 9001-2015 (ISO 9001:2015)."
                />
            </AsideLayout>

            <FeaturesSections>
                <Container>
                    <FeaturesSectionsTitle>МЫ СТРОИМ НАШУ РАБОТУ, БАЗИРУЯСЬ НА:</FeaturesSectionsTitle>
                    <FeatureCardsWrapper>
                        {featureCards.map((card, index) => (
                            <FeatureCard key={card.iconUrl + index} title={`0${index + 1}`} description={card.description} iconUrl={card.iconUrl}/>
                        ))}
                    </FeatureCardsWrapper>
                </Container>
            </FeaturesSections>

            <AdvantagesSection id="bulk">
                <AdvantagesTitle>
                ПРЕИМУЩЕСТВА РАБОТЫ С "ЭЛСЕТЬ-ЭТК":
                </AdvantagesTitle>
                <Container>
                <AdvantagesList>
                    <AdvantagesItem>Все товарные категории у одного поставщика — экономия времени, средств и других ресурсов.</AdvantagesItem>
                    <AdvantagesItem>Наши специалисты, опираясь на свой многолетний опыт, помогут подобрать необходимое оборудование.</AdvantagesItem>
                    <AdvantagesItem>Действует доставка по всей территории России.</AdvantagesItem>
                    <AdvantagesItem>Мы предлагаем выгодные индивидуальные условия сотрудничества оптовым покупателям: монтажникам, строителям, представителям малого и среднего бизнеса.</AdvantagesItem>
                    <AdvantagesItem>Cопровождение проектов</AdvantagesItem>
                    <AdvantagesItem>Качество продукции подтверждено заводскими гарантиями. Каждый товар перед продажей проходит дополнительную инженерную проверку.</AdvantagesItem>
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

    ${breakpoint.mobile`
        ${FeatureCardWrapper} {
            width: 60%;
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

    ${breakpoint.mobile`
        flex-direction: column;
        align-items: center;
        a + a {
            margin-left: 0;

            margin-top: 10px;
        }
    `}
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
        background: #00d79f;
        top: 12px;
        left: -34px;
    }

    ${breakpoint.tablet`
        width: 100%;
        margin-bottom: 10px;
        padding-left: 20px;

        ::before {
            left: 0;
        }
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