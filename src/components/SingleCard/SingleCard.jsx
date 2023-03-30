import React from 'react';

const SingleCard = ({ movie, handleWatchTime }) => {
    // [movieName, description, poster, watchTime, cetagory] = props.movie;
    return (
        <div>
            <div className="movie-card card col-md-6">
                <div className="movie-poster w-25 m-auto">
                    <img className='w-75' src={movie.poster} />
                </div>
                <h3>{movie.movieName}</h3>
                <p>{movie.buttondescription}</p>
                <div className='timeAndRating d-flex justify-content-around'>
                    <p>WatchingTime: {movie.watchTime}</p>
                    <p>Rating: {movie.imdbRating}</p>
                </div>
                <button onClick={() => handleWatchTime(movie.watchTime)}className='btn btn-info w-75 m-auto'>Book Now</button>
            </div>
        </div>
    );
};

export default SingleCard;