import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../Container";
import CommonPages from "../CommonPages";

const SignUp = () => {
  let [allDivisionData, setAllDivisionData] = useState([]);
  let [allDistrictData, setAllDistrictData] = useState([]);
  let [selectedDivision, setSelectedDivision] = useState("");
  let [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    async function viewData() {
      let data = await axios.get(
        "https://raw.githubusercontent.com/ifahimreza/bangladesh-geojson/master/bd-divisions.json"
      );
      setAllDivisionData(data.data.divisions);

      let districtData = await axios.get(
        "https://raw.githubusercontent.com/ifahimreza/bangladesh-geojson/master/bd-districts.json"
      );
      setAllDistrictData(districtData.data.districts);
    }
    viewData();
  }, []);

  // নির্বাচিত division অনুযায়ী district filter
  const filteredDistricts = selectedDivision
    ? allDistrictData.filter(
        (district) => district.division_id === selectedDivision
      )
    : [];

  return (
    <div>
      <Container>
        <CommonPages title={"Sign up"} description={"Home  >  Sign up"} />
        <div className="">
          
          </div>   
        <div className="max-w-md mx-auto mt-8 space-y-6">
          {/* Division Dropdown */}
          <div>
            <label className="block mb-2 font-semibold">Select Division</label>
            <select
              value={selectedDivision}
              onChange={(e) => {
                setSelectedDivision(e.target.value);
                setSelectedDistrict(""); // নতুন division select করলে district reset হবে
              }}
              className="w-full border rounded p-2"
            >
              <option value="">-- Select Division --</option>
              {allDivisionData.map((div) => (
                <option key={div.id} value={div.id}>
                  {div.name}
                </option>
              ))}
            </select>
          </div>

          {/* District Dropdown */}
          {selectedDivision && (
            <div>
              <label className="block mb-2 font-semibold">Select District</label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full border rounded p-2"
              >
                <option value="">-- Select District --</option>
                {filteredDistricts.map((dist) => (
                  <option key={dist.id} value={dist.id}>
                    {dist.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
