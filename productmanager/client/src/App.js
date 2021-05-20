import logo from './logo.svg';
import './App.css';
import ProductForm from './components/ProductForm';
import {Router} from '@reach/router';
import AllProducts from './views/AllProducts';
import OneProduct from './views/OneProduct';
import NewProduct from './views/NewProduct';
import EditProduct from './views/EditProduct';

function App() {
  return (
    <>
    <Router>
      <AllProducts path="/"></AllProducts>
      <OneProduct path="/product/:id"></OneProduct>
      <NewProduct path="/product/new"></NewProduct>
      <EditProduct path="/product/:id/edit"></EditProduct>
    </Router>
    </>
  );
}

export default App;
