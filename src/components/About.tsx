import React from "react";
const About: React.FC = () => {
  return (
    <section className=" p-8 text-center bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">About Us</h2>
      <img src={"/aboutus.avif"} alt="avatar" className="mx-auto my-5  rounded-full w-50 h-50" />
      <p className="md:text-xl max-w-xl mx-auto">We stepped into the IT world few years ago. Since then, we have built a strong squad of 30+ highly qualified IT professionals. Our goal has always been to provide premium quality IT solutions to clients of all scales and with different requirements.</p>
    </section>
  );
};

export default About;