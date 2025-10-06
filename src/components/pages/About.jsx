import React from "react";
import Container from "../Container";
import CommonPages from "../CommonPages";
import Image from "../Image";
import Office from "/src/assets/office.jpeg"

const About = () => {
  return (
    <>
      <Container>
        <CommonPages title={"About"} description={"Home > About"} />
        <div className="max-w-[1320px] mx-auto px-5 py-20">
          <h2 className="text-4xl font-semibold mb-5">Who We Are</h2>
          <p className="text-gray-600 leading-7 mb-10">
            Welcome to <span className="font-medium text-gray-800">OREBI</span>{" "}
            — your one-stop online shop for high-quality fashion, accessories,
            and lifestyle products. Our mission is simple: to bring you the
            latest trends and timeless classics at affordable prices.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Image imgSrc={Office} className={"rounded-2xl shadow-lg"}/>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Our Story</h3>
              <p className="text-gray-600 leading-7 mb-5">
                Founded in 2020, OREBI started as a small fashion boutique and
                has since grown into a trusted eCommerce brand. Our team is
                passionate about creating an enjoyable shopping experience for
                everyone.
              </p>
              <p className="text-gray-600 leading-7">
                We believe fashion should be accessible to all, and that’s why
                we focus on quality, sustainability, and customer satisfaction
                above all else.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-3">What We Offer</h3>
            <ul className="list-disc list-inside text-gray-600 leading-7 space-y-2">
              <li>Trendy fashion apparel for men and women</li>
              <li>High-quality materials with sustainable sourcing</li>
              <li>Fast and reliable worldwide shipping</li>
              <li>Friendly customer service and easy returns</li>
            </ul>
          </div>

          <div className="mt-16 bg-gray-50 rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-7 max-w-[700px] mx-auto">
              At OREBI, we’re redefining online shopping with a focus on
              innovation, inclusivity, and trust. Our goal is to inspire
              confidence and bring style to your everyday life.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
