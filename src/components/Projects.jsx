import React from "react";
import portfolioImage from "../assets/portfolio-image.png";
import gameImage from "../assets/game.jpg";
import knightsTourImage from "../assets/knights-tour-image.png";

const Projects = () => {
  return (
    <div className="relative p-6 text-white">
      <div className="pt-6 text-3xl text-white">Projects</div>

      <div className="mx-auto grid max-w-[1240px] gap-8 py-[5rem] md:grid-cols-3">
        <div className="my-8 flex w-full flex-col rounded-lg p-4 shadow-xl shadow-white duration-300 hover:scale-105 md:my-0">
          <img
            className="w-50 h-50 mx-auto mt-[-3rem] bg-transparent"
            src={portfolioImage}
            alt="/"
          />
          <h2 className="py-8 text-center text-2xl font-bold">
            Portfolio Site
          </h2>
          <div className="text-center font-medium">
            <p className="mx-8 border-b py-2">The site you are on right Now!</p>
            <p className="mx-8 border-b py-2">
              Made using React and Tailwind CSS
            </p>
          </div>
          <button className="text mx-auto my-6 w-[200px] rounded-md bg-black px-6 py-3">
            Github Repo
          </button>
        </div>

        <div className="my-8 flex w-full flex-col rounded-lg p-4 shadow-xl shadow-white duration-300 hover:scale-105 md:my-0">
          <img
            className="w-50 h-50 mx-auto mt-[-3rem] bg-transparent"
            src={gameImage}
            alt="/"
          />
          <h2 className="py-8 text-center text-2xl font-bold">Obstacle game</h2>
          <div className="text-center font-medium">
            <p className="mx-8 border-b py-2">Made for a course module</p>
            <p className="mx-8 border-b py-2">Made using Arduino C</p>
          </div>
          <button className="text mx-auto my-6 w-[200px] rounded-md bg-black px-6 py-3">
            Github Repo
          </button>
        </div>

        <div className="my-8 flex w-full flex-col rounded-lg p-4 shadow-xl shadow-white duration-300 hover:scale-105 md:my-0">
          <img
            className="w-50 h-50mx-auto mt-[-3rem] bg-transparent"
            src={knightsTourImage}
            alt="/"
          />
          <h2 className="py-8 text-center text-2xl font-bold">
            Knights tour solver
          </h2>
          <div className="text-center font-medium">
            <p className="mx-8 border-b py-2">Solves the Knights tour puzzle</p>
            <p className="mx-8 border-b py-2">made using Python, Pygame</p>
          </div>
          <button className="text mx-auto my-6 w-[200px] rounded-md bg-black px-6 py-3">
            Github Repo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
