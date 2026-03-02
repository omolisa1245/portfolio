import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { X } from "lucide-react";
import native1 from "../../assets/native1.png";
import native2 from "../../assets/native2.png";
import native3 from "../../assets/native3.png";
import native4 from "../../assets/native4.png";
import native5 from "../../assets/native5.png";
import native6 from "../../assets/native6.png";

import food1 from "../../assets/food1.png";
import food2 from "../../assets/food2.png";
import food3 from "../../assets/food3.png";
import food4 from "../../assets/food4.png";
import food5 from "../../assets/food5.png";
import food6 from "../../assets/food6.png";
import food7 from "../../assets/food7.png";

import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";
import car5 from "../../assets/car5.png";
import car6 from "../../assets/car6.png";
import car7 from "../../assets/car7.png";
import car8 from "../../assets/car8.png";

import just1 from "../../assets/just1.png";
import just2 from "../../assets/just2.png";
import just3 from "../../assets/just3.png";
import just4 from "../../assets/just4.png";
import just5 from "../../assets/just5.png";
import just6 from "../../assets/just6.png";
import just7 from "../../assets/just7.png";
import just9 from "../../assets/just9.png";


import player1 from "../../assets/player1.png";
import player2 from "../../assets/player2.png";
import player3 from "../../assets/player3.png";
import player4 from "../../assets/player4.png"

const PortfolioSection = ({ title, description, images }) => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center mb-20">

      {/* Left Content */}
      <div className="flex-1 -mt-32 space-y-4">
        <div className="flex items-center gap-3 text-orange-500">
          <FaGithub size={28} />
          <span className="font-semibold">GitHub Project</span>
        </div>

        <h2 className="text-2xl md:text-3xl text-white font-bold">{title}</h2>

        <p className="text-gray-50 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Right Images */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            onClick={() => setSelectedImage(img)}
            className="rounded-xl shadow-md hover:scale-105 transition duration-300 cursor-pointer"
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">

          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-40 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* Large Image */}
          <img
            src={selectedImage}
            alt=""
            className="max-w-[90%] z-999 max-h-[85%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

