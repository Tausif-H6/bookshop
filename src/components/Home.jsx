import React from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const BookCard = ({ book }) => {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md m-4" style={{ width: '300px', height: '400px' }}>
        <div className="p-4 h-full">
          <h2 className="font-bold text-xl mb-2">{book.book_name}</h2>
          <p className="text-gray-600 mb-4">Type: {book.book_type}</p>
          <p className="text-gray-700">Author: {book.author_info.name}</p>
          <p className="text-gray-700">Published on: {book.published_on}</p>
          <div className="mt-40 bg-gray-100">
            <p className="text-gray-700 ">Comments:</p>
            <ul className="list-disc list-inside">
              {book.comments.map((comment, index) => (
                <li key={index} className="text-gray-600">
                  {comment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
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
