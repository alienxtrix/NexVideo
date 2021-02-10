import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/carouselItem.scss";
import PlayIcon from "../assets/static/play-icon.png";
import PlusIcon from "../assets/static/plus-icon.png";
import RemoveIcon from "../assets/static/remove-icon.png";

const CarouselItem = (props) => {
  // const handleSetFavorite = () => {
  //   console.log("push");
  //   console.log("ID: ", id);
  //   setFavorite({
  //     cover,
  //     title,
  //     year,
  //     contentRating,
  //     duration,
  //     id,
  //   });
  //   console.log(setFavorite);
  // };
  const { cover, title, year, contentRating, duration, id, isTrue } = props;
  const handleSetFavorite = () => {
    props.setFavorite({ cover, title, year, contentRating, duration, id });
    console.log("porps: ");
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt="" />
      <div className="carousel-item__details">
        <div>
          {isTrue ? (
            <>
              <img
                className="carousel-item__details--img"
                src={PlayIcon}
                alt="Play Icon"
              />
              <img
                className="carousel-item__details--img"
                src={RemoveIcon}
                alt="Remove Icon"
                onClick={() => handleDeleteFavorite(id)}
              />{" "}
            </>
          ) : (
            <>
              <img
                className="carousel-item__details--img"
                src={PlayIcon}
                alt="Play Icon"
              />
              <img
                className="carousel-item__details--img"
                src={PlusIcon}
                alt="Plus Icon"
                onClick={handleSetFavorite}
              />
            </>
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration} minutos`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  id: propTypes.number,
  cover: propTypes.string,
  title: propTypes.string,
  year: propTypes.number,
  contentRating: propTypes.string,
  duration: propTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
// export default CarouselItem;
