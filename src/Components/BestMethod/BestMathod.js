import React from "react";

const BestMathod = () => {
  const listItems = [
    "Watch language learning videos",
    "Listen to the children's songs",
    "Read language books and stories",
    "Play online interactive language games",
    "Print language learning flashcards",
    "Print language alphabet worksheets",
    "Practice writing in the target language",
    "Take online language classes",
    "Hire a foreign language speaking babysitter",
    "Reward for language learning activities",
  ];

  return (
    <div className="py-8 shadow-md rounded-md border my-10">
      <div className="max-w-full px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-8">
          Best 10 methods to learn a second language
        </h2>
        <div className="grid grid-cols-1">
          {listItems.map((item, index) => (
            <p key={index} className=" p-1 font-bold text-xl">
              <span> {index + 1} </span> <span>{item}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestMathod;
