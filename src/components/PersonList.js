import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PersonList() {
    const [fetchPersons, setFetchPersons] = useState([]);
    const [axiosPersons, setAxiosPersons] = useState([]);

    // Fetch API
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5')
            .then(response => response.json())
            .then(data => {
                setFetchPersons(data.results);
                console.log('Fetch API Results:', data.results);
            });
    }, []);

    // Axios API
    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=5')
            .then(response => {
                setAxiosPersons(response.data.results);
                console.log('Axios API Results:', response.data.results);
            });
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Person List (Fetch API & Axios)</h1>

            <div style={{ marginBottom: '20px' }}>
                <h2>Using Fetch API</h2>
                <ul>
                    {fetchPersons.map(person => (
                        <li key={person.login.uuid}>
                            {person.name.first} {person.name.last}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Using Axios API</h2>
                <ul>
                    {axiosPersons.map(person => (
                        <li key={person.login.uuid}>
                            {person.name.first} {person.name.last}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
