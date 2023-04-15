import React from 'react';
import './FeatureRooms.scss';
import {Buttons} from '../Buttons/Buttons';
import {Link} from 'react-router-dom';

export function FeatureRooms(props) {
 

  console.log(props.data);
  return (
    <>
<div className="featured row">

{ props.data.map(item=>{
  return(
   
  <div key={item.id}  className="container card col-xl-3 col-md-6 col-sm-12 mt-5 ">
  <img src={item.imgurl} alt={item.name} className="w-100 h-100"/>
 <h3 className="text-center bg-info text-light"> {item.name}</h3>
  <div className="room">
  ${item.price}
  </div>
  <div className="buttons">
  {<Buttons btn="features"/> && <Link to={`/details/${item.id}`}><Buttons btn="features"/></Link>}
</div>
  </div>
)
  
 })}
</div>

    </>
  )
}

