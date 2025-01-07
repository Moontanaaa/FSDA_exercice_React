
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';

const API_KEY = 'ec5f933788ec2e550fc16821c27da3f6'; // Clé d'API 

// Composant UserCard qui affiche les informations d'un utilisateur et la météo de son lieu
const UserCard = () => {
    const { id } = useParams();
    const { users } = useContext(UserContext);
    const [weather, setWeather] = useState(null);

    const user = users[id];

    // Effet de récupération des informations météo basé sur les données utilisateur
    useEffect(() => {
        if (user) {
            const fetchWeather = async () => {
                const { latitude, longitude } = user.location.coordinates;
                try {
                    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
                    setWeather(response.data);
                } catch (error) {
                    console.error('Error fetching weather:', error);
                }
            };
            fetchWeather(); // Appelle de la fonction 
        }
    }, [id, user]);


    if (!user) return <div>User not found</div>;

    // Retourne l'affichage de la carte utilisateur avec les informations et la météo
    return (
        <div>
            <h2>{user.name.first} {user.name.last}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            {weather && (
                <div>
                    <h3>Weather in {user.location.city}:</h3>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default UserCard;




