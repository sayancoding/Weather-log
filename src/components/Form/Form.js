import React from 'react';
import { tsConditionalType } from '@babel/types';

const Form = (props) =>{
    return(
        <div>
            <form onSubmit={props.getUpdate}>
                <input type="text" name="city" placeholder={'City..'}/>
                <input type="text" name="country" placeholder={'Country..'}/>
                <button>Get Update</button>
            </form>
        </div>
    );
}

export default Form;