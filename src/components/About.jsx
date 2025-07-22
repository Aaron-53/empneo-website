import React from "react";

function About() {
  return (
    <div className="w-[100vw] h-[100vh] ">
      <div className="flex items-center justify-center text-7xl">
        EXPLORE THE STORY
      </div>
      <div className=" w-10 h-10 bg-amber-600"></div>
      <div className="flex text-center p-36">
        <p>
          Fantastic Beasts and Where to Find Them contains the history of
          magizoology and describes 85 magical species found around the world.
        </p>
      </div>
      <div className=" w-10 h-10 bg-amber-600"></div>
      <div className="flex text-center py-[100]" >
        <p>
        Newton Artemis Fido 'Newt' Scamander is author of Fantastic Beasts and Where 
          to Find Them, born in 1897. According to the 'About the Author' section of the 
          book, Scamander became a magizoologist because of his own interest in fabulous 
          beasts and the encouragement of his mother.
        </p>
      </div>
      <div className=" w-10 h-10 bg-amber-600"></div>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          More Info
        </button>
      </div>
    </div>
  );
}

export default About;
