import React from 'react'

export default function MovieCard({movie}) {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    return (
        <div>
            <div className="movie">
                <div>
                    <p>{movie.release_date}</p>
                </div>

                <div>
                    <img
                        src={`${movie.poster_path ? IMG_URL+movie.poster_path: "http://via.placeholder.com/1080x1580"}`} alt={movie.title} />
                </div>

                <div>
                    <span>{movie.title}</span>
                </div>
            </div>
        </div>

    )
}
