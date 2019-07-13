import React, { Component } from 'react';
import Aux from '../../hoc/wrapper';
import Form from '../../components/Form/Form'
import List from '../../components/list/list'

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
        
            const listRef = {...this.state.list}
            listRef.City=`${data.name} , ${data.sys.country}`
            listRef.Country=data.sys.country
            listRef.Temparature=`${(Math.round(data.main.temp)-273)} 'C`
            listRef.Humidity=`${data.main.humidity} %`
            listRef.Description=`Now in ${data.weather[0].description}`
            listRef['Wind Speed']=data.wind.speed
            
            this.setState({
                list:listRef,
                errorStatus:'no error',
                visibility:true,
            })
            console.log(data)   
        }

        else{
            this.setState({
                errorStatus:"Please fill above fields."
            })
        }
        
        // const objectVal = Object.values(this.state.list)
        
    }

    render() {
        return(
            <Aux>
                <div className={classes.container}>
                    <Form getUpdate={this.getWeather}/>
                    {
                        this.state.visibility ? <List
                        listObj={this.state.list}
                        />:null
                    }
                    
                </div>
                
            </Aux>
        ) ;
    }
}
export default WorkApi;