import type { JSX } from "react";
import AcceptanceBanner from "src/components/base/acceptanceBanner";
import Slider from "src/components/base/slider";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div>
      <AcceptanceBanner></AcceptanceBanner>
      <Slider
        slidesPerView={1}
        slides={[
          {
            id: 1,
            src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/3tkdpavp.ops.jpg",
            alt: "slide1",
          },
          {
            id: 2,
            src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/5fz4nj3i.351.jpg",
            alt: "slide2",
          },
          {
            id: 3,
            src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/aqgt0y34.a0s.jpg",
            alt: "slide3",
          },
          {
            id: 4,
            src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/jwgd5v40.nlg.jpg",
            alt: "slide4",
          },
          {
            id: 5,
            src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/ltmlvita.22g.jpg",
            alt: "slide5",
          },
          {
            id: 6,
            src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/ochrogbb.3vb.jpg",
            alt: "slide6",
          },
        ]}
      ></Slider>
    </div>
  );
};

export default HomePage;
