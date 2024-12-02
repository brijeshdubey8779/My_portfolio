import React from 'react';

const projects = [
    {
        title: "YouTubers Platform",
        description: "A web solution facilitating collaboration between users and YouTubers, ensuring secure payments and responsive design.",
        technologies: ["HTML", "CSS", "JavaScript", "Python", "Django", "PostgreSQL"],
        githubLink: "https://github.com/brijeshdubey8779/youtubers.git",
        liveDemo: ""
    },
    {
        title: "Phonebook Management System",
        description: "A command-line phonebook management system allowing users to register, log in, and manage contacts efficiently.",
        technologies: ["Python", "PostgreSQL"],
        githubLink: "https://github.com/brijeshdubey8779/Py_projects.git",
        liveDemo: ""
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio website built with React and TailwindCSS.",
        technologies: ["ReactJS", "TailwindCSS"],
        githubLink: "https://github.com/yourusername/portfolio",
        liveDemo: "https://brijeshdubeyportfolio.netlify.app/"
    },
    {
        title: "JobListings",
        description: "A bsic job listing poage using ReactJs made for learning purpose",
        technologies: ["ReactJS"],
        githubLink: "https://github.com/brijeshdubey8779/job_listing",
        liveDemo: "https://job-listing-component.netlify.app/",
    }
    // {
    //     title: "E-commerce App",
    //     description: "An e-commerce application with Django backend and React frontend.",
    //     technologies: ["Django", "React", "PostgreSQL"],
    //     githubLink: "https://github.com/yourusername/ecommerce-app", 
    //     liveDemo: "https://yourecommerceapp.com"  
    // }
];

const ProjectsSection = () => {
    return (
        <div className="bg-gray-100 container mx-auto p-8" id="projects">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="mb-4">{project.description}</p>
                        <p className="mb-2">
                            <strong>Technologies:</strong> {project.technologies.join(", ")}
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href={project.githubLink}
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            {project.liveDemo && (
                                <a
                                    href={project.liveDemo}
                                    className="text-blue-500 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;
