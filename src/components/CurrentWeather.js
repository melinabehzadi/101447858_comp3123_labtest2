import React from 'react';

const CurrentWeather = ({ weatherData }) => {
    const { name, sys, main, weather } = weatherData;
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
        <div style={styles.container}>
            <h2 style={styles.city}>{`${name}, ${sys.country}`}</h2>
            <img src={iconUrl} alt={weather[0].description} style={styles.icon} />
            <h1 style={styles.temperature}>{Math.round(main.temp)}°C</h1>
            <p style={styles.description}>{weather[0].description}</p>
        </div>
    );
};

const styles = {
    container: {
        background: 'linear-gradient(to bottom, #6a11cb, #2575fc)',
        borderRadius: '20px',
        padding: '20px',
        textAlign: 'center',
        color: '#fff',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
        width: '90%',
        maxWidth: '400px',
        margin: '0 auto',
    },
    city: {
        fontSize: '1.8rem',
        margin: '10px 0',
    },
    icon: {
        width: '100px',
        margin: '10px auto',
    },
    temperature: {
        fontSize: '3rem',
        fontWeight: 'bold',
        margin: '10px 0',
    },
    description: {
        fontSize: '1.2rem',
        textTransform: 'capitalize',
    },
};

export default CurrentWeather;
