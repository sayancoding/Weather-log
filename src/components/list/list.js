import React from 'react';

import classes from './list.css'

const list = (props) =>{
    const listObject = Object.keys(props.listObj).map(listKey=>{
        return <li key={listKey} className={classes.li}>{listKey} : {props.listObj[listKey]}</li>
    })

    

    return(
        <div className={classes.area}>
            <ul className={classes.ul}>
                {listObject}
            </ul>
        </div>
    );
}

export default list ;