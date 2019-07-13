import React from 'react';
import WorkApi from '../../container/WorkApi/WorkApi'
import Aux from '../../hoc/wrapper'

const layout = (props) =>{
    return(
      <Aux>
          <WorkApi/>
      </Aux>  
    );
}

export default layout ;
