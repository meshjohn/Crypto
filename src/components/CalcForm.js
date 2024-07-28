import React from "react";

const CalcForm = () => {
  return (
    <div
      className="w-full bg-white max-w-[942px] mx-auto rounded-2xl text-darkblue p-12 shadow-primary"
      data-aos="fade-up"
      data-aos-offset="500"
    >
      {/* form */}
      <form className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-12 lg:space-y-0">
        <input
          type="text"
          className="input placeholder:text-darkblue"
          placeholder="Enter your hash rate"
        />
        <select className="select">
          <option value="">Th/S</option>
          <option value="">H/S</option>
          <option value="">KH/S</option>
          <option value="">MH/S</option>
          <option value="">GH/S</option>
        </select>
        {/* btn */}
        <button className="btn text-white px-8 flex self-start">
          Calculate
        </button>
      </form>
      {/* text */}
      <div className="mt-24">
        <div className="text-blue font-medium mb-4">
          ESTIMATE 24 HOUR REVENUE:
        </div>
        <div className="text-[32px] font-bold mb-3">
          0.055 130 59 ETH <span className="text-blue">($1275)</span>
        </div>
        <div className="text-gray-500 tracking-[1%]">
          Revenue will change based on mining difficulty and Ethereum price.
        </div>
      </div>
    </div>
  );
};

export default CalcForm;
