import React from "react";
import { cardData } from "../../database/db";
import { Skills } from "./Skills";
export const Introduction = () => {
  return (
    
    <section className="text-gray-600 body-font overflow-hidden bg-gray-900">
  <div className="text-center mt-5">
    <span className="text-center text-white text-2xl mt-2 font-medium bg-indigo-500 rounded-md p-2">Welcome to Our Skills</span></div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          {cardData.map((card,index)=>{
      return  <Skills key={index} category={card.category} title={card.title} description={card.description} />
          })}
        </div>
      </div>
    </section>
  );
};
