import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Brijesh Dubey. All Rights Reserved.</p>
                <p className="text-sm">
                    Made with 💻 by Brijesh Dubey |
                    <a href="https://github.com/brijeshdubey8779/" className="text-blue-400 hover:underline ml-2" target="_blank" rel="noopener noreferrer">GitHub</a> |
                    <a href="https://www.linkedin.com/in/brijesh-dubey-40481b215/" className="text-blue-400 hover:underline ml-2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
