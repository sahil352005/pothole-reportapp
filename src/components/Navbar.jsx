import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { UserIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const { currentUser, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-gray-800/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      } mb-4`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-xl font-bold text-white hover:text-blue-400 transition duration-300"
          >
            PotholePatrol
          </Link>
          
          <div className="space-x-1 md:space-x-4 flex items-center">
            <Link 
              to="/" 
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500/10 transition duration-300"
            >
              Home
            </Link>
            
            {currentUser && (
              <>
                <Link 
                  to="/report" 
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500/10 transition duration-300"
                >
                  Report Pothole
                </Link>
                <Link 
                  to="/view-map" 
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500/10 transition duration-300"
                >
                  View Map
                </Link>
                <Link 
                  to="/rewards" 
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500/10 transition duration-300"
                >
                  Rewards
                </Link>
                
                {isAdmin && (
                  <Link 
                    to="/admin" 
                    className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-500/10 transition duration-300"
                  >
                    Admin Dashboard
                  </Link>
                )}
                
                <Link 
                  to="/gridmat" 
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500/10 transition duration-300"
                >
                  GridMat
                </Link>
                
                <Link 
                  to="/employment-opportunities" 
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500/10 transition duration-300"
                >
                  Employment Opportunities
                </Link>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition duration-300"
                >
                  Logout
                </button>

                <div className="relative">
                  <UserIcon 
                    className="h-8 w-8 text-white cursor-pointer" 
                    onClick={toggleDropdown}
                  />
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                      <div className="py-2">
                        <Link 
                          to="/profile" 
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Profile
                        </Link>
                        <Link 
                          to="/settings" 
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Settings
                        </Link>
                        <button 
                          onClick={handleLogout} 
                          className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
            
            {!currentUser && (
              <Link 
                to="/login" 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 