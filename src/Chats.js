import React from 'react'
import Header from './Header'
import './Chats.css';
import Chat from './Chat';

function Chats() {
  return (
    <div className='chats'>
        <Header backbtn="<"/>
        <Chat
          name="Sonali"
          message="whass up!"
          timestamp="40 seconds ago"
          profilePic="https://dazzlerr.s3.ap-south-1.amazonaws.com/18478/9B979C7D-D543-46C6-B8B1-D4B1738D59BC_thumb.jpg"
        />
        <Chat
          name="Sarah"
          message="hey! how are you?"
          timestamp="35 minutes ago"
          profilePic="https://www.dazzlerr.com/API/assets/images/22975/profile/small/2691B2B9-418A-79E3-EE03-280961A750B5_thumb.jpg"
        />
        <Chat
          name="Jiya"
          message="ola!"
          timestamp="4 hours ago"
          profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRGNu7b_-KTfa33h8ONWJ1WQ1sn6zDIj_iqgrlz7t3KIQEgSQWuq4Dfg0U5LJgJ5WUw8&usqp=CAU"
        />
        <Chat
          name="Amber"
          message="Knock knock!!!"
          timestamp="3 days ago"
          profilePic="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1663331903.jpg"
        />

    </div>
  )
}

export default Chats