import axios from 'axios';
import React from 'react';
import './App.css';
import Header from './Components/Header';
import TextField from '@mui/material/TextField';
import { Container} from '@mui/system';
import {debounce} from "lodash";
import Definitions from './Components/Definitions';
import Middle from "./Components/Middle"
import { BsWindowSidebar } from 'react-icons/bs';
import Translate from './Components/Translate';

function App() {

  const [word,setWord]=React.useState("");
  const [meaning,setMeanings]=React.useState([]);
  const dictionaryApi=async() => {
    try{
      const data=await(axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`));
      setMeanings(data.data);
      console.log(meaning);
    }
    
    catch(error)
    {
      console.log(error);
    }
      
  }

 
  React.useEffect(()=>
  {
    dictionaryApi();
    
    console.log(meaning);
  },[word])
   
  const handleText=debounce((text)=>
  {
    setWord(text);
  },[1000]);
  
    
  
    

    
  return (
    <div className="App">
   
      

      <Container maxWidth="md" >
        <Header /> 
         
        <div  style={{marginTop:"30px"}}  >
       <TextField  id="filled-basic" label="Enter here"  variant="standard"  onChange={(e) => handleText(e.target.value)}/>
       <Translate word={word}/>
        <Middle word={word} meaning={meaning}/>
        
        </div> 
          <Definitions word={word}  meaning={meaning}/>
          
          </Container>
    </div>
  );
}

export default App;
