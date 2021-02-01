import React from 'react'
import propTypes from 'prop-types'
import '../assets/styles/components/carouselItem.scss'
import PlayIcon from '../assets/static/play-icon.png'
import PlusIcon from '../assets/static/plus-icon.png'

const CarouselItem = ({cover,title,year,contentRating,duration}) => {
    return(
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt=""  />
            <div className="carousel-item__details">
              <div>             
                <img className="carousel-item__details--img" src={PlayIcon} alt="Play Icon"/>
                <img className="carousel-item__details--img" src={PlusIcon} alt="Plus Icon"/>
              </div>
              <p className="carousel-item__details--title">{title}</p>
              <p className="carousel-item__details--subtitle">
              {`${year} ${contentRating} ${duration} minutos` }
              </p>
            </div>
          </div>
    )
}

CarouselItem.propTypes={
  cover: propTypes.string,
  title: propTypes.string,
  year: propTypes.number,
  contentRating: propTypes.string,
  duration: propTypes.number
}

export default CarouselItem;