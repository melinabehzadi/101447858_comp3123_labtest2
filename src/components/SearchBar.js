import React from 'react';

const SearchBar = ({ city, onCityChange, onSearch }) => {
    return (
        <div style={styles.searchBar}>
            <input
                type="text"
                value={city}
                onChange={onCityChange}
                placeholder="Enter city name"
                style={styles.input}
            />
            <button onClick={onSearch} style={styles.button}>
                Search
            </button>
        </div>
    );
};

const styles = {
    searchBar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px auto',
        padding: '15px',
        width: '90%',
        maxWidth: '800px',
        background: '#444',
        borderRadius: '20px',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.4)',
    },
    input: {
        flex: 1,
        padding: '20px',
        fontSize: '1.5rem',
        border: 'none',
        borderRadius: '10px 0 0 10px',
        outline: 'none',
    },
    button: {
        padding: '20px 30px',
        fontSize: '1.5rem',
        backgroundColor: '#6495ED',
        color: '#fff',
        border: 'none',
        borderRadius: '0 10px 10px 0',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

export default SearchBar;
