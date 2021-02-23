import { useState } from 'react';
import './App.css';
import Feed from './components/Feed';
import SideBar from './components/SideBar';

function App() {

  // select recent, featured, best for feeds
  const [selectedCategory, setSelectedCategory] = useState(); 

  return (
    <div className= 'app'>

        <SideBar setSelectedCategory = {setSelectedCategory}/>

        <Feed selectedCategory = {selectedCategory}/>

    </div>
  );
}

export default App;
