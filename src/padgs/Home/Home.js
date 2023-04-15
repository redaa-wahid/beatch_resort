import React from 'react';
import './Home.scss';
import {Banner} from '../../components/Banner/Banner';
import {Services} from '../../components/Services/Services';
import {Featured} from '../../components/Featured/Featured'

export function Home() {
  
  return (
    <>
    <div className="home ">
     
        <Banner 
        title="luxurious rooms"
        p="deluxe rooms starting at $299"
        button="our rooms"
        />
        </div>
    <Services/>
  <Featured/>

    </>
  )
}

