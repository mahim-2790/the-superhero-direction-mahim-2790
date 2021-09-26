import React, { useEffect, useState } from 'react';
import Anime from '../Anime/Anime';
import Summary from '../Summary/Summary';
import './Shop.css'

const Shop = () => {
    const [animes, setAnimes] = useState([]);
    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
        fetch('./animeList.JSON')
            .then(res => res.json())
            .then(data => setAnimes(data));
    }, []);

    const handleAddToWatchList = anime => {
        const newWatchList = [...watchList, anime];
        setWatchList(newWatchList);
    };

    return (
        <div className="shop-container">

            <div className="item-container">
                {
                    animes.map(anime => <Anime
                        key={anime.id}
                        anime={anime}
                        handleAddToWatchList={handleAddToWatchList}
                    ></Anime>)
                }
            </div>

            <div className="summary">
                <Summary watchList={watchList}></Summary>
            </div>

        </div>
    );
};

export default Shop;