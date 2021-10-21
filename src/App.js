import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query,setQuery] = useState('')


  useEffect(() =>{
    const fetchItems = async () => {
      const result = await axios(`https://anapioficeandfire.com/api/characters/`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
      fetchItems()
  },[query])

  return (
    <div className="container">
      <Header/>
      
      <CharacterGrid isLoading={isLoading}  items = {items} />
    </div>
  );
}

export default App;
