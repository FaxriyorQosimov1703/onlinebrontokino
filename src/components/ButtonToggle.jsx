import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


function ButtonToggle() {

    const classes = useStyles();


    return (
        <div>
            <Button variant="contained" >Movies</Button>
        </div>
    )
}

export default ButtonToggle
