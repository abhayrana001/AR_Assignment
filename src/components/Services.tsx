import React from 'react';

const services = [
  { icon: '💻', title: 'Web Development', desc: 'Building responsive and modern websites' },
  { icon: '⚙️', title: 'UI/UX Design', desc: 'Designing intuitive and elegant user interfaces' },
  { icon: '🚀', title: 'Performance Optimization', desc: 'Ensuring fast and reliable user experience' },
  { icon: '🔒', title: 'Security Best Practices', desc: 'Secure coding and data protection' },
];

const Services: React.FC = () => {
  return (
    <section className=" p-8 bg-gray-100 text-center scroll-mt-20 md:pb-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map(service => (
          <div
            key={service.title}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:cursor-pointer transition-shadow duration-300"
          >
            <div className="text-4xl mb-3">{service.icon}</div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
