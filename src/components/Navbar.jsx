import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchBook,
  sortBooksByAuthorBirthYear,
  sortBooksByGender,
  sortBooksByPublishYear,
  sortBooksByType,
} from "../redux/auth/authSlice";

export default function Navbar() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSortByAuthorBirthYearAnimating, setSortByAuthorBirthYearAnimating] =
    useState(false);
  const dispatch = useDispatch();

  // const handleSortByYear = () => {
  //   dispatch(filterBooksByYear());
  // };

  const handleSortByAuthorBirthYear = () => {
    // Add a class to trigger the animation
    setSortByAuthorBirthYearAnimating(true);

    // Dispatch the action
    dispatch(sortBooksByAuthorBirthYear());

    // Reset the animation class after a short delay
    setTimeout(() => {
      setSortByAuthorBirthYearAnimating(false);
    }, 300); // Adjust the delay as needed
  };

  const handleSortByType = () => {
    setSortByAuthorBirthYearAnimating(true);
    dispatch(sortBooksByType());
    setTimeout(() => {
      setSortByAuthorBirthYearAnimating(false);
    }, 300);
  };

  const handleSortByGender = () => {
    setSortByAuthorBirthYearAnimating(true);
    dispatch(sortBooksByGender());
    setTimeout(() => {
      setSortByAuthorBirthYearAnimating(false);
    }, 300);
  };

  const handleSortBypublishYear = () => {
    setSortByAuthorBirthYearAnimating(true);
    dispatch(sortBooksByPublishYear());
    setTimeout(() => {
      setSortByAuthorBirthYearAnimating(false);
    }, 300);
  };
  const handleLogout = () => {
    // Perform logout logic here
    // For example, you can clear user authentication state or redirect to the logout page
    console.log("Logout clicked");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="p-4 flex items-center justify-between">
        <span className="text-xl font-bold">Favourite Books</span>
        <div className="lg:flex hidden items-center gap-8">
          {/* Desktop menu options */}
          <div className="flex items-center ml-4">
            <button
              onClick={handleSortByAuthorBirthYear}
              className={`mr-4 px-4 py-2  text-white  rounded-md transition-transform duration-300 transform hover:scale-105 focus:outline-none ${
                isSortByAuthorBirthYearAnimating ? "animate-bounce" : ""
              }`}
            >
              Sort by Author Birth Year
            </button>

            <button
              onClick={handleSortByType}
              className={`mr-4 px-4 py-2 text-white rounded-md transition-transform duration-300 transform hover:scale-105 focus:outline-none ${
                isSortByAuthorBirthYearAnimating ? "animate-bounce" : ""
              }`}
            >
              Sort by Type
            </button>

            <button
              onClick={handleSortByGender}
              className={`mr-4 px-4 py-2 text-white rounded-md transition-transform duration-300 transform hover:scale-105 focus:outline-none ${
                isSortByAuthorBirthYearAnimating ? "animate-bounce" : ""
              }`}
            >
              Sort by Gender
            </button>

            <button
              onClick={handleSortByGender}
              className={`mr-4 px-4 py-2 text-white rounded-md transition-transform duration-300 transform hover:scale-105 focus:outline-none ${
                isSortByAuthorBirthYearAnimating ? "animate-bounce" : ""
              }`}
            >
              Sort by Gender
            </button>

            <button
              onClick={handleSortBypublishYear}
              className={`mr-4 px-4 py-2 text-white rounded-md transition-transform duration-300 transform hover:scale-105 focus:outline-none ${
                isSortByAuthorBirthYearAnimating ? "animate-bounce" : ""
              }`}
            >
              Sort by Publish Year
            </button>
          </div>

          <div className="flex items-center ml-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white border-none rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 mr-4"
            />
            {/* You can add a search icon here if needed */}
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            Logout
          </button>
        </div>

        {/* Hamburger menu for small screens */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          {/* Render your mobile menu options here */}
          <div className="p4">
            <button
              onClick={handleSortByAuthorBirthYear}
              className={`mr-4 px-4 py-2  text-white  rounded-md transition-transform duration-300 transform hover:scale-105 focus:outline-none ${
                isSortByAuthorBirthYearAnimating ? "animate-bounce" : ""
              }`}
            >
              Sort by Author Birth Year
            </button>

            <button
              onClick={handleSortByType}
              className={`mr-4 px-4 py-2 text-white rounded-md transition-transform duration-300 transform hover:scale-105 focus:outline-none ${
                isSortByAuthorBirthYearAnimating ? "animate-bounce" : ""
              }`}
            >
              Sort by Type
            </button>

            <button
              onClick={handleSortByGender}
              className={`mr-4 px-4 py-2 text-white rounded-md transition-transform duration-300 transform hover:scale-105 focus:outline-none ${
                isSortByAuthorBirthYearAnimating ? "animate-bounce" : ""
              }`}
            >
              Sort by Gender
            </button>

            <button
              onClick={handleSortByGender}
              className={`mr-4 px-4 py-2 text-white rounded-md transition-transform duration-300 transform hover:scale-105 focus:outline-none ${
                isSortByAuthorBirthYearAnimating ? "animate-bounce" : ""
              }`}
            >
              Sort by Gender
            </button>

            <button
              onClick={handleSortBypublishYear}
              className={`mr-4 px-4 py-2 text-white rounded-md transition-transform duration-300 transform hover:scale-105 focus:outline-none ${
                isSortByAuthorBirthYearAnimating ? "animate-bounce" : ""
              }`}
            >
              Sort by Publish Year
            </button>
          </div>

          <div className="p-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white border-none rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 mb-4"
            />
            {/* You can add a search icon here if needed */}
          </div>

          <div className="p-4">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
