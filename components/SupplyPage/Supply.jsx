import { useEffect, useRef } from 'react'
import { MainLayout } from '../ui/layouts/MainLayout'
import styled from 'styled-components'
import { Container } from '../ui/layouts/Container'
import { H1, Text } from '../ui/Typography'
import { PrimaryButton } from '../ui/buttons/PrimaryButton'
import { MainSection, SearchComponent } from '../Common'
import { breakpoint } from '../../lib/theme'
import { Service, ServiceWithIcon } from './components/Service'
import { Advantage } from './components/Advantage'
import { RequestForm } from '../Common/RequestForm'
import { AboutSection } from '../Common/AboutSection'

export const Supply = () => {
    // const sectionsRef = useRef([])
    const formRef = useRef(null)

    const handleScrollToForm = () => {
        if (formRef.current) {
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
                    <ServicesWrapper id="purchases">
                        <DescriptionWrapper>
                            <AboutContainer>
                                <SearchComponent isHomePage />
                                <PurchasesContainer>
                                    <ServiceWithIcon
                                        title="Осуществляем закупки на платформах"
                                        content="Mouser, Digi-key, Avnet, Arrow, Hkin.com, Lcsc и других"
                                        icon="platform"
                                    />
                                    <ServiceWithIcon
                                        title="Размещаем производственные заказы на заводах"
                                        content="Nicomatic, Winstar, Siemens, Amphenol, Souriau, Traco Power и др"
                                        icon="factory"
                                    />
                                    <ServiceWithIcon
                                        title="Приобретаем оборудование брендов"
                                        content="Nicomatic, Winstar, Siemens, Amphenol, Souriau, Harting, Nichia, Fujitsu, Samtec, Wago, Digital View, Fischer, ODU, Lemo, Huber&Sunher, GSI и др"
                                        icon="purchase"
                                    />
                                </PurchasesContainer>
                            </AboutContainer>
                            <ServicesContainer>
                                <H1>ПОСТАВКИ ЭКБ</H1>
                                <SupplyText>
                                    Мы предлагаем комплексные решения по закупке, таможенному оформлению и доставке
                                    электронных компонентов, модулей, печатных плат и промышленного оборудования из
                                    Китая в Россию. Наша команда обеспечивает быструю и надежную доставку, минимизируя
                                    ваши затраты и риски. Доверьтесь нашему опыту и получите качественный сервис на
                                    каждом этапе!
                                </SupplyText>
                                <ServicesContainer2>
                                    <ContactButton as={'a'} onClick={handleScrollToForm}>
                                        Оставить заявку <ArrowIcon src="/static/icons/arrow.svg" alt="Поиск" />
                                    </ContactButton>

                                    <Service
                                        title="1 год гарантии"
                                        content="Мы гарантирӯем возврат денег, если товар вам не подошёл или его качество вас не
                                    устроило."
                                    ></Service>
                                    <Service
                                        title="Гибкий график оплаты"
                                        content="Мы готовы предложить гибкие условия оплаты, включая отсрочку, в зависимости от суммы
                                    и сроков заказа."
                                    ></Service>
                                    <Service
                                        title="Тестовые образцы"
                                        content="Перед покупкой вы можете протестировать наши электронные компоненты."
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
                        title="Гарантия подлинности компонентов"
                        content="Обеспечиваем аутентичность продукции на этапе квотирования, гарантируя качество и надежность"
                    />
                    <Advantage
                        title="Проверка соответствия"
                        content="Предоставляем фотографии товаров, маркировки и упаковки для предварительной оценки покупателем перед ввозом в РФ"
                    />
                    <Advantage
                        title="Самостоятельное декларирование"
                        content="Осуществляем декларирование импортных комплектующих без привлечения таможенных брокеров, что ускоряет процесс"
                    />
                    <Advantage
                        title="Соблюдение условий транспортировки"
                        content="Гарантируем правильные условия транспортировки для сохранения качества компонентов"
                    />
                    <Advantage
                        title="Поставки для государственных заказов"
                        content="Имеем все необходимые лицензии и сертификаты, а также опыт работы с государственными заказами"
                    />
                    <Advantage
                        title="Техническая поддержка"
                        content="Предоставляем консультации по использованию компонентов, аналогам и новинкам, обеспечивая поддержку на всех этапах работы"
                    />
                </AdvantagesContainer>
            </AdvantagesSection>
            <AboutSection />
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

const ServicesWrapper = styled.section`
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

const AdvantagesSection = styled.section`
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
    margin-bottom: 30px;
`
