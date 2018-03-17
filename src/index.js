
 import React from 'react';
 import ReactDOM from 'react-dom';
 require('./index.scss');



const Intro = () => {
    return (
    <div id = 'header'>
    
    <h1>HACKERNOON</h1>
    <p>How hackers start their afternoons</p>
   
   
    <ul>
       <li>AI</li>
       <li>BLOCKCHAIN</li>
       <li>VC</li>
       <li>SWSC HACKATHON</li>
           </ul>
    </div>
    )
   }


ReactDOM.render(
    
 <Intro />,
 document.getElementById('header')
);