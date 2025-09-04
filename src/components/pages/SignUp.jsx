import React from 'react';
import {useState,useEffect} from "react";
import axios from 'axios';
import Container from '../Container';

const SignUp = () => {
    let [allData,setAllData]=useState([]);
    
    useEffect(() => {
      
       async function viewData(){

        let data=await axios.get("https://thealamindev.github.io/bdlocalarea/index.json");
        setAllData(data.data);
      
       
        

        }
        viewData();

    }, []);
    
  return (
    <>
      <div className="">
        <Container>
            <div className="">
        {
            allData.map((item)=>(
                <div className="" key={item.id}>
                    <h3>{item.id}</h3>
                    <h3>{item.name}</h3>
                    <h3>{item.bn_name}</h3>
                    
                    
                </div>
            ))
        }
      </div>
        </Container>
      </div>
    </>
  )
}

export default SignUp
