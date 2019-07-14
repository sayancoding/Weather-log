import React from 'react';
import Msg from '../../components/errorMsg/errorMsg'

import classes from './list.css'

const list = (props) =>{
    
    let listObject = []

    if(props.cod === 200){
         listObject = Object.keys(props.listObj).map(listKey=>{
            return <li key={listKey} className={classes.li}>{listKey} : {props.listObj[listKey]}</li>
        })
    }
    else{
         listObject = <Msg/>
    }
    return(
        <div className={classes.area}>
            <ul className={classes.ul}>
                {listObject}
            </ul>
        </div>
    );
}

export default list ;