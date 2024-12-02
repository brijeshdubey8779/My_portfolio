import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_27izw2s'; // Replace with your EmailJS Service ID
        const templateId = 'template_mme6d8p'; // Replace with your EmailJS Template ID
        const publicKey = '9HdWZ1Rv_74Jb5iWw'; // Replace with your EmailJS Public Key

        console.log('Form Data:', formData);

        emailjs.send(
            serviceId,
            templateId,
            {
                from_name: formData.name,     // Match {{from_name}}
                from_email: formData.email,  // Match {{from_email}}
                message: formData.message,   // Match {{message}}
            },
            publicKey
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('Your message has been sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error('FAILED...', error);
                setStatus('An error occurred. Please try again later.');
            });
    };

    return (
        <div className="py-16 px-8 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

            {/* Email Address */}
            <p className="mb-4 text-center text-lg">
                You can also reach me at:
                <a href="mailto:brijeshdubey8451@gmail.com" className="text-blue-600 hover:underline"> brijeshdubey8451@gmail.com</a>
            </p>

            {/* Contact Form */}
            <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
                {status && <p className="mt-4 text-green-500 text-sm">{status}</p>}
            </form>
        </div>
    );
};

export default ContactSection;
