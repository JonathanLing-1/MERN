
import './App.css';
import { Router } from '@reach/router';
import AllTrucks from './views/AllTrucks';
import EditTruck from './views/EditTruck';
import OneTruck from './views/OneTruck';
import NewTruck from './views/NewTruck';
import Header from './components/Header';

function App() {

  return (
    <>
      <Header/>
      <Router>
        <AllTrucks path="/"></AllTrucks>
        <OneTruck path="/truck/:id"></OneTruck>
        <NewTruck path="/truck/new"></NewTruck>
        <EditTruck path = '/truck/:id/edit'></EditTruck>
      </Router>
    </>
  );
}

export default App;
