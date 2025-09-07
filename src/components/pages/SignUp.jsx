import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../Container";
import CommonPages from "../CommonPages";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import Button from "../Button";

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
        <div className="border-b-2 border-[#F0F0F0]">
          <Paragraph className={"w-[644px] text-[#767676]  pb-[62px]"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </Paragraph>
        </div>
        <div className=" border-b-2 border-[#F0F0F0] ">
          <Heading
            text={"Your Personal Details"}
            tagName={"h3"}
            className={"text-[#262626] text-[36px] font-bold pt-[57px]"}
          />
          <div className="flex justify-between ">
            <div className="w-[48%]">
              <label htmlFor="" className="block font-semibold">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="border-b-2 border-[#F0F0F0] w-[500px] py-3 outline-0"
              />
            </div>
            <div className="w-[48%]">
              <label htmlFor="" className="block font-semibold">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="border-b-2 border-[#F0F0F0] w-[500px] py-3 outline-0"
              />
            </div>
          </div>
          <div className="flex justify-between mb-[69px] mt-5">
            <div className="w-[48%]">
              <label htmlFor="" className="block font-semibold">
                Email address
              </label>
              <input
                type="email"
                placeholder="company@domain.com"
                className="border-b-2 border-[#F0F0F0] w-[500px] py-3 outline-0"
              />
            </div>
            <div className="w-[48%]">
              <label htmlFor="" className="block font-semibold">
                Telephone
              </label>
              <input
                type="text"
                placeholder="Your phone number"
                className="border-b-2 border-[#F0F0F0] w-[500px] py-3 outline-0"
              />
            </div>
          </div>
        </div>
        <div className="">
          <Heading
            text={"New Customer"}
            tagName={"h3"}
            className={"text-[#262626] text-[36px] font-bold pt-[57px]"}
          />
          <div className="flex justify-between ">
            <div className="w-[48%]">
              <label htmlFor="" className="block font-semibold">
                Address 1
              </label>
              <input
                type="text"
                placeholder="4279 Zboncak Port Suite 6212"
                className="border-b-2 border-[#F0F0F0] w-[500px] py-3 outline-0"
              />
            </div>
            <div className="w-[48%]">
              <label htmlFor="" className="block font-semibold">
                Address 2
              </label>
              <input
                type="text"
                placeholder="4279 Zboncak Port Suite 6212"
                className="border-b-2 border-[#F0F0F0] w-[500px] py-3 outline-0"
              />
            </div>
          </div>
          
        </div>
        <div className="py-8">
          <div>
            <label className="block mb-2 font-semibold">Select Division</label>
            <select
              value={selectedDivision}
              onChange={(e) => {
                setSelectedDivision(e.target.value);
                setSelectedDistrict("");
              }}
              className="w-full border rounded p-2"
            >
              <option value="">Select Division</option>
              {allDivisionData.map((div) => (
                <option key={div.id} value={div.id}>
                  {div.name}
                </option>
              ))}
            </select>
          </div>

          {selectedDivision && (
            <div>
              <label className="block mb-2 font-semibold">
                Select District
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full border rounded p-2"
              >
                <option value="">Select District</option>
                {filteredDistricts.map((dist) => (
                  <option key={dist.id} value={dist.id}>
                    {dist.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
         <div className="mb-10">
          <Heading
            text={"Your Password"}
            tagName={"h3"}
            className={"text-[#262626] text-[36px] font-bold pt-[57px]"}
          />
          <div className="flex justify-between ">
            <div className="w-[48%]">
              <label htmlFor="" className="block font-semibold">
                Password
              </label>
              <input
                type="text"
                placeholder="Password"
                className="border-b-2 border-[#F0F0F0] w-[500px] py-3 outline-0"
              />
            </div>
            <div className="w-[48%]">
              <label htmlFor="" className="block font-semibold">
                Repeat Password
              </label>
              <input
                type="text"
                placeholder="Repeat Password"
                className="border-b-2 border-[#F0F0F0] w-[500px] py-3 outline-0"
              />
            </div>
          </div>
          
        </div>
        <div className="">
          <div className="">
            <input type="checkbox" name="" id=""  className="text-[14px]"/>
          <label htmlFor="" className="text-[#767676] text-[14px] ml-2">I have read and agree to the Privacy Policy</label>
          </div>
          <div className="mb-[37px]">
            <label htmlFor="" className="text-[#767676] text-[14px]">Subscribe Newsletter</label>
            <input type="checkbox" name="" id=""  className="text-[14px] ml-3"/>
            <label htmlFor="" className="text-[#767676] text-[14px] ml-2">Yes</label>
            <input type="checkbox" name="" id=""  className="text-[14px] ml-3"/>
            <label htmlFor="" className="text-[#767676] text-[14px] ml-2">No</label>
            <Button className={"bg-black text-white block my-3"}>Log in</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
