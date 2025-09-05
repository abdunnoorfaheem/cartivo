import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "../Container";
import CommonPages from "../CommonPages";

const SignUp = () => {
  let [allDivisionData, setAllDivisionData] = useState([]);
  let [allDistrictData,setAllDistrictData]=useState([]);

  useEffect(() => {
    async function viewData() {
      let data = await axios.get(
        "https://raw.githubusercontent.com/ifahimreza/bangladesh-geojson/master/bd-divisions.json"
      );
      setAllDivisionData(data.data.divisions);

      let districtData=await axios.get("https://raw.githubusercontent.com/ifahimreza/bangladesh-geojson/master/bd-districts.json");
      setAllDistrictData(districtData.data.districts);
      
    }
    viewData();
  }, []);

  return (
    <>
      <div className="">
        <Container>
          <CommonPages title={"Sign up"} description={"Home  >  Sign up"} />
          <div className="">
            {allDivisionData.map((item) => (
              <div className="py-5" key={item.id}>
               
               
               <h1>{item.name}</h1>
              </div>
            ))}
          </div>
          <div className="">
            {
              allDistrictData.map((item)=>(
                <div className="">
                  <h3>{item.id}</h3>
                  <h3>{item.name}</h3>
                </div>
              ))
            }
          </div>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
