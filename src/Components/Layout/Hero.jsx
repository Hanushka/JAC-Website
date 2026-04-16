import React from "react";

const Hero = () => {
  return (
    <section className="bg-white px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-40">

      {/* Left side */}
      <div className="space-y-6 pt-4">
        <h4 className="text-base font-semibold text-[#6366f1]">
          JUST A CHANCE
        </h4>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#6366f1]">
          We aim to empower <br />
          <span className="text-black">100,000</span> people <br />
          across Africa
        </h1>
        <p className="text-[#4a4a4a]  leading-relaxed font-medium text-2xl">
          JAC looks for candidates who are often overlooked in the industry,
          wanting to be the lucky break for those who never thought success was
          possible. [Pipeline Test: Images Fixed with Public Path]
        </p>
        <button className="bg-[#6366f1] text-white px-6 py-3 rounded-md text-lg font-semibold transition-transform duration-300 hover:scale-105">
          Apply Now
        </button>
      </div>

      {/* Right side */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">

        {/* image */}
        <div className="flex-1">
          <img
            src="/images/hero1.png"
            alt="Main"
            className="w-full h-110 object-cover rounded-2xl"
          />
        </div>

        {/* cards */}
        <div className="flex flex-col justify-between gap-5 md:mr-5 mt-6 md:mt-0">

          {/* top card */}
          <div>
            <img
              src="/images/hero2.jpg"
              alt="Card"
              className="w-full h-56 md:w-50 md:h-45 object-cover rounded-xl"
            />
          </div>

          {/* bottom card */}
          <div className="w-full h-56 md:w-50 bg-[#6366f1] text-[#faf9fe] p-6 rounded-xl">
            <h1 className="text-3xl font-bold">100k +</h1>
            <p className="text-base mt-2 leading-relaxed">
              Sometimes, all you need for that breakthrough is just a chance ~
              Jeremiah Olamijuwon, 2022
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
