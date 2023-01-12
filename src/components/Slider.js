import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    marginTop:'10%',
  
  },
  thumb: {
    
    marginTop:'1%',
    color: '#D19C97 ',
  },

  rail: {
    
    color: `rgba(0, 0, 0, 0.26)`,
  },
  track: {
    color: '#D19C97 ',
  },
});

// some comment added

const SliderZafi = ({ value, changePrice }) => {


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={changePrice}
        valueLabelDisplay='on'
        min={0}
        max={10000}
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track
          
        }}
      />
    </div>
  );
};

export default SliderZafi;