import { Route, Switch, Link} from 'react-router-dom'
import Movies from './Movies'
import ButtonToggle from './ButtonToggle'
import './details.css'
import MoviesCard from './MoviesCard'
import { useState } from 'react'
import SelectSeats from './SelectSeats'

function Details() {
    const [selectMovies, SetSelectMovies] = useState([
        // {id: 1, title: 'sdfad', row: 2, seat: 3, date: 'afasd', seans: 'asdf', price: 221}
    ]);
    const [selectedSeat, SetSelectedSeat] = useState([]);
    // console.log(selectedSeat);
    const [moviesItem, setMoviesItem ]= useState('');
    const [moviesItemToLocalStorage, setMoviesItemToLocalStorage] = useState('');
    const [selectSeats, SetSelectSeats] = useState([[
        {id: 1, row: 1,  arialLabel: "row-1 seat-1", title: 1, htmlFor: 'seats-1'},
        {id: 2, row: 1,  arialLabel: "row-1 seat-2", title: 2, htmlFor: 'seats-2'},
        {id: 3, row: 1,  arialLabel: "row-1 seat-3", title: 3, htmlFor: 'seats-3'},
        {id: 4, row: 1,  arialLabel: "row-1 seat-4", title: 4, htmlFor: 'seats-4'},
        {id: 5, row: 1,  arialLabel: "row-1 seat-5", title: 5, htmlFor: 'seats-5'},
        {id: 6, row: 1,  arialLabel: "row-1 seat-6", title: 6, htmlFor: 'seats-6'},
        {id: 7, row: 1,  arialLabel: "row-1 seat-7", title: 7, htmlFor: 'seats-7'},
        {id: 8, row: 1,  arialLabel: "row-1 seat-8", title: 8, htmlFor: 'seats-8'},
        {id: 9, row: 1,  arialLabel: "row-1 seat-9", title: 9, htmlFor: 'seats-9'},
        {id: 10, row: 1,  arialLabel: "row-41seat-10",title: 10, htmlFor: 'seats-10'},

    ],
    [
        {id: 1, row: 2,  arialLabel: "row-2 seat-1",  title: 1, htmlFor: 'seats-11'},
        {id: 2, row: 2,  arialLabel: "row-2 seat-2",  title: 2, htmlFor: 'seats-12'},
        {id: 3, row: 2,  arialLabel: "row-2 seat-3",  title: 3, htmlFor: 'seats-13'},
        {id: 4, row: 2,  arialLabel: "row-2 seat-4",  title: 4, htmlFor: 'seats-14'},
        {id: 5, row: 2,  arialLabel: "row-2 seat-5",  title: 5, htmlFor: 'seats-15'},
        {id: 6, row: 2,  arialLabel: "row-2 seat-6",  title: 6, htmlFor: 'seats-16'},
        {id: 7, row: 2,  arialLabel: "row-2 seat-7",  title: 7, htmlFor: 'seats-17'},
        {id: 8, row: 2,  arialLabel: "row-2 seat-8",  title: 8, htmlFor: 'seats-18'},
        {id: 9, row: 2,  arialLabel: "row-2 seat-9",  title: 9, htmlFor: 'seats-19'},
        {id: 10, row: 2,  arialLabel: "row-42seat-10", title: 10, htmlFor: 'seats-20'},

    ],
    [
        {id: 1, row: 3, arialLabel: "row-3 seat-1", title: 1, htmlFor: 'seats-21'},
        {id: 2, row: 3, arialLabel: "row-3 seat-2", title: 2, htmlFor: 'seats-22'},
        {id: 3, row: 3, arialLabel: "row-3 seat-3", title: 3, htmlFor: 'seats-23'},
        {id: 4, row: 3, arialLabel: "row-3 seat-4", title: 4, htmlFor: 'seats-24'},
        {id: 5, row: 3, arialLabel: "row-3 seat-5", title: 5, htmlFor: 'seats-25'},
        {id: 6, row: 3, arialLabel: "row-3 seat-6", title: 6, htmlFor: 'seats-26'},
        {id: 7, row: 3, arialLabel: "row-3 seat-7", title: 7, htmlFor: 'seats-27'},
        {id: 8, row: 3, arialLabel: "row-3 seat-8", title: 8, htmlFor: 'seats-28'},
        {id: 9, row: 3, arialLabel: "row-3 seat-9", title: 9, htmlFor: 'seats-29', disabled: true},
        {id: 10, row: 3, arialLabel: "row-43seat-10",title: 10, htmlFor: 'seats-30'},

    ],
    [
        {id: 1, row: 4, arialLabel: "row-4 seat-1", title: 1, htmlFor: 'seats-31'},
        {id: 2, row: 4, arialLabel: "row-4 seat-2", title: 2, htmlFor: 'seats-32'},
        {id: 3, row: 4, arialLabel: "row-4 seat-3", title: 3, htmlFor: 'seats-33', disabled: true},
        {id: 4, row: 4, arialLabel: "row-4 seat-4", title: 4, htmlFor: 'seats-34'},
        {id: 5, row: 4, arialLabel: "row-4 seat-5", title: 5, htmlFor: 'seats-35'},
        {id: 6, row: 4, arialLabel: "row-4 seat-6", title: 6, htmlFor: 'seats-36'},
        {id: 7, row: 4, arialLabel: "row-4 seat-7", title: 7, htmlFor: 'seats-37'},
        {id: 8, row: 4, arialLabel: "row-4 seat-8", title: 8, htmlFor: 'seats-38'},
        {id: 9, row: 4, arialLabel: "row-4 seat-9", title: 9, htmlFor: 'seats-39'},
        {id: 10, row: 4, arialLabel: "row-4 seat-10", title: 10, htmlFor: 'seats-30'},

    ],
    ]
    )

    return (
        <div className="container-sm container-md container-xl">
            <div className="navbar">
                <div className="logo">
                    <img src="../../images/logo2.png" alt=""/>
                </div>
                <div className="navbar-button">
                    <Link to="/movies">
                        <ButtonToggle></ButtonToggle>
                    
                    </Link>
                </div>
            </div>

            <div className="proekt-body">
                <Route exact path="/movies" component={()=><Movies setMoviesItem={setMoviesItem} setMoviesItemToLocalStorage={setMoviesItemToLocalStorage} />} />
                <Route exact path="/movies/:id" component={()=> <MoviesCard SetSelectMovies={SetSelectMovies} selectMovies={selectMovies} moviesItem={moviesItem} moviesItemToLocalStorage={moviesItemToLocalStorage} />} />
                <Route path="/movies/:id/:seats" component={()=><SelectSeats selectMovies={selectMovies} selectedSeat={selectedSeat} SetSelectMovies={SetSelectMovies} selectSeats={selectSeats} />} />
            </div>
        </div>
    )
}

export default Details
