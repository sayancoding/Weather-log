import React from 'react';
import classes from './banner.css'


const banner = (props) =>{
    return(
        <div className={classes.banner}>
            {/* <img src="" alt=""/> */}
            <div className={classes.text}>
                <h1>Weather Update</h1>
                <p>" Weather log for local and internationl's."</p>
            </div>
            

        </div>
    );
}

export default banner ;