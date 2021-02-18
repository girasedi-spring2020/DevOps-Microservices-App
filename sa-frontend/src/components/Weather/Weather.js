import React from 'react';
import axios from "axios";
import WeatherDetails from '../WeatherDetails/WeatherDetails';

class Weather extends React.Component {
    state = { showWeatherDeatils: false, city: '', weatherDetails: {}, passCity: '' };
    getWeatherDetails = (e) => {
        e.preventDefault();
        if (this.state.city && this.state.city.trim() === '') {
            alert("Please enter valid city name");
            return;
        }
        fetch(`http://localhost:8080/weather/forecast/${this.state.city}`)
            .then((response) => response.json())
            .then((data) => this.setState({ showWeatherDeatils: true, weatherDetails: data, passCity: this.state.city }));
    }
    renderHTML() {
        return (
            <div>
                <div style={{ textAlign: "center", marginTop: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <input
                        style={{ padding: '5px', marginBottom: "10px", display: "block", border: 'gray 1px solid', borderRadius: '7px', lineHeight: "1.7rem", width: "25%" }}
                        value={this.state.city}
                        onChange={(e) => { this.setState({ city: e.target.value }) }}
                        placeholder="Please enter city name" />
                    <button
                        style={{ width: "25%", padding: "7px", border: 'gray 1px solid', borderRadius: '7px', color: 'white', backgroundColor: "#2674d5" }}
                        onClick={this.getWeatherDetails}
                    >Get Details</button>
                </div>
                {this.state.showWeatherDeatils ? <WeatherDetails city={this.state.passCity} details={this.state.weatherDetails}></WeatherDetails> : null}
            </div>
        )
    }
    render() {
        return this.renderHTML();
    }
}

export default Weather;