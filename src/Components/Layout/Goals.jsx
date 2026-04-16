import React from "react";
import { CiStar } from "react-icons/ci";
import { GoLaw } from "react-icons/go";
import { TfiReload } from "react-icons/tfi";
import { RiGraduationCapLine } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineRecordVoiceOver } from "react-icons/md";

const Goals = () => {
  return (
    <section className="bg-white px-10 py-16">

      <div className="space-y-6 text-left mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-[#5a43f1] whitespace-nowrap">
          Goals & Objectives
        </h1>
        <p className="text-black text-sm md:text-base leading-relaxed max-w-3xl">
          Our mission at JAC is to discover and nurture untapped potential. We
          seek out talented individuals who may have been overlooked, providing
          them with the opportunities, skills, and support needed to thrive in
          the tech industry.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className=" bg-[#f5f3fb] border border-[#eeeeee] rounded-lg p-6 transition duration-300 hover:border-[#5a43f1] hover:shadow-md">
          <div className="text-4xl transition-transform duration-300 hover:scale-110">
            <CiStar />
          </div>
          <div>
            <h1 className="text-medium font-bold text-black mt-5">
              Empowerment of Individuals
            </h1>
            <p className="text-[#333333] text-medium mt-5">
              Empowering individuals locked out of the tech world by providing
              opportunities to unlock their potential and achieve their highest
              goals.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className=" bg-[#f5f3fb] border border-[#eeeeee] rounded-lg p-6 transition duration-300 hover:border-[#5a43f1] hover:shadow-md">
          <div className="text-4xl transition-transform duration-300 hover:scale-110">
            <GoLaw />
          </div>
          <div>
            <h1 className="text-medium font-bold text-black mt-5">
              Equal Opportunity for All
            </h1>
            <p className="text-[#333333] text-medium mt-5">
              Facilitating equal opportunity, ensuring every individual has the
              chance to succeed, regardless of their background or past
              experiences.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className=" bg-[#f5f3fb] border border-[#eeeeee] rounded-lg p-6 transition duration-300 hover:border-[#5a43f1] hover:shadow-md">
          <div className="text-3xl transition-transform duration-300 hover:scale-110">
            <TfiReload />
          </div>
          <div>
            <h1 className="text-medium font-bold text-black mt-5">
              Career Transformation
            </h1>
            <p className="text-[#333333] text-medium mt-5">
              Being a catalyst for transformation by changing the trajectory of
              participants' lives and careers through hands-on tech education.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className=" bg-[#f5f3fb] border border-[#eeeeee] rounded-lg p-6 transition duration-300 hover:border-[#5a43f1] hover:shadow-md">
          <div className="text-3xl transition-transform duration-300 hover:scale-110">
            <RiGraduationCapLine />
          </div>
          <div>
            <h1 className="text-medium font-bold text-black mt-5">
              Quality Education
            </h1>
            <p className="text-[#333333] text-medium mt-5">
              Providing high-quality tech education that meets industry
              standards and prepares individuals for real-world challenges.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className=" bg-[#f5f3fb] border border-[#eeeeee] rounded-lg p-6 transition duration-300 hover:border-[#5a43f1] hover:shadow-md">
          <div className="text-3xl transition-transform duration-300 hover:scale-110">
            <BsPeopleFill />
          </div>
          <div>
            <h1 className="text-medium font-bold text-black mt-5">
              Community Building
            </h1>
            <p className="text-[#333333] text-medium mt-5">
              Creating a supportive community of learners and professionals who
              can grow together and help each other succeed.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className=" bg-[#f5f3fb] border border-[#eeeeee] rounded-lg p-6 transition duration-300 hover:border-[#5a43f1] hover:shadow-md">
          <div className="text-3xl transition-transform duration-300 hover:scale-110">
            <MdOutlineRecordVoiceOver />
          </div>
          <div>
            <h1 className="text-medium font-bold text-black mt-5">
              Industry Voice
            </h1>
            <p className="text-[#333333] text-medium mt-5">
              Becoming a respected voice in the tech industry, advocating for
              inclusive practices and innovative approaches to education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
