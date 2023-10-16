import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../../Routes';
import { Navbar } from '../../Components/Navbar';

import './App.css';
import { Layout } from '../../Components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout >
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App 
