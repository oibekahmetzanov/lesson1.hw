import React, { useState } from 'react';
import './App.css';
import peopleData from './data';
import PersonCard from './components/PersonCard';
import './main.css';
import Home from './components/Home';
import ProductList from './ProductList';
import Card from './Card.css'

function App() {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = size => {
    setSelectedSize(size);
  };

  const filteredPeople = selectedSize
    ? peopleData.filter(person => person.shoeSize === selectedSize)
    : peopleData;

  return (
    <div className="App">
      <Home/>
     <ProductList/>
      <h1>Размер обуви</h1>
      <div className="size-buttons">
        <button onClick={() => handleSizeClick(46)}>46</button>
        <button onClick={() => handleSizeClick(45)}>45</button>
        <button onClick={() => handleSizeClick(44.5)}>44.5</button>
        <button onClick={() => handleSizeClick(44)}>44</button>
        <button onClick={() => handleSizeClick(43)}>43</button>
        <button onClick={() => handleSizeClick(42.5)}>42.5</button>
        <button onClick={() => handleSizeClick(42)}>42</button>
        <button onClick={() => handleSizeClick(41)}>41</button>
        <button onClick={() => handleSizeClick(40)}>40</button>
        <button onClick={() => handleSizeClick(39)}>39</button>
        <button onClick={() => handleSizeClick(null)}>Сбросить</button>
      </div>
      <div className="card-container">
        {filteredPeople.map(person => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}

export default App;