const Portfolio = () => {
  return (
    <div
      id="Portfolio"
      className="w-full px-6 md:px-12 lg:px-20 py-16 bg-stone-900"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-26 text-white">
        My Portfolio
      </h1>

      <PortfolioSection
        title="Kiddies Store E-commerce"
        description="Kiddies Treasures is a one-stop shop for all newborn, baby, and toddler needs, offering fabulous products at incredible prices with convenient shopping and fast delivery. Designed to simplify parenting life, the platform eliminates the stress of traditional shopping while ensuring comfort and accessibility."
        images={[native1, native2, native3, native4, native5, native6]}

      />
      <div className="w-full lg:w-[50%] -mt-20 px-4 lg:-ml-5 xl:-ml-7">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* GitHub */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              GitHub :
            </h2>

            <a
              href="https://github.com/omolisa1245/kiddiesplace.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base md:text-lg bg-white text-black px-6 py-2 rounded-lg hover:bg-amber-600 hover:text-white transition duration-300 text-center"
            >
              View Repository
            </a>
          </div>

          {/* Website */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              Website :
            </h2>

            <a
              href="https://kiddiesplace-tdse.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base md:text-lg bg-white text-black px-6 py-2 rounded-lg hover:bg-amber-600 hover:text-white transition duration-300 text-center"
            >
              Visit Website
            </a>
          </div>

        </div>
      </div>

      <hr className="mt-20 border-gray-300 mb-18" />

      <PortfolioSection
        title="Food E-commerce Website"
        description="NativePot is a premium local food vendor brand founded in 2025, delivering authentic Nigerian dishes with exceptional quality. The platform captures cultural richness, immersive dining experiences, and seamless ordering, reflecting the brand’s passion for tradition and taste."
        images={[food1, food2, food3, food4, food5, food6, food7]}
      />

      <div className="w-full lg:w-[50%] px-4 -mt-40 lg:-ml-5 xl:-ml-7">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* GitHub */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              GitHub :
            </h2>

            <a
              href="https://github.com/omolisa1245/nativepot.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base md:text-lg bg-white text-black px-6 py-2 rounded-lg hover:bg-amber-600 hover:text-white transition duration-300 text-center"
            >
              View Repository
            </a>
          </div>

          {/* Website */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              Website :
            </h2>

            <a
              href="https://nativepot-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base md:text-lg bg-white text-black px-6 py-2 rounded-lg hover:bg-amber-600 hover:text-white transition duration-300 text-center"
            >
              Visit Website
            </a>
          </div>

        </div>
      </div>
      <hr className="mt-20 border-gray-300 mb-18" />

      <PortfolioSection
        title="Car Services Website"
        description="This vehicle transport platform focuses on safe, timely, and cost-effective car delivery services for individuals and companies. Built with reliability and customer satisfaction in mind, the system emphasizes efficiency, competitive pricing, and trust."
        images={[car1, car2, car3, car4, car5, car6, car7, car8]}
      />

      <div className="w-full lg:w-[50%] px-4 -mt-40 lg:-ml-5 xl:-ml-7">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* GitHub */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              GitHub :
            </h2>

            <a
              href="https://github.com/omolisa1245/ride-along.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base md:text-lg bg-white text-black px-6 py-2 rounded-lg hover:bg-amber-600 hover:text-white transition duration-300 text-center"
            >
              View Repository
            </a>
          </div>

          {/* Website */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              Website :
            </h2>

            <a
              href="https://ride-along-l49g.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base md:text-lg bg-white text-black px-6 py-2 rounded-lg hover:bg-amber-600 hover:text-white transition duration-300 text-center"
            >
              Visit Website
            </a>
          </div>

        </div>
      </div>
      <hr className="mt-20 border-gray-300 mb-18" />

      <PortfolioSection
        title="Musical Instrument Website"
        description="An online platform providing accessible one-on-one music lessons focused on string instruments. The system enables remote learning with expert instructors, flexible scheduling, and a safe virtual environment, helping students grow their musical passion."
        images={[just1, just2, just3, just4, just5, just6, just7, just9]}
      />

      <div className="w-full lg:w-[50%] px-4 -mt-40 lg:-ml-5 xl:-ml-7">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* GitHub */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              GitHub :
            </h2>

            <a
              href="https://github.com/omolisa1245/justring.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base md:text-lg bg-white text-black px-6 py-2 rounded-lg hover:bg-amber-600 hover:text-white transition duration-300 text-center"
            >
              View Repository
            </a>
          </div>

          {/* Website */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              Website :
            </h2>

            <a
              href="https://justring-c62t.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base md:text-lg bg-white text-black px-6 py-2 rounded-lg hover:bg-amber-600 hover:text-white transition duration-300 text-center"
            >
              Visit Website
            </a>
          </div>

        </div>
      </div>
      <hr className="mt-20 border-gray-300 mb-18" />

      <PortfolioSection
        title="Musical Player App"
        description="The Musical Player App is a modern, interactive web application designed to deliver a seamless and immersive music listening experience. Built with a focus on performance, responsiveness, and user-friendly design, the app allows users to play, pause, skip, and repeat tracks effortlessly while enjoying a visually engaging interface."
        images={[player1, player2, player3, player4]}
      />

      <div className="w-full lg:w-[50%] px-4 lg:-ml-5 xl:-ml-7 -mt-67">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* GitHub */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              GitHub :
            </h2>

            <a
              href="https://github.com/omolisa1245/Goplay.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base md:text-lg bg-white text-black px-6 py-2 rounded-lg hover:bg-amber-600 hover:text-white transition duration-300 text-center"
            >
              View Repository
            </a>
          </div>

          {/* Website */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              Website :
            </h2>

            <a
              href="https://goplay-raj7.vercel.app/s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base md:text-lg bg-white text-black px-6 py-2 rounded-lg hover:bg-amber-600 hover:text-white transition duration-300 text-center"
            >
              Visit Website
            </a>
          </div>

        </div>
      </div>

      <hr className="mt-20 border-gray-300 mb-18" />
    </div>
  );
};

export default Portfolio;