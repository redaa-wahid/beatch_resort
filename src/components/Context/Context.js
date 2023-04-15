import React, {useState,useContext,createContext} from 'react';
import './Context.scss';
import {productContext} from '../../App';
import {Rooms} from '../../padgs/Rooms/Rooms';
import {FeatureRooms} from '../FeatureRooms/FeatureRooms';




export const Context = () => {
    const prod = useContext(productContext);

  
    const [selectFilter,setselectFilter]= useState(prod);
    const [ssize, setsize] = useState("");

   console.log(selectFilter);


    const handlechange=(e) => {
  
      setsize(e.target.value);
  
  if (e.target.value == "all") {
    setselectFilter(prod);
  }else{
     let productdata = prod;
     let selectFilter = [...productdata];
     let newproducts = selectFilter.filter(product => product.name.indexOf(e.target.value) != -1);
     setselectFilter(newproducts);
  }


  }


  return (
    <>
   
    <Rooms data={ssize} handlechange={handlechange}/>
    <div className="container">
    <FeatureRooms data={selectFilter}/>
    </div>

    </>
  )
}


