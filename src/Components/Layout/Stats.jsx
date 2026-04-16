import React from "react";
import { GoPeople } from "react-icons/go";
import { FaBriefcase } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { GiShakingHands } from "react-icons/gi";

const Stats = () => {
  return (
    <section className="bg-[#6366f1] w-full py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 text-white">
        
        {/* Stat 1 */}
        <div className="flex flex-col items-center py-6 border-b md:border-b-0 md:border-r border-white/30">
          <div className="text-2xl mb-3">
            <GoPeople />
          </div>
          <h4 className="text-xl font-bold">500+</h4>
          <p className="text-sm mt-2">Active Learners</p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center py-6 border-b md:border-b-0 md:border-r border-white/30">
          <div className="text-2xl mb-3">
            <FaBriefcase />
          </div>
          <h4 className="text-xl font-bold">80%</h4>
          <p className="text-sm mt-2">Employment Rate</p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center py-6 md:border-r border-white/30">
          <div className="text-2xl mb-3">
            <LuGraduationCap />
          </div>
          <h4 className="text-xl font-bold">4</h4>
          <p className="text-sm mt-2">Tech Programs</p>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center py-6">
          <div className="text-2xl mb-3">
            <GiShakingHands />
          </div>
          <h4 className="text-xl font-bold">20+</h4>
          <p className="text-sm mt-2">Industry Partners</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
