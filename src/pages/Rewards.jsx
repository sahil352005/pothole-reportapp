import React from 'react';
import { Link } from 'react-router-dom';

const Rewards = () => {
    return (
        <div className="container mx-auto p-4">
            {/* Hero Section */}
            <div className="relative bg-blue-600 text-white py-16 mb-8">
                <div className="absolute inset-0 bg-black/50"></div>
                <h1 className="text-4xl font-bold text-center relative z-10">Your Rewards</h1>
                <p className="text-lg text-center relative z-10 mt-4">
                    Earn points for every pothole you report and redeem them for exciting rewards!
                </p>
            </div>

            {/* Current Points Section */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <h2 className="text-2xl font-semibold mb-4">Current Points: 150</h2>
                <p className="text-gray-600 mb-4">
                    You can earn points by reporting potholes and verifying reports. 
                    Points can be redeemed for various rewards.
                </p>
                <h3 className="text-xl font-semibold mb-2">How to Earn Points:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>10 points for each pothole reported</li>
                    <li>5 points for each verified report</li>
                    <li>Bonus points for detailed photos</li>
                </ul>
            </div>

            {/* Available Rewards Section */}
            <h2 className="text-2xl font-semibold mb-4">Available Rewards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="font-semibold">Gift Card</h3>
                    <p>100 Points</p>
                    <Link to="/redeem" className="text-blue-500 hover:underline">Redeem</Link>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="font-semibold">Discount on Services</h3>
                    <p>200 Points</p>
                    <Link to="/redeem" className="text-blue-500 hover:underline">Redeem</Link>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="font-semibold">Exclusive Merchandise</h3>
                    <p>300 Points</p>
                    <Link to="/redeem" className="text-blue-500 hover:underline">Redeem</Link>
                </div>
            </div>
        </div>
    );
};

export default Rewards; 