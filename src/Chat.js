import React from 'react';
import Avatar from '@mui/material/Avatar';
import './Chat.css';
import { Link } from 'react-router-dom';

function Chat({name,message,profilePic,timestamp}) {
  return (
    <Link to={`${name}`}>
      <div className='chat'>
      <Avatar className='chat_img' src={profilePic}></Avatar>
        <div className='chat_details'>
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className='chat_timestamp'>{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat