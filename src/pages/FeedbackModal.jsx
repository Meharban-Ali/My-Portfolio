import React, { useState, useEffect } from 'react';

export const FeedbackForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // Show modal after 1 second when the page loads
  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem('modalShown');
    if (!hasModalBeenShown) {
      const timer = setTimeout(() => {
        setShowModal(true);
        localStorage.setItem('modalShown', 'true');
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send feedback to the server
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback }),
      });

      if (response.ok) {
        setMessage('Thank you for your feedback!');
        setFeedback('');
        setTimeout(() => {
          setShowModal(false);
          setMessage('');
        }, 2000);
      } else {
        setMessage('Failed to submit feedback. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Feedback Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="feedback">
                  Your Feedback
                </label>
                <textarea
                  id="feedback"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Enter your feedback here..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                ></textarea>
              </div>
              {message && (
                <p className={`mb-4 ${message.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
                  {message}
                </p>
              )}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
