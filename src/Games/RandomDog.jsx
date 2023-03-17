import React from 'react'
import Nav from "../NabBar/Nav"

import { useState, useEffect } from 'react';
import Axios from "axios";


const RandomDog = () =>  {
    const [image, setImage] = useState([]);
    
    const getNewDog = () => {
        Axios.get('https://dog.ceo/api/breeds/image/random').then(res =>{
            setImage(res.data.message)    
        })
    }

    useEffect( ()=> {  
        console.log("photo printed");
    },[])

  return (
    <>
       <Nav />


      
        {/* heading */}
        <div className="container" >
          <h2 style={{color:"orange", marginTop:70}}>Random Dog Picture</h2>
        </div>

        <div>
            <div id='dogImage'><img src={image} alt="" width={500} height={500}/> </div>
            {/* <button onClick = {() => getNewDog()}>Get New Dog</button> */}
            <button type="button" class="btn btn-success" onClick = { () => getNewDog() } style={{marginTop: 20, width: 300, padding:10}}>Get New Dog </button>
        </div>
    </>
  )

}


export default RandomDog;