import React from "react";
import resume from "../assets/public/Brijesh_Dubey_Resume.pdf"

const AboutSection = () => {
    return (
        <div className=" py-16 px-8">
            <div className="max-w-4xl mx-auto">
                {/* Bio Section */}
                <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
                <p className="text-lg text-gray-700 text-center mb-4">
                    I'm Brijesh Dubey, a passionate Full Stack Developer specializing in
                    building web applications with modern technologies like React, Django,
                    and more. I'm always eager to learn and take on new challenges.
                </p>

                {/* Resume Download */}
                <div className="text-center">
                    <a
                        href={resume}
                        target="_blank"
                        // download="Brijesh_Dubey_Resume.pdf"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        View My Resume
                    </a>
                </div>

                {/* Education Section */}
                <div className="mt-10">
                    <h3 className="text-2xl font-semibold mb-4 text-center">Education</h3>
                    <div className="text-lg text-gray-700 text-center">
                        <p>
                            <strong>BE in Computer Engineering</strong> - ARMIET, Shahapur (September 2020 - May 2024)
                            <br />
                            Percentage: 70% (Aggregate)
                        </p>
                        <p className="mt-4">
                            <strong>HSC in Computer Science</strong> - Model College of Science & Commerce, Kalyan (August 2017 - March 2019)
                            <br />
                            Percentage: 69%
                        </p>
                        <p className="mt-4">
                            <strong>SSC</strong> - Devi Dayal Hindi High School, Kalyan (March 2017)
                            <br />
                            Percentage: 84%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
