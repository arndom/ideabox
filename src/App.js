import { useEffect, useState } from 'react';
import './App.css';
import Feed from './components/Feed';
import SideBar from './components/SideBar';
import requests from "./requests";

function App() {
  // select recent, featured, best for feeds
  const [selectedCategory, setSelectedCategory] = useState(requests.fetchHot); 

  useEffect(() => { 
    console.log(selectedCategory)
  }, [selectedCategory])

  return (
    <div className= 'app'>

        <SideBar setSelectedCategory = {setSelectedCategory}/>

        <Feed selectedCategory = {selectedCategory}/>

    </div>
  );
}

export default App;
