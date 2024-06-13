import "./CarouselItem.scss";

export default function CarouselItem({ imgUrl }) {
  return (
    <div className="carousel-card">
      <img src={imgUrl} />
    </div>
  );
}
