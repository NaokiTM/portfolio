import React from "react";

const Contact = () => {
  return (
    <div className="relative font-sans text-black">
      <div className="flex justify-center p-4 text-2xl font-bold">
        Contact Me
      </div>

      <div className="grid w-[100%] items-center gap-3 p-5 pl-[25%]">
        <input
          className="w-[70%] rounded-md border-2 border-black bg-white p-3 text-black placeholder-black"
          type="text"
          placeholder="Name:"
        />
        <input
          className="w-[70%] rounded-md border-2 border-black bg-white p-3 text-black placeholder-black"
          type="email"
          placeholder="Email:"
        />
        <input
          className="w-[70%] rounded-md border-2 border-black bg-white p-3 text-black placeholder-black"
          type="text"
          placeholder="Message:"
        />
      </div>
      <div className="flex justify-center">
        <button
          formAction=""
          className="my-6 ml-4 w-[200px] rounded-3xl border-2 bg-[#FF0000] px-6 py-3 text-black"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
