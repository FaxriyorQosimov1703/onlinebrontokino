import MoviesCardTable from "./MoviesCardTable";
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function MoviesCard({moviesItem, selectMovies, SetSelectMovies, moviesItemToLocalStorage}) {
    const classes = useStyles();

    let lola = localStorage.getItem('name');
    let lolaArray = JSON.parse(lola)
    const [selectSeatVisible, SetSelectSeatVisible] = useState(true)


    return (
        <div>
            <div className="movies-card-item">
                <div className="row">
                    <div className="col-xl-3 col-md-4 col-sm-12">
                        <img src={lolaArray.src} alt=""/>
                    </div>
                    <div className="col-xl-9 col-md-8 col-sm-12">
                        <h4>{lolaArray.title}</h4>
                        <div >
                            <Link  to={"/movies/"+lolaArray.title+"/select-seats"}>
                                <Button variant="contained" disabled={selectSeatVisible} >Select Seats</Button>
                            </Link>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <MoviesCardTable selectMovies={selectMovies} SetSelectMovies={SetSelectMovies} SetSelectSeatVisible={SetSelectSeatVisible} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviesCard
