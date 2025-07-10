import React from 'react';

const stack = ['React', 'TypeScript', 'Tailwind CSS'];

const Development: React.FC = () => {
  return (
    <section className=" h-auto p-8 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Development Stack</h2>
      <div className="flex flex-wrap gap-4 justify-center md:mt-10 md:mb-20">
        {stack.map(tech => (
          <span key={tech} className="bg-blue-100 text-blue-800 px-5 py-1 rounded-full text-lg">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Development;