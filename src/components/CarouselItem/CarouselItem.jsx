import "./CarouselItem.scss";

export default function CarouselItem({ imgUrl }) {
  return (
    <div className="carousel__item">
      <img className="carousel__image" src={imgUrl} />
    </div>
  );
}
