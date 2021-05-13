
import './App.css';
import { useState , useEffect } from 'react';
import axios from 'axios';


function App() {
  const [names, setNames]= useState([]);
  // const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    axiosPokemon();
  },[])


  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
      .then(response => setNames(response.data.results))
      .catch(err => console.log(err));
  }

  // const refreshData = () => {
  //   setPokemon([]);
  //   setRefresh(refresh+1);
  // }

  
  
  return (
    <>
    <table>
    <thead>
      <th>Name</th>
    </thead>
    <tbody>
    {
      names.map((elem, i) => (
        <tr key={i}>
          <td>{i} {elem.name}</td>
        </tr>
      ))
    }
    </tbody>
    </table>
    </>
  );
}

export default App;
