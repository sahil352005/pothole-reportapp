import React from 'react';
import { Link } from 'react-router-dom';

const Rewards = () => {
    return (
        <div className="container mx-auto">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-24 mb-16 shadow-2xl overflow-hidden max-w-full">
    <div className="absolute inset-0 bg-black/40"></div>
    <h1 className="text-6xl font-extrabold text-center relative z-10 tracking-tight leading-tight animate__animated animate__fadeIn">
        Unlock Your Rewards
    </h1>
    <p className="text-lg text-center relative z-10 mt-6 max-w-3xl mx-auto leading-relaxed opacity-90 animate__animated animate__fadeIn animate__delay-1s">
        Report potholes and earn exciting rewards! The more you contribute, the bigger the rewards. Join us and make a difference in your community.
    </p>
    <div className="absolute bottom-4 w-full text-center z-10">
    <a href="#rewards" className="text-lg bg-yellow-500 text-black py-2 px-6 rounded-full font-semibold shadow-md hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 m-4">
    View Rewards
</a>

    </div>
</div>




            {/* Current Points Section */}
            <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border border-gray-200">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Current Points: <span className="text-blue-600">150</span></h2>
    <p className="text-gray-700 leading-relaxed mb-5">
        Earn points by reporting potholes and verifying reports.  
        Redeem your points for exclusive rewards!
    </p>

    <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">How to Earn Points:</h3>
        <div className="space-y-2 text-gray-700">
            <p className="flex items-center"><span className="text-blue-500 font-bold text-lg mr-2">+10</span> Each pothole reported</p>
            <p className="flex items-center"><span className="text-green-500 font-bold text-lg mr-2">+5</span> Each verified report</p>
            <p className="flex items-center"><span className="text-yellow-500 font-bold text-lg mr-2">Bonus</span> Detailed photos</p>
        </div>
    </div>
</div>


            {/* Available Rewards Section */}
            <h2 className="text-3xl font-bold text-gray-800">
  Available Rewards
</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Amazon Gift Card */}
    <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <img 
            src="https://www.svgrepo.com/show/349584/amazon.svg" 
            alt="Amazon Gift Card" 
            className="w-24 mx-auto mb-2"
        />
        <h3 className="font-semibold text-center">Amazon Gift Card</h3>
        <p className="text-center">100 Points</p>
        <div className="text-center mt-2">
            <button 
                onClick={() => window.open("https://www.amazon.com", "_blank")} 
                className="text-blue-500 hover:underline"
            >
                Redeem
            </button>
        </div>
    </div>

    {/* Ola Ride Discount */}
    <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <img 
            src="https://www.svgrepo.com/show/303255/ola-cabs-logo.svg" 
            alt="Ola Discount" 
            className="w-24 mx-auto mb-2"
        />
        <h3 className="font-semibold text-center">Ola Ride Discount</h3>
        <p className="text-center">200 Points</p>
        <div className="text-center mt-2">
            <button 
                onClick={() => window.open("https://www.olacabs.com", "_blank")} 
                className="text-blue-500 hover:underline"
            >
                Redeem
            </button>
        </div>
    </div>

    {/* Uber Ride Discount */}
    <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <img 
            src="https://www.svgrepo.com/show/349541/uber.svg" 
            alt="Uber Discount" 
            className="w-24 mx-auto mb-2"
        />
        <h3 className="font-semibold text-center">Uber Ride Discount</h3>
        <p className="text-center">300 Points</p>
        <div className="text-center mt-2">
            <button 
                onClick={() => window.open("https://www.uber.com", "_blank")} 
                className="text-blue-500 hover:underline"
            >
                Redeem
            </button>
        </div>
    </div>
</div>


        </div>
    );
};

export default Rewards;
