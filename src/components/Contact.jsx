import React, { useState } from 'react';
import './../style/contact.css'; // Import the CSS file for the Contact page

const Contact = ({ isDarkMode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState(''); // For success or error message
  const [statusType, setStatusType] = useState(''); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch('https://formspree.io/f/mldenrna', {
        method: 'POST',
        headers: {
          'Accept': 'application/json', // Add this header
        },
        body: formData,
      });

      if (response.ok) {
        setStatusMessage('Your message has been sent!');
        setStatusType('success');
      } else {
        setStatusMessage('Something went wrong. Please try again.');
        setStatusType('error');
      }
    } catch (error) {
      // console.error('Error submitting form:', error);
      setStatusMessage('Something went wrong. Please try again.');
      setStatusType('error');
    }

    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setStatusMessage('');
      setStatusType('');
    }, 4000);
  };

  return (
    <section id="contact" className={`contact-section py-5 ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container">
        <h2 className="text-center mb-4" style={{ width: "202px", margin: "0 auto", fontWeight: "900", textAlign: "center" }}>Contact Me</h2>

        {/* Show success or error message */}
        {statusMessage && (
          <div className={`alert text-center ${statusType === 'success' ? 'alert-success' : 'alert-danger'}`}>
            {statusMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="form-group mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <textarea
              className="form-control"
              name="message"
              rows="4"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="text-center">
            {isDarkMode ? (
              <button
                type="submit"
                className="btn btn-light day-mode"
                style={{ width: "187px", height: "77px" }}
              >
                <p style={{ width: "167px", height: "23px" }}>Send the signel</p>
              </button>
            ) : (
              <input
                type="submit"
                value="Send Message"
                className="btn btn-primary"
                style={{ width: "138px", height: "53px" }}
              />
            )}
          </div>
        </form>

      </div>
    </section>
  );
};

export default Contact;
