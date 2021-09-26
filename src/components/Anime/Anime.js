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
                <div className="description">
                    <h4>Name: <span>{name}</span></h4>
                    <h5>Director: <span>{director}</span></h5>
                    <h5>Languages: <span>{language}</span></h5>
                    <h5>Run Time: <span>{runTime} min</span></h5>
                    <h5>Ticket Price: <span>{ticketPrice}</span></h5>
                </div>
                <Rating
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    initialRating={ratting}
                    readonly
                ></Rating>
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