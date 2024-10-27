import { forwardRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Keyboard } from 'swiper/modules'
import 'swiper/css'

export const VerticalSlider = forwardRef((props, ref) => {
    const { sections } = props
    return (
        <Swiper
            direction="vertical"
            slidesPerView={1}
            spaceBetween={0}
            mousewheel
            speed={1000}
            keyboard={{ enabled: true }}
            modules={[Mousewheel, Keyboard]}
            className="mySwiper"
            ref={ref}
        >
            {sections.map((section, index) => (
                <SwiperSlide key={index}>{section}</SwiperSlide>
            ))}
        </Swiper>
    )
})
