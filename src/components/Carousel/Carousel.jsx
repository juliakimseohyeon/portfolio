import "./Carousel.scss";
import CarouselItem from "../CarouselItem/CarouselItem";
import { carouselDetails } from "../CarouselDetails/CarouselDetails";

export default function LogoCarousel() {
  return (
    <div className="carousel__container">
      <div className="carousel__track">
        {carouselDetails.map((item, index) => {
          return <CarouselItem imgUrl={item} key={index} />;
        })}
        {carouselDetails.map((item, index) => {
          return <CarouselItem imgUrl={item} key={index} />;
        })}
      </div>
    </div>
  );
}
