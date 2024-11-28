import React, { Component } from 'react';
import axios from 'axios';
import CurrentWeather from './CurrentWeather';
import WeatherDetails from './WeatherDetails';
import WeeklyForecast from './WeeklyForecast';
import SearchBar from './SearchBar';

class WeatherApp extends Component {
    state = {
        city: 'Toronto',
        weatherData: null,
        forecastData: [],
        loading: true,
    };

    fetchWeather = async () => {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        this.setState({ loading: true }); // Show loading indicator while fetching data
        try {
            const weatherResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${apiKey}&units=metric`
            );

            const forecastResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${apiKey}&units=metric`
            );

            this.setState({
                weatherData: weatherResponse.data,
                forecastData: forecastResponse.data.list.slice(0, 5), // Get 5 days of forecast
                loading: false,
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            this.setState({ loading: false });
        }
    };

    handleCityChange = (event) => {
        this.setState({ city: event.target.value });
    };

    render() {
        const { city, weatherData, forecastData, loading } = this.state;

        return (
            <div style={{ padding: '20px', fontFamily: 'Roboto, sans-serif' }}>
                <SearchBar
                    city={city}
                    onCityChange={this.handleCityChange}
                    onSearch={this.fetchWeather}
                />
                {loading ? (
                    <p style={{ textAlign: 'center', fontSize: '2rem', color: '#fff' }}>Loading...</p>
                ) : (
                    <>
                        <CurrentWeather weatherData={weatherData} />
                        <WeatherDetails weatherData={weatherData} />
                        <WeeklyForecast forecastData={forecastData} />
                    </>
                )}
            </div>
        );
    }
}

export default WeatherApp;
