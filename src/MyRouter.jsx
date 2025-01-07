import { Route, Routes } from 'react-router-dom';
import App from './App';
import UserCard from './components/UserCard';
import WeatherPage from './components/WeatherPage.jsx';


export const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<h1>Error 404: Page Not Found</h1>} />
      <Route path="/user/:id" element={<UserCard />} />
      <Route path="/weather" element={<WeatherPage />} />
    </Routes>
  );
};
