import React from 'react';

const Summary = (props) => {
    const { watchList } = props;
    console.log(watchList);

    let total = 0;
    let list = [];
    for (const anime of watchList) {
        total = total + anime.ticketPrice;
        list = [...list, anime.name]
    }
    return (
        <div>
            <h3>Anime Added: {watchList.length}</h3>
            <h3>Total Cost: {total}</h3>
            {
                list.map(item => <div key={item.id}>{item}</div>)
            }
        </div>
    );
};

export default Summary;