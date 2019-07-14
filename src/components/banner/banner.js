import React from 'react';
import classes from './banner.css'
import bannerLogo from '../../assets/weatherBanner.png';


const banner = (props) =>{
    return(
        <div className={classes.banner}>
            <img src={bannerLogo} alt="logo"/>
            <div className={classes.text}>
                <h1>Weather Update</h1>
                <p>" Weather log for local and international's."</p>
            </div>
            

        </div>
    );
}

export default banner ;