import './Room.css';
import React from 'react';
import {useParams} from "react-router-dom"
import Rooms from './Rooms.js'

function Room() {
    let roomid = useParams().roomid
   return (
    <div className='RoomPage'>
      {Rooms.map((r) =>{
        if(r.id === roomid){
            return(
                <div className='room' key={r.id}>
                    <div className='heroimg'>
                        <img src={r.imgs[0]} alt=''/>
                        <h1 className='title'>{r.name}</h1>
                    </div>
                    <div className='info'>
                        <span>{r.info.size}</span>
                        <span>{r.info.capacity}</span>
                        <span>{r.info.bed}</span>
                    </div>
                    <h1>HOME AWAY FROM HOME...</h1>
                    <h2>Gallery</h2>
                    <div className='gallery'>
                        <img src={r.imgs[1]} alt=''/>
                        <img src={r.imgs[2]} alt=''/>
                        <img src={r.imgs[3]} alt=''/>
                    </div>
                </div>
            )
        }
        else return null
      })}
    </div>
  );
}

export default Room;