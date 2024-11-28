import React from 'react';
import { WiHumidity, WiStrongWind, WiBarometer, WiThermometer } from 'react-icons/wi';

const WeatherDetails = ({ weatherData }) => {
    const { main, wind } = weatherData;

    return (
        <div style={styles.container}>
            <div style={styles.detailItem}>
                <WiHumidity size={60} style={styles.icon} />
                <p style={styles.text}>Humidity: {main.humidity}%</p>
            </div>
            <div style={styles.detailItem}>
                <WiStrongWind size={60} style={styles.icon} />
                <p style={styles.text}>Wind: {wind.speed} km/h</p>
            </div>
            <div style={styles.detailItem}>
                <WiBarometer size={60} style={styles.icon} />
                <p style={styles.text}>Pressure: {main.pressure} hPa</p>
            </div>
            <div style={styles.detailItem}>
                <WiThermometer size={60} style={styles.icon} />
                <p style={styles.text}>Max Temp: {Math.round(main.temp_max)}°C</p>
            </div>
            <div style={styles.detailItem}>
                <WiThermometer size={60} style={styles.icon} />
                <p style={styles.text}>Min Temp: {Math.round(main.temp_min)}°C</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        background: '#444',
        padding: '30px',
        borderRadius: '20px',
        margin: '30px auto',
        color: '#fff',
        width: '90%',
    },
    detailItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        marginBottom: '15px',
    },
    text: {
        fontSize: '1.8rem',
        textAlign: 'center',
    },
};

export default WeatherDetails;
