import React from "react";
import Image from "next/image";
import Link from "next/link";
const Work = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Latest Work
        </h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-8">
            <Image
              src="https://images.unsplash.com/photo-1542647879-d84f68115c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80"
              alt="Picture of the author"
              width={500}
              height={500}
              className="rounded-lg shadow-md hover:shadow-xl transition duration-200 cursor-pointer"
            />
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8">
            <Image
              src="https://images.unsplash.com/photo-1542647879-d84f68115c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80"
              alt="Picture of the author"
              width={500}
              height={500}
              className="rounded-lg shadow-md hover:shadow-xl transition duration-200 cursor-pointer"
            />
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8">
            <Image
              src="https://images.unsplash.com/photo-1542647879-d84f68115c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80"
              alt="Picture of the author"
              width={500}
              height={500}
              className="rounded-lg shadow-md hover:shadow-xl transition duration-200 cursor-pointer"
            />
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8">
            <Link
              href="/"
              className="rounded-lg shadow-md hover:shadow-xl transition duration-200 cursor-pointer"
            >
              <Image
                src="https://images.unsplash.com/photo-1542647879-d84f68115c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80"
                alt="Picture of the author"
                width={500}
                height={500}
                className="rounded-lg shadow-md hover:shadow-xl transition duration-200 cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/gallery">
            <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition duration-200">
              View More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
