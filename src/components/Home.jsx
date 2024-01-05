import React from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { orderBy } from 'lodash';

const BookCard = ({ book }) => {
  // Animate the book card using framer-motion
  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md m-4"
      style={{ width: '300px', height: '400px' }}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="p-4 h-full">
        <h2 className="font-bold text-xl mb-2">{book.book_name}</h2>
        <p className="text-gray-600 mb-4">{book.book_type}</p>
        <p className="text-gray-700">Author: {book.author_info.name}</p>
        <p className="text-gray-700">Published on: {book.published_on}</p>
        <div className="mt-4">
          <p className="text-gray-700">Comments:</p>
          <ul className="list-disc list-inside">
            {book.comments.map((comment, index) => (
              <li key={index} className="text-gray-600">
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
