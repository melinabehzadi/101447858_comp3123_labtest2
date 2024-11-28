import React from 'react';

const WeeklyForecast = ({ forecastData }) => {
    if (!forecastData || forecastData.length === 0) {
        return <p>No forecast data available.</p>;
    }

    // Filter forecast to get one entry per day for the next 6 days
    const dailyForecast = forecastData.filter((entry, index, array) => {
        // Extract the day for each entry
        const entryDate = new Date(entry.dt * 1000);
        const day = entryDate.getDate();

        // Check if this is the first entry for this day
        return array.findIndex(e => new Date(e.dt * 1000).getDate() === day) === index;
    }).slice(0, 6); // Limit to 6 days

    return (
        <div style={styles.container}>
            {dailyForecast.map((day, index) => {
                const date = new Date(day.dt * 1000);
                const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });

                return (
                    <div key={index} style={styles.day}>
                        <p style={styles.text}>{weekday}</p>
                        <img
                            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                            alt={day.weather[0].description}
                            style={styles.icon}
                        />
                        <p style={styles.text}>{Math.round(day.main.temp)}°C</p>
                    </div>
                );
            })}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px',
        background: '#333',
        borderRadius: '20px',
        padding: '20px',
        width: '90%',
        margin: '0 auto',
    },
    day: {
        textAlign: 'center',
        color: '#fff',
        flex: 1,
        margin: '0 15px',
        padding: '20px',
        background: '#444',
        borderRadius: '15px',
    },
    icon: {
        width: '70px',
        margin: '15px auto',
    },
    text: {
        fontSize: '1.2rem',
    },
};

export default WeeklyForecast;
