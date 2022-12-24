import React from 'react'
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Header({backbtn}) {
  const navigate=useNavigate();
  return (
    <div className='header'>
        {backbtn ? (
            <IconButton onClick={()=> navigate(-1)}>
            <ArrowBackIosNewIcon fontSize='large' className='header_icon'/>
            </IconButton>
        ):(
          <IconButton>
          <PersonIcon fontSize='large' className='header_icon'/>
          </IconButton>
        )}
        <Link to='/tinder_clone'>
          <img
          className='header_logo' 
          src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-Logo-2012.png'
          alt=''
          />
        </Link>
        <Link to='/tinder_clone/chat'>
          <IconButton>
              <ForumIcon fontSize='large' className='header_icon'/>
          </IconButton>
        </Link>
    </div>
  )
}

export default Header