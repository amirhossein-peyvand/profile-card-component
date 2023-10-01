import victor from "../assets/image-victor.jpg";
import headerImage from "../assets/bg-pattern-card.svg";
import "../sass/Card.scss";

const Card = () => {
  return (
    <article className="card">
      <section className="cardHeader">
        <img src={headerImage} alt="headerImage" />
      </section>
      <section className="profileContent">
        <img src={victor} alt="victor" />
        <div className="content">
          <div>
            <span className="name">Victor Crest</span>
            <span className="age">26</span>
          </div>
          <p className="city">London</p>
        </div>
      </section>
      <section className="wrapper">
        <div className="info">
          <div>
            <span>80K</span>
            <span>Followers</span>
          </div>
          <div>
            <span>803K</span>
            <span>Likes</span>
          </div>
          <div>
            <span>1.4K</span>
            <span>Photos</span>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Card;
