import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <h1 className="title-font sm:text-4xl text-center py-6 text-3xl mb-4 font-medium text-gray-900">
        Helping you feel confident, wherever life takes you.
      </h1>

      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://images.unsplash.com/photo-1588398478692-d119ca406f7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Experience the Beauty of
            <br className="hidden lg:inline-block" />
            Perfectly Lashed Eyes with Our Studio Services.
          </h1>
          <p className="mb-8 leading-relaxed">
            At our lash studio, we specialize in enhancing your natural beauty
            by crafting the perfect set of lashes for your unique eye shape and
            style. From classic to volume, we use only the highest quality
            materials to ensure your lashes look and feel amazing. Our expert
            lash technicians will guide you through the process and leave you
            feeling confident and beautiful. Come see us and unleash the power
            of your lashes!
          </p>
          <div className="flex justify-center">
            <button
              className="inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg
            transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110
            "
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
