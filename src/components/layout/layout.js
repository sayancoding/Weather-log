import React from 'react';
import WorkApi from '../../container/WorkApi/WorkApi'
import Aux from '../../hoc/wrapper'
import Banner from '../banner/banner';
import classes from './layout.css'
import Foot from '../footer/footer'
// import Msg from '../../components/errorMsg/errorMsg'

const layout = (props) =>{
    return(
      <Aux>
        <div className={classes.layout}>
          <Banner/>
          <WorkApi/>
          
        </div>
        <Foot/>
      </Aux>  
    );
}

export default layout ;
