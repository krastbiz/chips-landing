import { useEffect, useRef } from 'react'
import { MainLayout } from '../ui/layouts/MainLayout'
import styled from 'styled-components'
import { Container } from '../ui/layouts/Container'
import Link from 'next/link'
import { H1, H2, Text } from '../ui/Typography'
import { PrimaryButton } from '../ui/buttons/PrimaryButton'
import { BaseContentContainer, MainSection, SearchComponent } from '../Common'
import { breakpoint } from '../../lib/theme'
import { Service, ServiceWithIcon } from './components/Service'
import { Advantage, AdvantageWithIcon } from './components/Advantage'
import { RequestForm } from '../Common/RequestForm'

export const Ved = () => {
    // const sectionsRef = useRef([])
    const formRef = useRef(null)

    const handleScrollToForm = () => {
        console.log(formRef.current)
        if (formRef.current) {
            console.log(formRef.current)
            formRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }
    // useEffect(() => {
    //     const options = {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 0.5,
    //     }

    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 entry.target.scrollIntoView({
    //                     behavior: 'smooth',
    //                     block: 'start',
    //                 })
    //             }
    //         })
    //     }, options)

    //     sectionsRef.current.forEach((section) => {
    //         if (section) observer.observe(section)
    //     })

    //     return () => {
    //         if (sectionsRef.current) {
    //             sectionsRef.current.forEach((section) => observer.unobserve(section))
    //         }
    //     }
    // }, [])
    return (
        <MainLayout>
            <Container>
                <MainSection>
                    <ServicesWrapper>
                        <DescriptionWrapper>
                            <AboutContainer>
                                <SearchComponent id="search" isHomePage />
                            </AboutContainer>
                            <ServicesContainer>
                                <H1>КОМПЛЕКСНЫЕ ВЭД РЕШЕНИЯ</H1>
                                <SupplyText>
                                    Компания Е-ТИМ предлагает комплексные решения в области внешнеэкономической
                                    деятельности (ВЭД), обеспечивая полный цикл услуг от оплаты поставщику до доставки и
                                    таможенного оформления товара. Мы работаем с партнерами по всему миру, включая
                                    Китай, ЕС и США, и гарантируем надежность и прозрачность на каждом этапе
                                    сотрудничества. Наша собственная платежная инфраструктура и опытные специалисты
                                    позволяют эффективно решать любые финансовые и логистические задачи, даже в условиях
                                    санкций и ограничений. Е-ТИМ — ваш надежный партнер в международной торговле.
                                </SupplyText>
                                <ServicesContainer2>
                                    <Link href="/#request">
                                        <ContactButton as={'a'}>
                                            Оставить заявку <ArrowIcon src="/static/icons/arrow.svg" alt="Поиск" />
                                        </ContactButton>
                                    </Link>
                                    <Service
                                        title="1 год гарантии"
                                        content="Мы гарантирӯем возврат денег, если товар вам не подошёл или его качество вас не устроило."
                                    ></Service>
                                    <Service
                                        title="Гибкий график оплаты"
                                        content="Мы готовы предложить гибкие условия оплаты, включая отсрочку, в зависимости от суммы и сроков заказа."
                                    ></Service>
                                    <Service
                                        title="Таможенное оформление"
                                        content="Имеется свидетельство таможенного представителя"
                                    ></Service>
                                </ServicesContainer2>
                            </ServicesContainer>
                        </DescriptionWrapper>
                    </ServicesWrapper>
                </MainSection>
            </Container>
            <AdvantagesSection id="advantages">
                <AdvantagesTitle>Преимущества</AdvantagesTitle>
                <AdvantagesContainer>
                    <Advantage
                        number="1."
                        title="Международное присутствие"
                        content="Мы работаем с партнерами по всему миру, включая Китай, ЕС и США, предоставляя вам доступ к лучшим поставщикам и рынкам"
                    />
                    <Advantage
                        number="2."
                        title="Надежная платежная инфраструктура"
                        content="Собственная система платежей гарантирует безопасность и эффективность финансовых операций, даже в условиях международных ограничений"
                    />
                    <Advantage
                        number="3."
                        title="Экспертиза в сложных условиях"
                        content="Наш опыт работы в санкционных условиях и использование схем прокси-стран обеспечивают бесперебойную доставку и логистику"
                    />
                    <Advantage
                        number="4."
                        title="Прозрачность и доверие"
                        content="Мы предлагаем понятные сроки и ценообразование, а также полное юридическое и финансовое сопровождение, что делает сотрудничество с нами предсказуемым и надежным"
                    />
                    <Advantage
                        number="5."
                        title="Адаптивная логистика"
                        content="В условиях постоянных изменений мы оперативно находим альтернативные маршруты, чтобы гарантировать своевременную доставку вашей продукции"
                    />
                </AdvantagesContainer>
            </AdvantagesSection>
            <RequestForm ref={formRef} />
        </MainLayout>
    )
}

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
`

const ServicesWrapper = styled.div`
    background: url('/static/images/main-bg.jpeg') center no-repeat;
    background-size: cover;
    padding: 120px 32px;
    border-radius: 35px;
    display: flex;
    flex-direction: row;
`

const AboutContainer = styled.div`
    max-width: 52%;
    padding-right: 30px;
    ${breakpoint.desktop`
    max-width: 40%;`}
`

const SupplyText = styled(Text)`
    margin-bottom: 40px;
`

const ServicesContainer = styled.div`
    max-width: 48%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`
const ServicesContainer2 = styled(ServicesContainer)`
    max-width: 100%;
`
const ContactButton = styled(PrimaryButton)`
    width: 325px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 25px;
    padding-right: 20px;

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

const ArrowIcon = styled.img`
    height: 20px;
    margin-left: 20px;
`

const PurchasesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    justify-content: space-between;
    position: relative;
`

const AdvantagesSection = styled.div`
    position: relative;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    overflow-y: hidden;
`

const AdvantagesContainer = styled.div``

const AdvantagesTitle = styled(H1)`
    align-items: flex-start;
    padding: 20px 0 40px 150px;
`
