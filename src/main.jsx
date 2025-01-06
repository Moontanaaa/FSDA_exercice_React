
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MyRouter } from './MyRouter.jsx'
import Navbar from './components/navBar.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <MyRouter />
  </BrowserRouter>,
)
