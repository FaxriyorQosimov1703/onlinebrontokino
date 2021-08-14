import React from 'react'
import { Link } from 'react-router-dom'
import {movies} from './MoviesItems'


function Movies({setMoviesItem, setMoviesItemToLocalStorage}) {
    function addItem(item) {
        setMoviesItem(item);
        localStorage.setItem('name', JSON.stringify(item));
        // setMoviesItemToLocalStorage(a)

    }
    return (
        <div>
            <div className="row">
                {
                    movies.map((item, index) => 
                        <div className="col-md-4 col-sm-6 col-xl-2 col-6 movies">
                            <Link key={item.id} to={'/movies/' + item.title}>
                                <div className="movies-card" onClick={()=>addItem(item)} >
                                    <div className="movies-img">
                                        <img src={item.src} alt=""/>
                                    </div>
                                    <div className="movies-details p-2">
                                    
                                        <h5>{item.title}</h5>
                                        <h6>{item.duration}</h6>
                                    </div>
                                </div>
                            </Link>
                        </div>


                    )
                }
            </div>
        </div>
    )
}

export default Movies
