import { useRef } from 'react'
import { MainLayout } from '../../ui/layouts'
import {
    AboutSection,
    AdvantagesSection,
    ServiceSection,
    RequestForm,
    ServiceSectionTop,
    AdvantagesSectionTop,
    AdvantagesSectionBottom,
    AboutSectionTop,
    AboutSectionBottom
} from '../../Common/sections'
import { VerticalSlider } from '../../Common/VerticalSlider'
import { useDeviceCheck } from '../../../lib/utils/hooks/useDeviceCheck'
import { AppFooter } from '../../Common/AppFooter'

const services = [
    {
        title: '1 год гарантии',
        content: 'Мы гарантируем возврат денег, если товар вам не подошёл или его качество вас не устроило.',
    },
    {
        title: 'Гибкий график оплаты',
        content:
            'Мы готовы предложить гибкие условия оплаты, включая отсрочку, в зависимости от суммы и сроков заказа.',
    },
    { title: 'Таможенное оформление', content: 'Имеется свидетельство таможенного представителя' },
]

const servicesMobile = [
    {
        title: '1 год гарантии',
        content: 'Мы гарантируем возврат денег, если товар вам не подошёл.',
    },
    {
        title: 'Гибкий график оплаты',
        content:
            'Мы готовы предложить гибкие условия оплаты, включая отсрочку.',
    },
    { title: 'Таможенное оформление', content: 'Имеется свидетельство таможенного представителя' },
]

const advantages = [
    {
        title: 'Международное присутствие',
        content:
            'Мы работаем с партнерами по всему миру, включая Китай, ЕС и США, предоставляя вам доступ к лучшим поставщикам и рынкам',
    },
    {
        title: 'Надежная платежная инфраструктура',
        content:
            'Собственная система платежей гарантирует безопасность и эффективность финансовых операций, даже в условиях международных ограничений',
    },
    {
        title: 'Экспертиза в сложных условиях',
        content:
            'Наш опыт работы в санкционных условиях и использование схем прокси-стран обеспечивают бесперебойную доставку и логистику',
    },
    {
        title: 'Прозрачность и доверие',
        content:
            'Мы предлагаем понятные сроки и ценообразование, а также полное юридическое и финансовое сопровождение, что делает сотрудничество с нами предсказуемым и надежным',
    },
    {
        title: 'Адаптивная логистика',
        content:
            'В условиях постоянных изменений мы оперативно находим альтернативные маршруты, чтобы гарантировать своевременную доставку вашей продукции',
    },
]

const advantagesMobile = [    {
    title: 'Международное присутствие',
    content:
        'Мы работаем с партнерами по всему миру, включая Китай, ЕС и США, предоставляя вам доступ к лучшим поставщикам и рынкам',
},
{
    title: 'Надежная платежная инфраструктура',
    content:
        'Собственная система платежей гарантирует безопасность и эффективность финансовых операций, даже в условиях международных ограничений',
},
{
    title: 'Экспертиза в сложных условиях',
    content:
        'Наш опыт работы в санкционных условиях и использование схем прокси-стран обеспечивают бесперебойную логистику',
},    {
    title: 'Прозрачность и доверие',
    content:
        'Мы предлагаем понятные сроки и ценообразование, а также полное юридическое сопровождение, что делает сотрудничество с нами предсказуемым и надежным',
},
{
    title: 'Адаптивная логистика',
    content:
        'В условиях постоянных изменений мы оперативно находим альтернативные маршруты, чтобы гарантировать своевременную доставку вашей продукции',
},]

export const Ved = () => {
    const swiperRef = useRef()
    const { isMobile, isTablet } = useDeviceCheck()
    const isMobileOrTablet = isMobile || isTablet
    const handleClick = () => {
        if (swiperRef.current) {
            const formSlide = isMobileOrTablet ? 5 : 3
            swiperRef.current.swiper.slideTo(formSlide)
        }
    }
    const laptopSections = [
        <ServiceSection
            title="КОМПЛЕКСНЫЕ ВЭД РЕШЕНИЯ"
            description="Компания Е-ТИМ предлагает комплексные решения в области внешнеэкономической деятельности (ВЭД), обеспечивая полный цикл услуг от оплаты поставщику до доставки и таможенного оформления товара. Мы работаем с партнерами по всему миру, включая Китай, ЕС и США, и гарантируем надежность и прозрачность на каждом этапе сотрудничества. Наша собственная платежная инфраструктура и опытные специалисты позволяют эффективно решать любые финансовые и логистические задачи, даже в условиях санкций и ограничений. Е-ТИМ — ваш надежный партнер в международной торговле."
            services={services}
            onClick={handleClick}
        />,
        <AdvantagesSection advantages={advantages} />,
        <AboutSection />,
        <RequestForm />,
    ]

    const mobileSections = [
        <ServiceSectionTop
            title="КОМПЛЕКСНЫЕ ВЭД РЕШЕНИЯ"
            description="Компания Е-ТИМ предлагает комплексные решения в области внешнеэкономической деятельности (ВЭД), обеспечивая полный цикл услуг от оплаты поставщику до доставки и таможенного оформления товара. Мы работаем с партнерами по всему миру, включая Китай, ЕС и США, и гарантируем надежность и прозрачность на каждом этапе сотрудничества."
            services={servicesMobile}
            onClick={handleClick}
        />,
        <AdvantagesSectionTop advantages={advantagesMobile.slice(0, 3)} />,
        <AdvantagesSectionBottom advantages={advantagesMobile.slice(3)} />,
        <AboutSectionTop />,
        <AboutSectionBottom />,
        <RequestForm />,
        <AppFooter />
    ]

    const sections = isMobileOrTablet ? mobileSections : laptopSections

    return (
        <MainLayout>
            <VerticalSlider sections={sections} ref={swiperRef} />
        </MainLayout>
    )
}
