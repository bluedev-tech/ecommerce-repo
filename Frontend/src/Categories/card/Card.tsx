import "./Card.css";

const Card = (props) => {
  const { img, title, desc, price } = props.items;
  return (
    <>
      <div className="card">
        <div className="prodimage">
          <img
            className="image"
            src={import.meta.env.VITE_UPLOAD_URL + img.url}
            alt={title}
          />
        </div>
        <div className="details">
          <div>
            <p className="desct">{desc}</p>
          </div>
          <div className="microdets">
            <div className="prodname">Name: {title}</div>
            <div className="prodprice">Price: ${price}</div>
          </div>
        </div>
        <button>Add to cart</button>
      </div>
    </>
  );
};

export default Card;
