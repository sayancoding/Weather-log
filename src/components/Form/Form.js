import React from 'react';
import classes from './form.css'

const Form = (props) =>{
    return(
        <div className={classes.formArea}>
            <form className={classes.from} onSubmit={props.getUpdate}>
                <div className={classes.inputArea}><input className={classes.input} type="text" name="city" placeholder={'City..'}/>
                <input className={classes.input} type="text" name="country" placeholder={'Country..'}/>
                </div>
                <button className={classes.btn}>Get Update</button>
            </form>
        </div>
    );
}

export default Form;