import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import axios from 'axios';
import loadingGif from "../assest/bgif.gif";
const BookCard = ({ book }) => {
  // Animate the book card using framer-motion
  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://source.unsplash.com/300x400/?${encodeURIComponent(
            book.book_name
          )}`
        );
        setImageUrl(response.request.responseURL);
        setIsLoading(false); // Set loading to false when the image is fetched
      } catch (error) {
        console.error("Error fetching image:", error);
        setIsLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchImage();
  }, [book.book_name]);

  return (
    <motion.div
    className="max-w-md mx-auto  bg-gradient-to-r from-lime-100 bg-lime-50 rounded-xl overflow-hidden shadow-md m-4"
    style={{ width: '300px', height: '550px' }}  // Adjusted height to 500px
    variants={cardVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="p-4 h-full">
      <h2 className="font-bold text-xl mb-2">{book.book_name}</h2>
      <p className="text-gray-600 mb-4"> <span className='font-semibold'>Type :</span>{book.book_type}</p>
      <p className="text-gray-700"><span className='font-semibold'>Author:</span> {book.author_info.name}</p>
      <p className="text-gray-700"><span className='font-semibold'>Author Birth Year:</span> {book.author_info.birth_year}</p>
      <p className="text-gray-700"><span className='font-semibold'>Gender: </span>{book.author_info.gender}</p>
      <p className="text-gray-700"><span className='font-semibold'>Published on:</span> {book.published_on}</p>
      {isLoading ? (
          // If loading, display the loading GIF
          <img
            src={loadingGif}
            alt="Loading..."
            className="h-48 w-full object-cover mb-4 rounded mt-4"
          />
        ) : (
          // If not loading, display the fetched image
          imageUrl && (
            <img
              src={imageUrl}
              alt={book.book_name}
              className="h-48 w-full object-cover mb-4 rounded mt-4"
            />
          )
        )}
      <div className="bg-green-50 rounded p-4 ring-1 h-32  ">  {/* Added overflow-y-auto for scrolling */}
        <p className="text-gray-700 font-bold mb-2">Comments:</p>
        <ul className="list-disc list-inside">
          {book.comments.map((comment, index) => (
            <li key={index} className="text-gray-600 mb-1">
              {comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
  
  );
};


export default function Home() {
  const { books } = useSelector((state) => state.auth);
  
  return (
    <div className="max-h-fit bg-pink-50">
      <Navbar />
      <div className="flex flex-wrap justify-center">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
}
