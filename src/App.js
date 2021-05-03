import React, {useState, useEffect} from 'react';
import uuid from 'react-uuid';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled, {createGlobalStyle} from 'styled-components';
// import bg_img from './images/sw-bg.jpg';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
  const [activeChar, setActiveChar] = useState(null);
  useEffect(()=>{
    async function getChars(){
      const response = await axios.get('https://swapi.dev/api/people');
      setCharacters(response.data);
      console.log(response.data);
    }
    getChars();
  },[]);
  return (
    <div className="App">
      <GlobalStyle />
      <h1 className="Header">Characters</h1>
      <CharsContainer>
        {
          characters.map((character)=><Character key={uuid()} attr={character} isUp={activeChar===character.name} setActiveChar={setActiveChar}/>)
        }
      </CharsContainer>
    </div>
  );
}

export default App;
const CharsContainer = styled.div`
  display:flex;
  flex-direction:column;
  border-radius:10px;
  background:rgba(0,0,0,0.5);
  padding:0.5%;
  width:50%;
  margin:auto;
`;
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Zen Dots', cursive;
  }
`;
  


