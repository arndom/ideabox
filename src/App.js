import { useEffect, useState } from 'react';
import './App.css';
import Feed from './components/Feed';
import SideBar from './components/SideBar';
import requests from "./requests";

function App() {
  // select recent, featured, best for feeds
  const [selectedCategory, setSelectedCategory] = useState(requests.fetchHot); 
  const[selectedFeed, setSelectedFeed] = useState(false);

  useEffect(() => { 
    // console.log(selectedCategory)
    // console.log('selectedFeed ' + selectedFeed)
  }, [] )

  return (
    <div className= 'app'>
        
        <SideBar selectedCategory={selectedCategory} setSelectedCategory = {setSelectedCategory} setSelectedFeed={setSelectedFeed} />

        <Feed selectedCategory = {selectedCategory} selectedFeed = {selectedFeed} setSelectedFeed = {setSelectedFeed}/>

    </div>
  );
}

export default App;
