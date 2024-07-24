import "./Testimonials.scss";
import { testimonials } from "../../data/TestimonialsData";
import { Link } from "react-router-dom";
import { openInNewTab } from "../../utils/openNewTab";

export default function Testimonials() {
  return (
    <div className="testimonials__container">
      <h2>Words on the street</h2>
      <div className="testimonials__gallery">
        {testimonials.map((testimonial) => (
          <Link
            onClick={() =>
              openInNewTab(
                "https://www.linkedin.com/in/julia-kim-seo-hyeon/details/recommendations/?detailScreenTabIndex=0"
              )
            }
            className="testimonials__item"
          >
            <img className="testimonials__photo" src={testimonial.photo} />
            <div className="testimonials__text-group">
              <h3 className="testimonials__name">{testimonial.name}</h3>
              <p className="testimonials__label label">
                {testimonial.relationship}
              </p>
              <p className="testimonials__text">{testimonial.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
