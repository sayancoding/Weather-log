import React from 'react';
import classes from './errorMsg.css'

const errorMsg = (props) =>{
    return(
        <div className={classes.center}>
            <p className={classes.danger}>Check the Above..</p>
        </div>
        
    );
}

export default errorMsg ;