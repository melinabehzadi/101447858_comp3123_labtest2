import React from 'react';

const WeatherCard = ({ weatherData }) => {
    if (!weatherData) {
        return <p>No data available.</p>;
    }

    const { name, main, weather, wind, sys } = weatherData;
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
        <div style={styles.card}>
            <h2>{name}, {sys.country}</h2>
            <h3>{new Date().toLocaleDateString()}</h3>
            <img src={iconUrl} alt={weather[0].description} />
            <h1>{Math.round(main.temp)}°C</h1>
            <p>{weather[0].description}</p>
            <p>Humidity: {main.humidity}%</p>
            <p>Wind Speed: {wind.speed} km/h</p>
        </div>
    );
};

const styles = {
    card: {
        padding: '30px',
        margin: '20px auto',
        width: '90%',
        maxWidth: '400px',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, #4facfe, #00f2fe)',
        color: '#fff',
        fontFamily: "'Roboto', sans-serif",
    },
    icon: {
        width: '100px',
        margin: '0 auto',
    },
    temperature: {
        fontSize: '3em',
        fontWeight: 'bold',
    },
    description: {
        textTransform: 'capitalize',
        margin: '10px 0',
    },
    details: {
        fontSize: '1.2em',
        margin: '5px 0',
    },
};



export default WeatherCard;
