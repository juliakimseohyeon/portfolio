import "./Testimonials.scss";
import { testimonials } from "../../data/TestimonialsData";

export default function Testimonials() {
  return (
    <div className="testimonials__container">
      <h2>Words on the street</h2>
      <div className="testimonials__gallery">
        {testimonials.map((testimonial) => (
          <div className="testimonials__item">
            <div className="testimonials__person">
              <img src={testimonial.photo} />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.relationship}</p>
            </div>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
