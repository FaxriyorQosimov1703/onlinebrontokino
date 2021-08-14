import React,{useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import Button from '@material-ui/core/Button';


import TextField from '@material-ui/core/TextField';

const useStyles2 = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const useStyles1 = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


function MoviesCardTable({SetSelectSeatVisible, selectMovies, SetSelectMovies}) {
    
    const [addSeansDisabled, setAddSeansDisabled] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null)
    
    const [rows, setRows] = useState([
        {id: 1, date: '', seans: '10:00', price: "30000 so'm", disabled: false},
        {id: 2, date: '', seans: '12:00', price: "40000 so'm", disabled: false},
        {id: 3, date: '', seans: '14:00', price: "50000 so'm", disabled: false},
        {id: 4, date: '', seans: '16:00', price: "60000 so'm", disabled: false},
        {id: 5, date: '', seans: '18:00', price: "70000 so'm", disabled: false},
    ]);
    
    function addSeans(rowitem) {
        let b = rowitem.id -1;
        rows[b].disabled = true;
        setRows([...rows]);

        SetSelectSeatVisible(false)
        selectMovies.push({id: selectMovies.length+1, date: rowitem.date, seans: rowitem.seans, price: rowitem.price})
        localStorage.setItem('name1', JSON.stringify([...selectMovies]))
        
    }
    function afa(e) {
        // console.log(e.target.value);
    }

    function salom(date) {
      const day = date.getDate();
      const month = date.getMonth() > 9 ? date.getMonth()+1 : '0'+date.getMonth();
      const year = date.getFullYear();
      setSelectedDate(date)
      rows.map(item => item.date = day + '/' + month + '/' + year)
      setRows([...rows])
    }

    const newDate = new Date();
    const maxDay = newDate.getDate() + 5;
    const minDay = newDate.getDate();

    const classes = useStyles();
    const classes1 = useStyles1();
    const classes2 = useStyles2();
    return (
        <TableContainer component={Paper} className="my-5">
        <Table className={classes.table} aria-label="customized table">
          <TableHead className="bg-primary">
            <TableRow className="bg-primary">
              <StyledTableCell className="bg-secondary">
                <DatePicker 
                  selected={selectedDate}
                  onChange={date => salom(date)}
                  dateFormat='dd/MM/yyyy'
                  filterDate={date => date.getDate() > minDay-1 && date.getDate() < maxDay}                
                />

              </StyledTableCell>
              <StyledTableCell align="right" className="bg-secondary">Seans</StyledTableCell>
              <StyledTableCell align="right"  className="bg-secondary">Price</StyledTableCell>
              <StyledTableCell align="right" className="bg-secondary">Add</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {rows.filter(item => {
              if(item.date == '') {
                return ''
              }else {
                return item
              }
            }).map((row) => (
              <StyledTableRow  >
                <StyledTableCell component="th" scope="row">
                  {row.date}
                </StyledTableCell>
                <StyledTableCell align="right">{row.seans}</StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                <StyledTableCell align="right">   
                    <div className={classes2.root}>
                        <Button disabled={row.disabled} variant="contained" onClick={()=>addSeans(row)}>Add Seans</Button>

                    </div>     
                 </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default MoviesCardTable
