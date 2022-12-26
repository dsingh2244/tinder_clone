import React, { useState } from 'react'
import './ChatScreen.css';
import Avatar from '@mui/material/Avatar';
import Header from './Header'

function ChatScreen() {
  const [input,setInput]=useState('');
  const [messages,setMessages] = useState([
    {
        name:'Sonali',
        image:'https://dazzlerr.s3.ap-south-1.amazonaws.com/18478/9B979C7D-D543-46C6-B8B1-D4B1738D59BC_thumb.jpg',
        message: 'whass up!'
    },
    {
        name:'Sarah',
        image:'https://www.dazzlerr.com/API/assets/images/22975/profile/small/2691B2B9-418A-79E3-EE03-280961A750B5_thumb.jpg',
        message: 'hey! how are you?'
    },
    {
        name:'Jiya',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRGNu7b_-KTfa33h8ONWJ1WQ1sn6zDIj_iqgrlz7t3KIQEgSQWuq4Dfg0U5LJgJ5WUw8&usqp=CAU',
        message: 'ola!'
    },
    {
        message: 'Knock knock!!!'
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages,{message:input}]);
    setInput('');
  };
  return (
    <div className='chatScreen'>
        <Header backbtn='/chat'/>
        <p className='chatscrn_timestamp'>YOU MATCHED WITH Sonali ON 24/12/2022</p>
        {messages.map((message) => (
            message.name ? (
                <div className='chatScreen_message'>
                    <Avatar
                        className='chat_scrnimg'
                        src={message.image}
                    />
                    <p className='chat_scrntxt'>{message.message}</p>
                </div>
            ):(
                <div className='chatScreen_message'>
                    <p className='chat_scrntxtusr'>{message.message}</p>
                </div>
            )
        ))}
        <form className='chatscrn_inp'>
            <input 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className='chatscrn_inpfld'
            placeholder='Type a message....'
            type='text'/>
            <button onClick={handleSend} type='sumbit' className='chatscrn_inpbtn'>SEND</button>
        </form>
    </div>
  )
}

export default ChatScreen