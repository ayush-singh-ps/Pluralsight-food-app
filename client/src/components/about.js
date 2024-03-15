import Userclass from "./Userclass";
import usercontext from "./usercontext";
import { useContext } from "react";
const About = () => {
    return (
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Story
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            From humble beginnings teaching tech skills in classrooms to becoming an end-to-end tech workforce development solution, our journey has always revolved around delivering what our customers need to solve their most crucial problems. And this isn’t even our final form.
            </p>
          </div>
        </div>
  
        <div className="mt-10 pb-12 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-100"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto lg:max-w-none">
                <div className="rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 lg:grid lg:grid-cols-3 lg:gap-4">
                  <div className="px-6 py-8 sm:p-10 lg:border-r lg:border-gray-200">
                    <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">Who We Are</h3>
                    <p className="mt-6 text-base leading-6 text-gray-500">
                    We truly care about our customers, both internal and external, and seek to understand their needs before creating solutions.
                    </p>
                  </div>
                  <div className="px-6 py-8 sm:p-10 lg:border-r lg:border-gray-200">
                    <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">Our Mission</h3>
                    <p className="mt-6 text-base leading-6 text-gray-500">
                    We strive to understand the big picture and how we contribute to the company’s objectives. We approach challenges with optimism and harness the power of teamwork to accomplish our goals. 
                    </p>
                  </div>
                  <div className="px-6 py-8 sm:p-10">
                    <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">Our Vision</h3>
                    <p className="mt-6 text-base leading-6 text-gray-500">
                    We’re dreaming big, but our work is all about the details. After all, we get to a better tech workforce one skill, one process improvement, one technologist at a time. Find out how we're solving tech workforce challenges, boosting careers, and creating opportunity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;