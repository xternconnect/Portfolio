import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const serviceId = 'service_2ae6lhj';
      const templateId = 'template_z0ih8za';
      const publicKey = 'JqbZ7LsAFtzPLMCj7';
      
      // Test with minimal parameters first
      console.log('Attempting to send email with:', {
        serviceId,
        templateId,
        publicKey,
        templateParams: {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message
        }
      });
      
      // Send email using EmailJS with parameters matching your template
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message
        },
        publicKey
      );
      
      console.log('Email sent successfully:', result);
      console.log('Service ID:', serviceId);
      console.log('Template ID:', templateId);
      console.log('Public Key:', publicKey);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      console.error('Full error object:', error);
      console.error('Error type:', typeof error);
      console.error('Error keys:', Object.keys(error));
      console.error('Error string:', error.toString());
      
      // Try to get more specific error info
      if (error.response) {
        console.error('Error response:', error.response);
      }
      if (error.status) {
        console.error('Error status:', error.status);
      }
      if (error.text) {
        console.error('Error text:', error.text);
      }
      
      setIsSubmitting(false);
      setSubmitStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className="contact-form">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-title">Let's Work Together</h2>
            <p className="contact-description">
              Have a project in mind? I'd love to hear about it. 
              Send me a message and let's discuss how we can bring your ideas to life.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">abdelrahmanelshurbagy@gmail.com</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">El Rehab, Cairo, Egypt</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">01112233475</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div className="contact-text">
                  <span className="contact-label">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/abdelrahmanelshurbagy17" target="_blank" rel="noopener noreferrer" className="contact-value">abdelrahmanelshurbagy17</a>
                </div>
              </div>
            </div>
          </div>
          
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="form-success">
                <span>✅ Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-error">
                <span>❌ Failed to send message. Please try again or email me directly.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
