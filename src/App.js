import React from 'react';
import guitar from './acoustic_guitar.jpg'
import './App.css';
import Counter from './Counter';
import ImageFrame from './ImageFrame'

function App() {
  return (
    <div>
      <ImageFrame picture={guitar}/>
    </div>
  );
}

export default App;
