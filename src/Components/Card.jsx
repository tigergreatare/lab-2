export default function Card({ country, name, image, price, rating, sale }) {
    const Rating = rating <= 3.5;
    return (
      <div className="card">
        <img src={image} alt={name} width="100px" />
        <h2>{country}</h2>
        <h3>{name}</h3>
        <p style={{ color: Rating ? "red" : "green" }}>{rating}</p>
        <h3>{price}</h3>
      </div>
    );
  }
  