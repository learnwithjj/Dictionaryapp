import './Translate.css';
import React from 'react';
import axios from 'axios';
const Translate =(word)=>
{
    
    const [detectword,setdetectedword]=React.useState('');
    const [languagelist,setlanguagelist]=React.useState([]);
    const [language,setLanguage]=React.useState('');
    const [text,setText]=React.useState('');
    const [t,setT]=React.useState('');

    
    const DetectLanguage=()=>
    {
               
                axios.post(`https://libretranslate.de/detect`,{
                        q:word['word']
                    })
                    .then((response)=>
                    {
                        setdetectedword(response.data[0].language);
                        
                    }) 

    }
    

    const Translateword=()=>
    {
        DetectLanguage();
        
                axios.post(`https://libretranslate.de/translate`,{
                q:word['word'],
                source:detectword,
                target:language
            })
            .then((response)=>
            {
                setText(response.data.translatedText);
                
            })
           

            return(<div >
                {word['word']===""? (<div id='emptyTranslate'>Translation...</div>):(<div id='showTranslation'>{text}</div>)}
                </div>);
           
        
    }
    const languageselect=(e)=>
    {
        setLanguage(e.target.value);
    }
    
    React.useEffect(()=>
    {
        axios.get(`https://libretranslate.de/languages`)
        .then((response)=>
        {
            setlanguagelist(response.data);
        })
        DetectLanguage();
    },[word])

    React.useEffect(()=>
    {
        <Translateword/>
    },[word])

    return(
        <div className='translate'>
            
           
            <select id='selectLanguage' onChange={languageselect}>
            <option>Select a language ...</option>
           {languagelist.map((language)=>(
            <option value={language.code}>{language.name}</option>
           ))}
            </select>
                <Translateword/>
          
        </div>
    );
}

export default Translate;