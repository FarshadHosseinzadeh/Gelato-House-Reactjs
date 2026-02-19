import { useState, type JSX } from "react";
import { Swiper, SwiperSlide, type SwiperProps } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";

import "swiper/swiper.css";

import "swiper/css/effect-fade";

import "swiper/css/navigation";
//

type slides = {
  id: number;
  src: string;
  alt: string;
};

type SliderProps = SwiperProps & {
  slides: slides[];
};

const Slider: React.FC<SliderProps> = ({ slides, ...props }): JSX.Element => {
  const [thumbsSwiper] = useState(null);
  return (
    <div className="relative">
      <button className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black px-3 py-2 text-white swiper-button-prev-custom">
        Prev
      </button>
      <button className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black px-3 py-2 text-white swiper-button-next-custom">
        Next
      </button>
      <Swiper
        {...props}
        modules={[EffectFade, Navigation]}
        effect="fade"
        thumbs={{ swiper: thumbsSwiper }}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex justify-center items-center">
              <img src={slide.src} alt={slide.alt} width="80%" height="300px" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
