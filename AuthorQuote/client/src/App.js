import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { Router, Link } from '@reach/router'
import AllAuthors from './views/AllAuthors';
import OneAuthor from './views/OneAuthor';
import EditAuthor from './views/EditAuthor';
import AddQuote from './views/AddQuote';
import NewAuthor from './views/NewAuthor';

function App() {
  return (
    <>
    <Header/>
    <Link to="author/new">Add a quotable author!</Link>
    <Router>
      <AllAuthors path="/"/>
      <OneAuthor path="author/:id"/>
      <EditAuthor path="author/:id/edit"/>
      <NewAuthor path="author/new"/>
      <AddQuote path="write/:id"/>
    </Router>
    </>
  );
}

export default App;
