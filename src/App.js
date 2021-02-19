import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character.js';
import styled from 'styled-components'
import './Fonts.css'

const Title = styled.h1`
  -webkit-text-stroke: .5px yellow;
  font-family: 'Poller One', cursive;
  font-family: 'Righteous', cursive;
  font-size: 75px;

  `

const App = () => {
 const [data, setData] = useState([])
 useEffect(() => {
   axios.get('https://swapi.dev/api/people')
   .then((res) => {
     setData(res.data)
   })
   .catch()
 },[])

  return (
    <div className="App">
      <Title className="Header">Characters</Title>
      {data.map(element => Character({'data':element}))}
    </div>
  );
}

export default App;
