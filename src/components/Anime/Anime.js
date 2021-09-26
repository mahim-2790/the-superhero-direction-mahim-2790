import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import './Anime.css'

const Anime = (props) => {
    const { name, director, image, language, ratting, ticketPrice, runTime } = props.anime;
    const addIcon = <FontAwesomeIcon icon={faPlus} />

    return (
        <div className="anime-container">

            <img src={image} alt="" />

            <div className="description-container">
                <h3><span></span>{name}</h3>
                <div className="description">
                    <p>Director: <span>{director}</span></p>
                    <p>Languages: <span>{language}</span></p>
                    <p>Run Time: <span>{runTime} min</span></p>
                    <p>Ticket Price: $<span>{ticketPrice}</span></p>
                </div>
                <div>
                    <Rating
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        initialRating={ratting}
                        readonly
                    ></Rating>
                </div>
                <div className="btn">
                    <button onClick={() => { props.handleAddToWatchList(props.anime) }}>
                        {addIcon} Add to Watch List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Anime;