import React, { Component } from 'react';
import classes from './App.css'

import Layout from './components/layout/layout'

class App extends Component{
    render(){
        return(
            <div className={classes.App}>
                <Layout/>
            </div>
        ) ;
    }
}
export default App;
