import React from 'react';
import WorkApi from '../../container/WorkApi/WorkApi'
import Aux from '../../hoc/wrapper'
import Banner from '../banner/banner';
import classes from './layout.css'
const layout = (props) =>{
    return(
      <Aux>
        <div className={classes.layout}>
          <Banner/>
          <WorkApi/>
        </div>
          
      </Aux>  
    );
}

export default layout ;
