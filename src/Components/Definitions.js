import "./Definitions.css";
import {BsEmojiSmile} from "react-icons/bs"
import React from "react";
const Definitions=({word,meaning})=>
{
    
    return(
        <div className="definitions">
           
           
            {word === "" ? <div id="empty">Type a word <BsEmojiSmile /> ! </div>: 
                
                (meaning.map((mean) =>
                    mean.meanings.map((item)=>
                    item.definitions.map((x)=>
                    (
                        <div id="display">
                        <div id="displayMeaning">{x.definition}</div>
                        {x.example && (<div style={{display:"flex"}} ><span style={{marginLeft:"10px",marginRight:"5px",fontWeight:"bold", color:"gray",fontSize:"18px"}}>Example: </span><div id="displayExample">{x.example}</div></div>)} 
                        </div>
                        
                    )),
                    )
                
                )) 
                 }
        </div>
    )

}

export default Definitions;