import React from 'react';
import './Rooms.scss';
import {Banner} from '../../components/Banner/Banner';


export const Rooms = (props) => {

//console.log(props.data.map(p=>p.price));
  return (
    <>
    <div className="rooms">
    <Banner 
    title="our rooms"
    p="choose the comfortable room for you"
    button="return home"
    />
    
    </div>

   <div className="search text-center m-0">
   <h1>search rooms</h1>
    <div className='search-rooms w-100'>
     room type
     <br/>
    <select  value={props.data} onChange={props.handlechange}>
       <option value="all">all</option>
       <option value="single">single</option>
       <option value="double">double</option>
       <option value="family">family</option>
    </select>
    </div>

</div> 
   
  
    </>
  )
}
