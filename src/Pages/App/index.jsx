import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../../Routes';
import { Navbar } from '../../Components/Navbar';
import { ShoppingCartProvider } from '../../Context';

import './App.css';
import { Layout } from '../../Components/Layout';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Layout >
          <AppRoutes />
        </Layout>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App 
