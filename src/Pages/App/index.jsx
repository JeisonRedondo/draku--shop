import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../../Routes';
import { Navbar } from '../../Components/Navbar';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App 
