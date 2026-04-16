import React from "react";

const Apply = () => {
  return (
    <section className="px-10 py-20 flex justify-center">
      <div className="bg-[#333333] rounded-2xl w-full max-w-6xl text-center px-8 py-25">

        
        <h4 className="text-[#5a43f1] text-lg font-semibold mb-4">
          How to Apply
        </h4>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Start Your Journey with Just A Chance
        </h1>

        <p className="text-[#f5f3fb] text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10 text-left">
          Ready to transform your future? Applying to JAC is simple and
          straightforward. Whether you're looking to develop new skills,
          join a supportive community, or kickstart your career,
          we're here to guide you every step of the way. Take the first
          step towards your goals today.
        </p>

        <button className="bg-[#5a43f1] text-white px-8 py-3 rounded-md text-lg font-semibold transition-transform duration-300 hover:scale-105">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default Apply;
