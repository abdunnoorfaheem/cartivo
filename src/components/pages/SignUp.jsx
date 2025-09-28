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
      try {
        let divisionRes = await axios.get(
          "https://raw.githubusercontent.com/ifahimreza/bangladesh-geojson/master/bd-divisions.json"
        );
        setAllDivisionData(divisionRes.data.divisions);

        let districtRes = await axios.get(
          "https://raw.githubusercontent.com/ifahimreza/bangladesh-geojson/master/bd-districts.json"
        );
        setAllDistrictData(districtRes.data.districts);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    }
    viewData();
  }, []);

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
          <Paragraph className={"max-w-2xl text-[#767676] pb-10 md:pb-[62px]"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </Paragraph>
        </div>

        <div className="border-b-2 border-[#F0F0F0] ">
          <Heading
            text={"Your Personal Details"}
            tagName={"h3"}
            className={
              "text-[#262626] text-[36px] font-bold pt-10 md:pt-[57px]"
            }
          />

          <div className="flex flex-wrap -mx-2 md:-mx-5 mt-5">
            {/* Input field wrapper. p-2 for mobile, p-5 for desktop, w-full for mobile, md:w-1/2 for desktop */}
            <div className="w-full md:w-1/2 px-2 md:px-5 mb-5">
              <label htmlFor="firstName" className="block font-semibold">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                className="border-b-2 border-[#F0F0F0] w-full py-3 outline-0"
              />
            </div>

            <div className="w-full md:w-1/2 px-2 md:px-5 mb-5">
              <label htmlFor="lastName" className="block font-semibold">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="border-b-2 border-[#F0F0F0] w-full py-3 outline-0"
              />
            </div>

            <div className="w-full md:w-1/2 px-2 md:px-5 mb-5">
              <label htmlFor="email" className="block font-semibold">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="company@domain.com"
                className="border-b-2 border-[#F0F0F0] w-full py-3 outline-0"
              />
            </div>

            <div className="w-full md:w-1/2 px-2 md:px-5 mb-5">
              <label htmlFor="telephone" className="block font-semibold">
                Telephone
              </label>
              <input
                id="telephone"
                type="text"
                placeholder="Your phone number"
                className="border-b-2 border-[#F0F0F0] w-full py-3 outline-0"
              />
            </div>
          </div>

          <div className="mb-10 md:mb-[69px]"></div>
        </div>

        <div className="">
          <Heading
            text={"New Customer"}
            tagName={"h3"}
            className={
              "text-[#262626] text-[36px] font-bold pt-10 md:pt-[57px]"
            }
          />

          <div className="flex flex-wrap -mx-2 md:-mx-5 mt-5">
            <div className="w-full md:w-1/2 px-2 md:px-5 mb-5">
              <label htmlFor="address1" className="block font-semibold">
                Address 1
              </label>
              <input
                id="address1"
                type="text"
                placeholder="4279 Zboncak Port Suite 6212"
                className="border-b-2 border-[#F0F0F0] w-full py-3 outline-0"
              />
            </div>

            <div className="w-full md:w-1/2 px-2 md:px-5 mb-5">
              <label htmlFor="address2" className="block font-semibold">
                Address 2
              </label>
              <input
                id="address2"
                type="text"
                placeholder="4279 Zboncak Port Suite 6212"
                className="border-b-2 border-[#F0F0F0] w-full py-3 outline-0"
              />
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-wrap -mx-2 md:-mx-5">
          <div className="w-full md:w-1/2 px-2 md:px-5 mb-5">
            <label
              htmlFor="selectDivision"
              className="block mb-2 font-semibold"
            >
              Select Division
            </label>
            <select
              id="selectDivision"
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
            <div className="w-full md:w-1/2 px-2 md:px-5 mb-5">
              <label
                htmlFor="selectDistrict"
                className="block mb-2 font-semibold"
              >
                Select District
              </label>
              <select
                id="selectDistrict"
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
            className={
              "text-[#262626] text-[36px] font-bold pt-10 md:pt-[57px]"
            }
          />

          <div className="flex flex-wrap -mx-2 md:-mx-5 mt-5">
            <div className="w-full md:w-1/2 px-2 md:px-5 mb-5">
              <label htmlFor="password" className="block font-semibold">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="border-b-2 border-[#F0F0F0] w-full py-3 outline-0"
              />
            </div>

            <div className="w-full md:w-1/2 px-2 md:px-5 mb-5">
              <label htmlFor="repeatPassword" className="block font-semibold">
                Repeat Password
              </label>
              <input
                id="repeatPassword"
                type="password"
                placeholder="Repeat Password"
                className="border-b-2 border-[#F0F0F0] w-full py-3 outline-0"
              />
            </div>
          </div>
        </div>

        <div className="pb-10">
          <div className="mb-4">
            <input
              type="checkbox"
              name="privacyPolicy"
              id="privacyPolicy"
              className="text-[14px]"
            />
            <label
              htmlFor="privacyPolicy"
              className="text-[#767676] text-[14px] ml-2 select-none cursor-pointer"
            >
              I have read and agree to the **Privacy Policy**
            </label>
          </div>
          <div className="mb-8 md:mb-[37px]">
            <span className="text-[#767676] text-[14px] mr-3">
              Subscribe Newsletter:
            </span>

            <input
              type="radio"
              name="newsletter"
              id="newsletterYes"
              value="yes"
              className="text-[14px] ml-3"
            />
            <label
              htmlFor="newsletterYes"
              className="text-[#767676] text-[14px] ml-2 select-none cursor-pointer"
            >
              Yes
            </label>

            <input
              type="radio"
              name="newsletter"
              id="newsletterNo"
              value="no"
              className="text-[14px] ml-3"
            />
            <label
              htmlFor="newsletterNo"
              className="text-[#767676] text-[14px] ml-2 select-none cursor-pointer"
            >
              No
            </label>

            <Button className={"bg-black text-white block my-5 md:my-3"}>
              Sign up
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
