import React, { useState } from "react";

export default function Navbar() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
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
        <div className="lg:flex hidden items-center">
          {/* Desktop menu options */}
          <div className="flex items-center ml-4">
            <input
              type="radio"
              id="option1"
              name="options"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={() => handleOptionChange("option1")}
              className="mr-2"
            />
            <label htmlFor="option1" className="mr-4 text-white">
              Option 1
            </label>

            <input
              type="radio"
              id="option2"
              name="options"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={() => handleOptionChange("option2")}
              className="mr-2"
            />
            <label htmlFor="option2" className="mr-4 text-white">
              Option 2
            </label>

            <input
              type="radio"
              id="option3"
              name="options"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={() => handleOptionChange("option3")}
              className="mr-2"
            />
            <label htmlFor="option3" className="text-white">
              Option 3
            </label>
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
          <div className="p-4">
            <input
              type="radio"
              id="mobileOption1"
              name="mobileOptions"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={() => handleOptionChange("option1")}
              className="mr-2"
            />
            <label htmlFor="mobileOption1" className="mr-4 text-white">
              Option 1
            </label>

            <input
              type="radio"
              id="mobileOption2"
              name="mobileOptions"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={() => handleOptionChange("option2")}
              className="mr-2"
            />
            <label htmlFor="mobileOption2" className="mr-4 text-white">
              Option 2
            </label>

            <input
              type="radio"
              id="mobileOption3"
              name="mobileOptions"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={() => handleOptionChange("option3")}
              className="mr-2"
            />
            <label htmlFor="mobileOption3" className="text-white">
              Option 3
            </label>
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
