import React, { useState } from 'react';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/profile.png';
import gptImgLogo from './assets/chatgptLogo.svg';

import './App.css';


function App() {
  const [input, setInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]); // State to store chat history

  const handleSend = async () => {
    try {
      const res = await fetch('http://localhost:3001/generate-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      if (res.ok) {
        const data = await res.json();
        setChatMessages([...chatMessages, { user: input, bot: data.text }]); // Update chat history
        setInput(''); // Clear the input field
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error(error);
      // Handle error, e.g., display an error message to the user 
    }
  }
    

  return (
    <div className ="App">
      <div className ="sideBar">
        <div className ="upperSide">
          <div className ="upperSideTop">
            <img src= { gptLogo } alt="logo" className="logo" /><span className="brand">ChatGPT</span>
            <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
            <div className="upperSideBottom">
              <button className="query"><img src={msgIcon} alt="Query" />What is React ?</button>
              <button className="query"><img src={msgIcon} alt="Query" />How to use an API ?</button>
              </div>
            </div>
        </div>
        <div className="lowerSide">
            <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
            <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
            <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg" />Upgrade to Pro</div>

        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className= "chatImg" src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, beatae.</p>
          </div>
          <div className="chat bot">
            <img className= "chatImg" src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo reprehenderit ad ea dicta dolor sed ipsum rerum, sit beatae ex atque culpa illum nam porro voluptatibus veniam modi voluptate vitae alias? Architecto quisquam aliquid iusto obcaecati exercitationem. Molestiae aspernatur delectus amet dolorum reiciendis dolorem minus totam, cumque aut quisquam officia asperiores natus cum odio placeat accusantium tempore! Aut quod earum exercitationem ea sit obcaecati repellat sint voluptates impedit doloremque incidunt soluta consectetur officiis perferendis esse explicabo laudantium, dicta, neque cum error pariatur, voluptate possimus molestiae? Qui veniam delectus possimus, eligendi fugiat corporis ipsum. Laborum corporis voluptatem ullam earum nulla rerum!.</p>
          </div>

        </div>
        <div className="chatFooter">
          <div className= "inp">
            <input type = "text" placeholder='Send a message' value={input} onChange = {(e)=>{setInput(e.target.value)}}/><button className="send" onClick={ handleSend }><img src={sendBtn} alt="Send" /></button>
          </div>
          <p>ChatGPT may produce inaccurate information about
              people, places, or facts.</p>
        </div>
    
      </div>
    </div>
   
  );
}

export default App;
