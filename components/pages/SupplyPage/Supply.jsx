import { useRef } from 'react'
import { MainLayout } from '../../ui/layouts'
import { AboutSection, AdvantagesSection, ServiceSection, RequestForm } from '../../Common/sections'
import { VerticalSlider } from '../../Common/VerticalSlider'

export const Supply = () => {
    const swiperRef = useRef()
    const handleClick = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(3)
        }
    }
    const servicesWithIcon = [
        {
            title: 'Осуществляем закупки на платформах',
            content: 'Mouser, Digi-key, Avnet, Arrow, Hkin.com, Lcsc и других',
            icon: 'platform',
        },
        {
            title: 'Размещаем производственные заказы на заводах',
            content: 'Nicomatic, Winstar, Siemens, Amphenol, Souriau, Traco Power и др',
            icon: 'factory',
        },
        {
            title: 'Приобретаем оборудование брендов',
            content:
                'Nicomatic, Winstar, Siemens, Amphenol, Souriau, Harting, Nichia, Fujitsu, Samtec, Wago, Digital View, Fischer, ODU, Lemo, Huber&Sunher, GSI и др',
            icon: 'purchase',
        },
    ]

    const services = [
        {
            title: '1 год гарантии',
            content: 'Мы гарантирӯем возврат денег, если товар вам не подошёл или его качество вас не устроило.',
        },
        {
            title: 'Гибкий график оплаты',
            content:
                'Мы готовы предложить гибкие условия оплаты, включая отсрочку, в зависимости от суммы и сроков заказа.',
        },
        { title: 'Тестовые образцы', content: 'Перед покупкой вы можете протестировать наши электронные компоненты.' },
    ]

    const advantages = [
        {
            title: 'Гарантия подлинности компонентов',
            content: 'Обеспечиваем аутентичность продукции на этапе квотирования, гарантируя качество и надежность',
        },
        {
            title: 'Проверка соответствия',
            content:
                'Предоставляем фотографии товаров, маркировки и упаковки для предварительной оценки покупателем перед ввозом в РФ',
        },
        {
            title: 'Самостоятельное декларирование',
            content:
                'Осуществляем декларирование импортных комплектующих без привлечения таможенных брокеров, что ускоряет процесс',
        },
        {
            title: 'Соблюдение условий транспортировки',
            content: 'Гарантируем правильные условия транспортировки для сохранения качества компонентов',
        },
        {
            title: 'Поставки для государственных заказов',
            content: 'Имеем все необходимые лицензии и сертификаты, а также опыт работы с государственными заказами',
        },
        {
            title: 'Техническая поддержка',
            content:
                'Предоставляем консультации по использованию компонентов, аналогам и новинкам, обеспечивая поддержку на всех этапах работы',
        },
    ]

    const sections = [
        <ServiceSection
            title="ПОСТАВКИ ЭКБ"
            description="Мы предлагаем комплексные решения по закупке, таможенному оформлению и доставке электронных компонентов, модулей, печатных плат и промышленного оборудования из Китая в Россию. Наша команда обеспечивает быструю и надежную доставку, минимизируя ваши затраты и риски. Доверьтесь нашему опыту и получите качественный сервис на каждом этапе!"
            services={services}
            servicesWithIcon={servicesWithIcon}
            onClick={handleClick}
        />,
        <AdvantagesSection advantages={advantages} />,
        <AboutSection />,
        <RequestForm />,
    ]

    return (
        <MainLayout>
            <VerticalSlider sections={sections} ref={swiperRef} />
        </MainLayout>
    )
}
