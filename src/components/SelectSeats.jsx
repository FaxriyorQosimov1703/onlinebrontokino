import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';
import MovieModal from './MovieModal';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


function SelectSeats({selectSeats, selectedSeat, SetSelectMovies, selectMovies}) {

    const classes = useStyles();

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    const [count, setCount] = useState(0);


    function bos(item) {
        setCount(item.row)
        selectedSeat.push({id: 1, row: item.row, seat: item.id, })
        localStorage.setItem('name2', JSON.stringify([...selectedSeat]));
    }

    function buyNow() {
        let a = localStorage.getItem('name1');
        let b = JSON.parse(a)
        console.log(b);
        setModal(p=>!p)
    }

    
    return (
        <div className="slect-seats">
            <MovieModal selectMovies={selectMovies} modal={modal} setModal={setModal}/>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-2 col-sm-1 col-1 col-xl-2">
                            <div className="select-seats-num float-right">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-10 col-10 col-xl-8">
                            <div className="cinema-seats">
                                {
                                    selectSeats.map((item1, index1 ) => 
                                    <ol className="cinema-seats-list">
                                            
                                            {
                                                item1.map((item, index) =>  
                                                
                                                <li id="TooltipExample" className="cinema-seat"  key={index}  >
                                                    <label  htmlFor={item.htmlFor} className="seat"  >
                                                        <input disabled={item.disabled} className="seat-checkbox visually-hidden" type="checkbox"   id={item.htmlFor}/>
                                                        <span onClick={()=>bos(item)}  className="seat-control" aria-label={item.arialLabel} >
                                                            <span  className="seat-number"  >{item.title}</span>
                                                        </span>
                                                    </label>
                                                            {/* <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
                                                                <div className="tooltip-item">
                                                                    <h6>Row: {console.log(item.id)}  </h6>

                                                                </div>
                                                            </Tooltip> */}
                                                </li>
                                                
                                                )
                                            }

                                        </ol>
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-1 col-1 col-xl-2">
                            <div className="select-seats-num">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.root}>
                <Button onClick={buyNow} variant="contained" disabled={false}>buy now</Button>

            </div>
        </div>
    )
}

export default SelectSeats
