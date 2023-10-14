import React from 'react'
import img from '../pages/Rectangle 376.png'
import img1 from '../pages/image 1 (1).png'
const InfoCard = () => {
  return (
    <div className='w-[405px] h-[477px] ml-8 shadow-lg my-6  rounded-lg'>
        <img src={img} alt="" />
        <div className="title font-bold my-4 text-[20px] px-2">
        Michael Jackson
        </div>
        <p className='w-[365px] text-[16px] my-4 px-2'>I will do business evaluation and corporate services</p>
        <div className="rating w-[112px] h-[30px] ">
            <div className="icon w-[24px] h-[24px] flex mt-4">
              <img src="/assests/star-fill.png" alt="" />
              <span className="text-blue-500 pl-2">4.8</span>
              <span className="pl-2 ">(89)</span>
            </div>
          </div>
          <div className="button">
            <button className='bg-blue-500 w-[365px] font-bold rounded-lg  text-white ml-4 py-2 mt-6'>View services</button>
          </div>
    </div>
  )
}

export default InfoCard
