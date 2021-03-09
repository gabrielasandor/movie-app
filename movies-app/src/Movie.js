import React from 'react';


const images_api = "https://image.tmdb.org/t/p/w1280"

const setVoteClass = (vote) => {
    if (vote >= 7) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red';
    }
}


const Movie = ({ title, poster_path, overview, vote_average }) => (
    <div className="movie">
        <div className="movie-heder">

            <img src={poster_path ? (images_api + poster_path) : 'https://whatson.guide/wp-content/uploads/2019/01/10-1.jpg'} />
            <div className="movie_info">
                <h3>{title}</h3>
                <div></div>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
        </div>

    </div>
);




export default Movie;

