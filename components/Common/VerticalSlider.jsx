import { forwardRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaginationBullet = styled.div`
  width: 10px;
  height: 10px;
  margin: 5px;
  border-radius: 50%;
  background-color: ${({ active, theme }) => (active ? theme.colors.active : theme.colors.base)};
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

const ScrollToTopButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.base};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

export const VerticalSlider = forwardRef((props, ref) => {
  const { sections } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = sections.length;

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel
        speed={1000}
        keyboard={{ enabled: true }}
        pagination={false}
        modules={[Mousewheel, Keyboard]}
        className="mySwiper"
        ref={ref}
        onSlideChange={handleSlideChange}
      >
        {sections.map((section, index) => (
          <SwiperSlide key={index}>{section}</SwiperSlide>
        ))}
      </Swiper>

      <PaginationContainer>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <PaginationBullet
            key={index}
            active={currentIndex === index}
            onClick={() => ref.current?.swiper?.slideTo(index)}
          />
        ))}
      </PaginationContainer>

      <ScrollToTopButton
        onClick={() => {
          ref.current?.swiper?.slideTo(0);
        }}
      >
        ↑
      </ScrollToTopButton>
    </div>
  );
});



