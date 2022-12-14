import React from 'react';
import "./swipeButtons.css";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import {IconButton} from '@mui/material';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton className='swp_rpeat'>
            <ReplayIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swp_left'>
            <CloseIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swp_star'>
            <StarRateIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swp_right'>
            <FavoriteIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swp_lightning'>
            <FlashOnIcon fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons