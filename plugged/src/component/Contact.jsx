import React, {useState} from "react";

function Contact() {
  const [form, setForm] = useState ({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const {name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted (true);
  };
  return (
   <div className="contact-page">
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contac-subtitle">
        Have a question about an order or a product? Send us a message and 
        we'll get back to you as soon as we can.
      </p>
      {submitted ? (
        <div className="contact-success">
            <h2>Thanks {form.name}!</h2>
            <p>Your message has been sent. We'll reply to {form.email} soon.</p>
            <button
            className="contact-button"
            onClick={() => {
              setForm({name: "", email: "", subject: "", messag: "",});
              setSubmitted(false);
            }}
            >
              Send another message
            </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
           />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input 
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="What is this about?"
           />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          required
          />
        </div>
        <button type="submit" className="contact-button">
          Send Message
        </button>
        </form>
      )}

      <div className="contact-info">
        <div>
          <h3>Email</h3>
          <p>pluggedstore@gmail.com</p>
        </div>
        <div>
          <h3>Phone</h3>
          <p>+234-814-274-4915</p>
        </div>
       

      </div>

    </div>

   </div>
  );
}

export default Contact;