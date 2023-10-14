import React from "react";
import "../App.css";
const HomeCard = ({item}) => {
    
  return (
    <div className="w-[405px] h-[266px] shadow-md cursor-pointer  bg-white rounded-2xl">
      <div className="w-[46px] h-[46px] rounded-2xl tag text-center p-2 ">
        <div className="number text-white text-lg font-bold">
          {item.id} <span className="text-sm  align-text-top">{item.id_tag}</span>
        </div>
        <div className="cardtop m-auto">
          <p className="w-[341px] font-bold text-center pl-6 leading-30 font-italic text-[22px] ">
            {item.title}
          </p>
          <p className="w-[341px] text-center pl-6 m-auto text-[16px] tracking-wider">
            {item.content}
          </p>
        </div>
        <div className="cardbottom flex text-start w-[341px] h-[113px] rounded-md  m-auto ml-6 mt-2 bg-gray-50">
          <div className="due mt-6 w-[115px] h-[84px] ml-4">
            <div className="heading text-blue-700 text-md font-bold">Due date</div>
              <p className="text-md"> {item.due} </p>
            
          </div>
          <div className="penalty pl-2 mt-6 w-[186px] h-[84px]">
            <div className="heading font-bold text-red-500 text-md">Penalty fees</div>
            <div className="res">
              <p> ₹{item.penality} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
