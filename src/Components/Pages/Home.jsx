import React from 'react';
import Hero from "../Layout/Hero";
import About from "../Layout/About";
import Stats from "../Layout/Stats";
import Programs from "../Layout/Programs";
import Goals from "../Layout/Goals";
import Values from "../Layout/Values";
import Testimonials from "../Layout/Testimonials";
import Apply from "../Layout/Apply";
import Footer from "../Layout/Footer";

export default function Home() {
  return (
    <div>
       <Hero/>
       <About/>
       <Stats/>
       <Programs/>
       <Goals/>
       <Values/>
       <Testimonials/>
       <Apply/>
       <Footer/>
    </div>
  );
}