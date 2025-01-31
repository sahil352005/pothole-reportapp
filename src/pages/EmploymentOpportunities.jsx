import React, { useState } from 'react';
import employmentImage from '../assets/employment-image.png'; // Adjust the path as necessary
import { db } from '../firebase/config'; // Adjust the path as necessary
import { collection, addDoc } from 'firebase/firestore';
//import { storage } from '../firebase/config'; // Import Firebase storage
//mport { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import storage functions

const EmploymentOpportunities = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            resume: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Upload the resume file to Firebase Storage
            let resumeURL = '';
            if (formData.resume) {
                const resumeRef = ref(storage, `resumes/${formData.resume.name}`);
                await uploadBytes(resumeRef, formData.resume);
                resumeURL = await getDownloadURL(resumeRef);
            }

            // Create a reference to the "applications" collection
            const applicationsRef = collection(db, 'applications');
            
            // Add the form data to the collection
            await addDoc(applicationsRef, {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                resume: resumeURL, // Save the URL of the uploaded resume
                message: formData.message,
                createdAt: new Date()
            });

            // Reset the form after submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                resume: null,
                message: ''
            });

            alert('Application submitted successfully!');
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('Failed to submit application. Please try again.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Employment Opportunities</h1>
            <img src={employmentImage} alt="Employment Opportunities" className="w-full h-auto mb-6 rounded shadow-lg" />
            <p className="text-center mb-4">
                We are committed to creating a diverse and inclusive workplace. 
                Please fill out the form below to apply for employment opportunities.
            </p>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        Phone Number
                    </label>
                    <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
                        Upload Resume
                    </label>
                    <input 
                        type="file" 
                        name="resume" 
                        onChange={handleFileChange} 
                        required 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        rows="4" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700 transition duration-300"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default EmploymentOpportunities; 