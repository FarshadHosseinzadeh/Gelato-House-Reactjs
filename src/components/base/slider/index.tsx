import type { JSX } from "react";
import { Swiper, SwiperSlide, type SwiperProps } from "swiper/react";
import "swiper/swiper.css";

type slides = {
  id: number;
  src: string;
  alt: string;
};

type SliderProps = SwiperProps & {
  slides: slides[];
};

const Slider: React.FC<SliderProps> = ({ slides, ...props }): JSX.Element => {
  return (
    <Swiper {...props}>
      {slides.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="flex justify-center items-center"
        >
          <img src={slide.src} alt={slide.alt} width="auto" height="300px" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
