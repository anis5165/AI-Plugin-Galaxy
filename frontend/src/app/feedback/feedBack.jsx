// components/FeedbackDialog.js
'use client';
import React, { useState } from 'react';
import { MdOutlineFeedback } from "react-icons/md";

const FeedbackDialog = () => {
  const [isOpen, setIsOpen] = useState(false); // Track dialog visibility
  const [feedback, setFeedback] = useState(''); // Store user feedback

  // Handle opening and closing the dialog
  const toggleDialog = () => setIsOpen(!isOpen);

  // Handle feedback submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback Submitted:', feedback); // Replace this with API call
    setIsOpen(false); // Close dialog after submission
    setFeedback(''); // Reset feedback form
  };

  return (
    <div>
      {/* Feedback Button */}
      <button
        onClick={toggleDialog}
        className="lg:inline-flex lg:w-auto w-full px-3 py-2 shadow-lg shadow-[#661557] opacity-65 hover:opacity-100 rounded-lg items-center justify-center hover:border hover:border-[#7d316f]"
      >
        <MdOutlineFeedback size={20}/>
      </button>

      {/* Dialog Box */}
      {isOpen && (
        <div className="fixed right-12 bottom-28 flex items-center justify-center  bg-opacity-50 z-50">
          <div className="bg-[] backdrop-blur-md border p-6 rounded shadow-lg w-80">
            <h2 className="text-xl font-semibold text-white mb-4">Your Feedback</h2>
            <form onSubmit={handleSubmit}>
              <textarea
                className="w-full p-2 outline-none bg-transparent rounded mb-4"
                placeholder="Write your feedback here..."
                rows={4}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={toggleDialog}
                  className="lg:inline-flex lg:w-auto w-full px-3 py-2 shadow-lg shadow-[#661557] rounded-lg items-center justify-center hover:border hover:border-[#7d316f]"
                  >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="lg:inline-flex lg:w-auto w-full px-3 py-2 shadow-lg bg-[#711460] shadow-[#661557] rounded-lg items-center justify-center hover:border hover:border-[#7d316f]"
                  >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackDialog;
