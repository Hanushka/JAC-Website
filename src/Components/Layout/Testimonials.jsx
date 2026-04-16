import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-white px-10 py-16">

      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black">Testimonials</h1>
        <p className="text-[#666666] text-medium md:text-base mt-4 max-w-2xl mx-auto text-center leading-relaxed">
          Discover what our beneficiaries have to say about their transformative
          journey with JAC
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <img
            src="/images/hero-1.jpg"
            alt="Irobikur Paul"
            className="w-full h-56 object-cover"
          />
          <div className="p-6 text-center space-y-3">
            <h1 className="text-xl font-bold text-[#333333]">Irobikur Paul</h1>
            <h4 className="text-[#5a43f1] font-semibold text-sm">
              Tech Enthusiast
            </h4>
            <p className="text-[#333333] text-sm md:text-base leading-relaxed max-w-2xl mx-auto text-left">
              Thanks to JAC, I found success where I least expected it! Their
              commitment to uncovering hidden talent gave me the chance to
              showcase my skills and prove my worth in the industry.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <img
            src="/images/hero-3.jpg"
            alt="Irobikur Paul"
            className="w-full h-56 object-cover"
          />
          <div className="p-6 text-center space-y-3">
            <h1 className="text-xl font-bold text-[#333333]">Irobikur Paul</h1>
            <h4 className="text-[#5a43f1] font-semibold text-sm ">
              Tech Enthusiast
            </h4>
            <p className="text-[#333333] text-sm md:text-base leading-relaxed max-w-2xl mx-auto text-left">
              Thanks to JAC, I found success where I least expected it! Their
              commitment to uncovering hidden talent gave me the chance to
              showcase my skills and prove my worth in the industry.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <img
            src="/images/hero-4.jpg"
            alt="Irobikur Paul"
            className="w-full h-56 object-cover"
          />
          <div className="p-6 text-center space-y-3">
            <h1 className="text-xl font-bold text-[#333333]">Irobikur Paul</h1>
            <h4 className="text-[#5a43f1] font-semibold text-sm">
              Tech Enthusiast
            </h4>
            <p className="text-[#333333] text-sm md:text-base leading-relaxed max-w-2xl mx-auto text-left">
              Thanks to JAC, I found success where I least expected it! Their
              commitment to uncovering hidden talent gave me the chance to
              showcase my skills and prove my worth in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
