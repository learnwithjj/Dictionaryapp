import React from "react";
import "./Middle.css"
const Middle=({word,meaning})=>
{
    const AudioCheck=()=>
    {
        return(<div>
            {meaning[0] && word && (<audio src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio} id="audio" controls></audio>) }
            </div>
        )
    }
    React.useEffect(()=>
    {
        <AudioCheck/>
    },[word])
    const Showpartofspeech =()=>
    {
        return (
            <div id="showpartofspeech">
                {meaning[0] && word && (<div>{meaning[0].meanings[0].partOfSpeech}: <span style={{color:"violet"}}>{word}</span></div>
                ) }
            </div>
        );
    }
    React.useEffect(()=>
    {
        <Showpartofspeech/>
    },[word])
    const Showphonetic=()=>
    {
        return (
            <div id="showphonetic">
                {meaning[0] && word && (<div>{meaning[0].phonetic}  </div>) }
            </div>
        );
    }
    React.useEffect(()=>
    {
        <Showphonetic/>
    },[word])
    return(
        <div className="middle">
            
        <AudioCheck/> <Showpartofspeech/>
            <Showphonetic/>
            
        </div>
    )
}
export default Middle;