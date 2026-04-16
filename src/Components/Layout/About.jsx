import React from "react";

const About = () => {
  return (
    <section className="bg-white px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      
      <div className="space-y-6 order-1 md:order-2">
        <h3 className="inline-block bg-[#d1d5db] rounded-xl text-[#6366f1] px-4 py-2 text-sm font-semibold mt-5">
          ABOUT JUST A CHANCE PROGRAM (JAC)
        </h3>

        <h1 className="text-5xl font-bold text-[#333333] leading-tight">
          Empowering Tech <br /> Talent Across <br /> Africa
        </h1>

        <p className="text-[#666666] text-medium leading-relaxed">
          Ready to unlock your potential in tech? From Software Development to
          Cloud Engineering, we provide the skills, mentorship, and
          opportunities you need to succeed. Join our supportive community and
          discover how one chance can transform your future in the digital
          world.
        </p>

        <button className="bg-[#5a43f1] text-white px-6 py-3 rounded-md text-lg font-semibold transition-transform duration-300 hover:scale-105">
          Read More
        </button>
      </div>

     
      <div className="flex justify-center order-2 md:order-1">
        <img
          src="/images/hero1.png"
          alt="About Just A Chance"
          className="w-full h-110 object-cover shadow-md rounded-2xl zoom-once"
        />
      </div>
    </section>
  );
};

export default About;
