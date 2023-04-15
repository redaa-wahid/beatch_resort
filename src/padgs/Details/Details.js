import './Details.scss';
import {useParams} from 'react-router-dom';
import React, {useContext} from 'react';
import {productContext} from '../../App';
import {Banner} from '../../components/Banner/Banner';

export const Details = () => {
    const params = useParams();

    const prod = useContext(productContext);

  return (

    <>
   
    <div className="featured ">

    { prod.map(item=>{
      return(
     
        params.roomsId == item.id ?
      <div key={item.id}  className="detail ">
      
      <Banner 
        title={item.name}
        p={`"${item.name} starting at $${item.price}"`}
        button="our rooms"
        />

      <img src={`../../${item.imgurl}`} alt={item.name} className="w-100 mb-5"/>

     <div className="container">
     <img src={`../../${item.imgsroom.map(p=> p.url)}`} alt={item.name} className="w-25 m-2"/>
     <img src={`../../${item.imgurl}`} alt={item.name} className="w-25 "/>
     
    
    
     <div className="room   d-flex row m-0">
     <div className="room d-flex row p-0">
     <div className="room-detail col col-xl-6 col-sm-12">
         <h2>Details</h2>
         <p>{item.desc}</p>
     </div>
     <div className="room-info col col-xl-6 col-sm-12">
         <h2>Info</h2>
         <p>price : ${item.price}</p>
         <p>size : ${item.size}</p>
         <p>max capacity : ${item.capacity}</p>
     </div>
     </div>
     </div>
     </div>
      
      </div>: console.log(params.roomsId)
    )
      
     })}
    </div>

    </>
  )
}