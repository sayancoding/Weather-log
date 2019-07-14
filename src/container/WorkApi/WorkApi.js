import React, { Component } from 'react';
import Aux from '../../hoc/wrapper';
import Form from '../../components/Form/Form'
import List from '../../components/list/list'
import Msg from '../../components/errorMsg/errorMsg'

import classes from './WorkApi.css'

const API_KEY ="db5d3609c1a6fb9ef5d8be98fd723ca7";

class WorkApi extends Component{

    state={
        list:{
            City:undefined,
            Country:undefined,
            Temparature:undefined,
            Humidity:undefined,
            Description:undefined,
            'Wind Speed':undefined,
        },
        
        cod:undefined,
        visibility:false,
        errorStatus:undefined
        
    }

    

    getWeather = async (e)=>{
        e.preventDefault();

        const city = e.target.city.value;
        const country = e.target.country.value;

        if(city  &&  country){
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
            const data = await api_call.json();
            this.setState({cod:data.cod})
        
            const listRef = {...this.state.list}

            if(data.cod === 200){
                listRef.City=`${data.name} , ${data.sys.country}`
                listRef.Country=data.sys.country
                listRef.Temparature=`${(Math.round(data.main.temp)-273)} 'C`
                listRef.Humidity=`${data.main.humidity} %`
                listRef.Description=`Now in ${data.weather[0].description}`
                listRef['Wind Speed']=`${data.wind.speed} mt/s`
                
                this.setState({
                    list:listRef,
                    errorStatus:'no error',
                    visibility:true,
                    cod:data.cod
                })
            }

            
            console.log(this.state)   
        }
        
    }

    render() {
        return(
            <Aux>
                <div className={classes.container}>
                    <Form getUpdate={this.getWeather}/>
                    {
                        (this.state.cod===200) ? <List
                        listObj={this.state.list}
                        cod={this.state.cod}
                        visibility = {this.state.visibility}
                        />:null
                    }
                 {
                 (this.state.cod === 404) ?
                 <Msg/>:null
                 }
                 
                </div>
                
                
            </Aux>
        ) ;
    }
}
export default WorkApi;