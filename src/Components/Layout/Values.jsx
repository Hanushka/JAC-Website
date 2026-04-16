import React from "react";

const Values = () => {
  return (
    <section className="bg-white px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      {/* Left */}
      <div className="space-y-6 text-left mb-12">
        <h3 className="inline-block bg-[#d1d5db] rounded-xl text-[#6366f1] px-4 py-2 text-sm font-semibold mt-5">
          Core values and principles
        </h3>

        <h1 className="text-3xl md:text-5xl font-bold text-[#333333] leading-tight whitespace-nowrap">
          Our values define <br /> our actions and beliefs
        </h1>

        <p className="text-[#666666] text-sm md:text-base leading-relaxed max-w-3xl">
          The JAC (Just A Chance) program is guided by a set of core values and
          principles that shape its mission and vision. These values and
          principles include empowerment, transformation, inclusivity, and equal
          opportunity. Here are the core values and principles that guide the
          JAC program.
        </p>

        <button className="bg-[#5a43f1] text-white px-6 py-3 rounded-md text-lg font-semibold transition-transform duration-300 hover:scale-105">
          Read More
        </button>
      </div>

      {/* Right - Image */}
      <div className="flex justify-center">
        <img
          src="/images/hero2.jpg"
          alt="About Just A Chance"
          className="w-full h-100 object-cover shadow-md rounded-2xl zoom-once"
        />
      </div>
    </section>
  );
};

export default Values;
