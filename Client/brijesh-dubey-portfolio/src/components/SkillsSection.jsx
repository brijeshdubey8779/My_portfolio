import React, { useRef, useEffect } from "react";
// Importing logos
import reactLogo from "../assets/logos/react.png";
import jsLogo from "../assets/logos/javascript.png";
import pythonLogo from "../assets/logos/python.png";
import djangoLogo from "../assets/logos/django.png";
import dockerLogo from "../assets/logos/docker.png";
import tailwindLogo from "../assets/logos/tailwindcss.png";
import mysqlLogo from "../assets/logos/mysql.png";
import postgresqlLogo from "../assets/logos/postgresql.png";
import gitLogo from "../assets/logos/git.png";
import githubLogo from "../assets/logos/github.png";
import htmlLogo from "../assets/logos/html.png"
import cssLogo from "../assets/logos/css.png"

const skills = [
  { name: "React", logo: reactLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "Python", logo: pythonLogo },
  { name: "Django", logo: djangoLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "Docker", logo: dockerLogo },
  { name: "TailwindCSS", logo: tailwindLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "PostgreSQL", logo: postgresqlLogo },
  { name: "Git", logo: gitLogo },
  { name: "GitHub", logo: githubLogo },
];

const SkillsSection = () => {
  const scrollRef = useRef(null);
  const scrollSpeed = 2000; // Speed of auto-scroll in milliseconds

  const scrollDistance = 150;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollDistance,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollDistance,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const autoScroll = () => {
      if (scrollRef.current) {
        const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        if (scrollRef.current.scrollLeft >= maxScrollLeft) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollBy({ left: scrollDistance, behavior: "smooth" });
        }
      }
    };

    const intervalId = setInterval(autoScroll, scrollSpeed);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-8 relative flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-8">My Skill Set</h2>

      <div className="relative w-full flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-1 bg-gray-600 text-white p-2 rounded-full shadow-md hover:bg-gray-800 focus:outline-none z-10"
        >
          &#8249;
        </button>

        {/* Skills Container */}
        <div
          className="flex space-x-4 overflow-hidden scroll-smooth w-4/5"
          ref={scrollRef}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white p-4 rounded-lg shadow-md w-48 text-center"
            >
              <img src={skill.logo} alt={`${skill.name} logo`} className="w-auto h-12 mx-auto mb-4" />
              <p className="text-lg font-semibold text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-1 bg-gray-600 text-white p-2 rounded-full shadow-md hover:bg-gray-800 focus:outline-none z-10"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default SkillsSection;


