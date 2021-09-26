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

            <div className="description">
                <h3>Name: {name}</h3>
                <p>Director: <span>{director}</span></p>
                <p>Languages: <span>{language}</span></p>
                <p>Run Time: <span>{runTime} min</span></p>
                <p>Ticket Price: <span>{ticketPrice}</span></p>
                <Rating
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    initialRating={ratting}
                    readonly
                ></Rating><br />
                <button onClick={() => { props.handleAddToWatchList(props.anime) }}>
                    {addIcon} Add to Watch List
                </button>
            </div>
        </div>
    );
};

export default Anime;