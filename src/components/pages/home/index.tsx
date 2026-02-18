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
            src: "../../../public/assets/images/slide1.jpg",
            alt: "slide1",
          },
          {
            id: 2,
            src: "../../../public/assets/images/slide2.jpg",
            alt: "slide2",
          },
          {
            id: 3,
            src: "../../../public/assets/images/slide3.jpg",
            alt: "slide3",
          },
          {
            id: 4,
            src: "../../../public/assets/images/slide4.jpg",
            alt: "slide4",
          },
          {
            id: 5,
            src: "../../../public/assets/images/slide5.jpg",
            alt: "slide5",
          },
          {
            id: 6,
            src: "../../../public/assets/images/slide6.jpg",
            alt: "slide6",
          },
        ]}
      ></Slider>
    </div>
  );
};

export default HomePage;
