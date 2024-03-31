import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const nagivate = useNavigate();

  const clickHandler = () => {
    nagivate("/about");
  };

  return (
    <div>
      <h1>Contact us</h1>
      <button
        className=" duration rounded-lg border bg-blue-400 p-2 font-semibold text-white transition-all duration-200 hover:bg-blue-500"
        onClick={clickHandler}
      >
        click here to go to above page
      </button>
    </div>
  );
};

export default Contact;
