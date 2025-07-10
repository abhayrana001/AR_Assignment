import React, { useState, type ChangeEvent } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;

  setForm((prevForm) => ({
    ...prevForm,
    [name]: value,
  }));

  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: '', // Clear error for this specific field
  }));
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errs: typeof errors = {};

    if (!form.name) errs.name = 'Name is required';
    if (!form.email) errs.email = 'Email is required';
    else if (!validateEmail(form.email)) errs.email = 'Invalid email';
    if (!form.message) errs.message = 'Message is required';
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert('Message sent');
      setForm({ name: '', email: '', message: '' }); // Clear form after submission
    }
  };

  return (
    <section className="p-8 bg-gray-800 scroll-mt-20">
      <h2 className="text-2xl text-white md:text-3xl font-semibold text-center mb-10">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6"
      >
        <div>
          <input
            type="text"
            placeholder="Name"
            name='name'
            value={form.name}
           onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-blue-400"
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            name='email'
            value={form.email}
           onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-blue-400"
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <textarea
            rows={4}
            placeholder="Message"
            name='message'
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-blue-400"
          />
          {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
