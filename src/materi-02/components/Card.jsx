import "../App.css";

export default function Card({ image, alt, title, desc, category }) {
  return (
    <div className="review">
      <img src={image} alt={alt} />
      <h5>{category}</h5>
      <span>{title}</span>
      <p>{desc}</p>
    </div>
  );
}
