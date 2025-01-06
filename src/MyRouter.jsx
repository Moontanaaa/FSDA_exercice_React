import { Route, Routes } from 'react-router-dom';
import App from './App';
import UserCard from './components/UserCard';

export const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<h1>error 404</h1>} />
      <Route path="/user/:id" element={<UserCard />} />
    </Routes>
  );
};
