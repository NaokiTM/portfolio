import React from "react";
import contact from "../assets/contact.jpg"

const Contact = () => {
  return (
    <div className="relative text-black">
      
      <div className="flex justify-center p-4 pt-8 text-2xl font-bold">
        <img className="w-[50vw] items-center justify-center" src = {contact}></img>
      </div>

      <div className="grid w-[100%] items-center gap-3 p-5 pl-[25%]">
        <input
          className="w-[70%] rounded-md border-2 border-white  p-3 text-white placeholder-white bg-black"
          type="text"
          placeholder="Name:"
        />
        <input
          className="w-[70%] rounded-md border-2 border-white p-3 text-white placeholder-white bg-black"
          type="email"
          placeholder="Email:"
        />
        <input
          className="w-[70%] rounded-md border-2 border-white p-3 text-white placeholder-white bg-black"
          type="text"
          placeholder="Message:"
        />
      </div>
      <div className="flex justify-center">
        <button
          formAction=""
          className="mb-4 w-[200px] rounded-md border-2 bg-white px-6 py-3 text-black"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
