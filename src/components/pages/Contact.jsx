import React from "react";
import Container from "../Container";
import CommonPages from "../CommonPages";

const Contact = () => {
  return (
    <div>
      <Container>
        <CommonPages title={"Contacts"} description={"Home  >  Contacts"} />
        <div className="py-10">
          <div className="mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Fill up a Form
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block font-semibold text-sm mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name here"
                  className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                />
              </div>
              <div>
                <label className="block font-semibold text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email here"
                  className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                />
              </div>
              <div>
                <label className="block font-semibold text-sm mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Your message here"
                  rows="4"
                  className="w-full border-b border-gray-300 focus:border-black outline-none py-2 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-8 py-2 bg-black text-white font-medium hover:bg-gray-800 transition"
              >
                Post
              </button>
            </form>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/3 h-[400px]">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8874131523945!2d90.37439047437646!3d23.750857788705144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf537a2e3f27%3A0x402b3b0b249bf6b0!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1697087328424!5m2!1sen!2sbd"
                className="w-full h-full rounded-lg border-none"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
