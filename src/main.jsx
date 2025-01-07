
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MyRouter } from './MyRouter.jsx'
import Navbar from './components/navBar.jsx'
import { UserProvider } from './context/UserContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <Navbar />
      <MyRouter />
    </UserProvider>
  </BrowserRouter>,
)
