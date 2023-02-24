import React from "react";

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            About Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-left">
            Welcome to our lash studio section where we specialize in enhancing
            your natural beauty with lash extensions. Our team of experienced
            lash artists have been trained in the latest techniques to ensure
            that you leave feeling confident and beautiful.
          </p>
          <br />
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-left">
            We offer a range of lash styles including classic, volume and hybrid
            to cater to each individual's unique preferences. Our lash
            extensions are made of high-quality materials to ensure that they
            look and feel natural. We also offer lash lift and tinting services
            for those who prefer a more natural look.
          </p>
          <br />
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-left">
            Our studio is designed with your comfort in mind. We use the most
            comfortable and hygienic equipment to ensure that your experience is
            not only enjoyable but also safe. We also take extra precautions to
            ensure that our tools are sanitized before and after every
            appointment.
          </p>
          <br />
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-left">
            At our lash studio, we believe in using cruelty-free products that
            are safe for our clients and the environment. Our team is dedicated
            to providing exceptional customer service and ensuring that each
            client leaves feeling satisfied with their lash experience.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition duration-200">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
