import React from "react";

const Programs = () => {
  return (
    <section className="bg-white px-10 py-16 space-y-10 pt-40">

      {/* Left */}
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl font-bold text-[#5a43f1]">Programs</h1>
        <p className="text-[#666666] text-base md:text-lg leading-relaxed">
          Discover our comprehensive tech education programs designed to
          transform your career. Each program is crafted with industry
          expertise, hands-on projects, and personalized mentorship to ensure
          your success in the digital world.
        </p>
      </div>

      {/* Right - Cards */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Card 1 */}
        <div className="bg-[#f5f3fb]  rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <img
            src="/images/pic1.png"
            alt="Software Engineering"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 space-y-3">
            <h1 className="text-2xl font-bold text-black">
              Software Engineering
            </h1>
            <h3 className="text-[#5a43f1] font-semibold text-medium">
              Build robust and scalable applications
            </h3>
            <p className="text-[#666666] text-medium leading-relaxed">
              Master the art of software development with our comprehensive
              program. Learn modern programming languages, software
              architecture, database design, and industry best practices for
              building enterprise-level applications.
            </p>
            <button className="bg-[#6366f1] text-white px-4 py-2 rounded-md text-medium font-semibold transition-transform duration-300 hover:scale-105">
              Read More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#f5f3fb] rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <img
            src="/images/pic2.png"
            alt="Data Science"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 space-y-3">
            <h1 className="text-2xl font-bold text-black ">Data Science</h1>
            <h3 className="text-[#5a43f1] font-semibold text-medium">
              Transform data into insights
            </h3>
            <p className="text-[#666666] text-medium leading-relaxed">
              Dive deep into the world of data analytics and machine learning.
              Learn to collect, analyze, and interpret complex data sets using
              advanced statistical methods and cutting-edge tools to drive
              data-informed decision making.
            </p>
            <button className="bg-[#6366f1] text-white px-4 py-2 rounded-md text-medium font-semibold transition-transform duration-300 hover:scale-105">
              Read More
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#f5f3fb] rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <img
            src="/images/pic3.png"
            alt="UI/UX Design"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 space-y-3">
            <h1 className="text-2xl font-bold text-black">UI/UX Design</h1>
            <h3 className="text-[#5a43f1] font-semibold text-medium">
              Create exceptional user experiences
            </h3>
            <p className="text-[#666666] text-medium leading-relaxed">
              Master the principles of user-centered design. Learn to create
              intuitive interfaces, conduct user research, develop wireframes
              and prototypes, and design beautiful, functional digital
              experiences that users love.
            </p>
            <button className="bg-[#6366f1] text-white px-4 py-2 rounded-md text-medium font-semibold transition-transform duration-300 hover:scale-105">
              Read More
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#f5f3fb] rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <img
            src="/images/pic4.png"
            alt="DevOps"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 space-y-3">
            <h1 className="text-2xl font-bold text-black">DevOps</h1>
            <h3 className="text-[#5a43f1] font-semibold text-medium">
              Streamline development operations
            </h3>
            <p className="text-[#666666] text-medium leading-relaxed">
              Learn to bridge the gap between development and operations. Master
              continuous integration/deployment, cloud platforms,
              containerization, and automation to build efficient, scalable
              development pipelines.
            </p>
            <button className="bg-[#6366f1] text-white px-4 py-2 rounded-md text-medium font-semibold transition-transform duration-300 hover:scale-105">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
