import React, { Component } from 'react';
import Aux from '../../hoc/wrapper';
import Form from '../../components/Form/Form'

const API_KEY ="db5d3609c1a6fb9ef5d8be98fd723ca7";

class WorkApi extends Component{

    state={
        City:undefined,
        Country:undefined,
        Temparature:undefined,
        Humidity:undefined,
        Description:undefined,
        'wind-Speed':undefined,
    }

    getWeather = async (e)=>{
        e.preventDefault();

        const city = e.target.city.value;
        const country = e.target.country.value;

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
        const data = await api_call.json();
        

        this.setState({
            City:data.name,
            Country:data.sys.country,
            Temparature:data.main.temp,
            Humidity:data.humidity,
            Description:data.weather[0].description,
            'wind-Speed':data.wind.speed,
        })

        console.log(this.state);
    }

    render() {
        return(
            <Aux>
                <div>
                    <Form getUpdate={this.getWeather}/>
                </div>
            </Aux>
        ) ;
    }
}
export default WorkApi;