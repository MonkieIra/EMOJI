import './App.css';
import Header from './conponents/header/header';
import {data} from "./data/emoji.js"
import { useState } from 'react';
import CardList from './conponents/cardList/cardList';





function App() {
  
  const [filteredEmoji, setFilteredEmoji] = useState(data);
  
  return (
    <div className="App">
      <Header filteredEmoji={filteredEmoji} setFilteredEmoji={setFilteredEmoji} data={data}/>
      <main>
        <CardList data={filteredEmoji}/>
      </main>
      
    </div>
  );
}

export default App;
