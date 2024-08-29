import React from 'react';
// import MyPhoto from '../assets/images/profile.jpg'
import ProfileCard from './profileCard';
// import SkillsSection from './SkillsSection';
import resume from "../assets/public/Brijesh_Dubey_Resume.pdf"

const HeroSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center py-20 bg-gray-100">
            <div className="flex flex-col items-center mb-8 md:mb-0 pl-5">
                <ProfileCard />
            </div>

            {/* Right Section - Summary and Details */}
            <div className="md:ml-12 text-center md:text-left">
                <h2 className="text-4xl font-bold mb-4">Hello! I'm Brijesh Dubey</h2>
                <p className="text-gray-700 mb-4">
                    A passionate Full Stack Developer specializing in building web applications
                    with modern technologies like React, Django, and more.
                </p>
                <a
                    href={resume}
                    download="Brijesh_Dubey_Resume.pdf"
                    className="text-blue-500 hover:underline"
                >
                    View My Resume
                </a>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold">Education</h3>
                    <p className="text-gray-600">BE in Computer Engineering</p>
                </div>
                <div className='mt-6'>
                    <h3 className="text-xl font-semibold">Social Links</h3>
                    <a href="https://github.com/brijeshdubey8779/" className="text-blue-500 hover:underline ml-0" target="_blank" rel="noopener noreferrer">GitHub</a> |
                    <a href="https://www.linkedin.com/in/brijesh-dubey-40481b215/" className="text-blue-500 hover:underline ml-2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </section >

    );
};

export default HeroSection;


