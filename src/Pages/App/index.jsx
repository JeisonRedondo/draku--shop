import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../../Routes';
import { Navbar } from '../../Components/Navbar';
import { ShoppingCartProvider } from '../../Context';

import './App.css';
import { Layout } from '../../Components/Layout';

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Layout >
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App 
