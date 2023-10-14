import React from 'react'
import InfoCard from '../components/InfoCard'
import img from '../pages/Rectangle 376.png'
import img1 from '../pages/image 1 (1).png'
import { useNavigate } from 'react-router-dom'

const Page = ({info}) => {
  const navigate=useNavigate();
  const handleback=()=>{
      navigate("/");
  }
  return (
    <div>
      <div>
      <div className="top-bar px-24 w-1536 min-h-85 flex justify-between">
        <div className="top-left flex">
          <ul className="flex">
            <li className="pt-2 px-2">
              <img
                src={img1}
                className="w-35 h-10 m-auto mt-0.5"
                alt=""
              />
            </li>
            <li className=" px-2">
              <button className="font-Poppins text-18 w-140 h-62 font-bold py-1 px-3 m-3 leading-27 tracking-normal text-left">
                Solutions
              </button>
            </li>
            <li className="px-2">
              <button className="font-Poppins text-18 w-140 h-62 font-bold py-1 px-3 m-3 leading-27 tracking-normal text-left">
                Featuers
              </button>
            </li>
            <li className="px-2">
              <button className="font-Poppins text-18 w-140 h-62 font-bold py-1 px-3 m-3 leading-27 tracking-normal text-left">
                About
              </button>
            </li>
          </ul>
        </div>
        <div className="top-right">
          <button onClick={handleback} className="border  border-red-600 py-1 px-3 mr-2 rounded font-bold text-red-700">
          back
          </button>
          <button className="border  border-blue-600 py-1 px-3  rounded font-bold text-blue-700">
            login
          </button>
          <button className="bg-blue-600 py-1 px-3 rounded m-3 font-bold text-white hover:bg-blue-800">
            Register
          </button>
        </div>
      </div>

      <section className="middle flex ">
        <div className="left w-[515px] h-[960px] mt-[80px]  ml-[120px]">
          <div className="name w-[303px]  top-[9px] ">
            <p className="font-bold text-3xl my-4 w-[515px]">{info.name}</p>
            <p className="pt-2 pr-14 w-[515px] text-lg ">
             {info.intro}
            </p>
          </div>
          <div className="rating w-[112px] h-[30px] ">
            <div className="icon w-[24px] h-[24px] flex mt-6">
              <img src={info.image} alt="" />
              <span className="text-blue-500 pl-2">{info.rating}</span>
              <span className="pl-2 ">({info.reviewCount})</span>
            </div>
          </div>
          <div className="cardwithprice shadow-lg w-[515px] h-[216px]  mt-8">
            <div className="  rounded-xl tasks flex justify-between py-6 px-4 text-[20px]">
              <p>{info.taskComplexity} </p>
              <p>{info.price}</p>
            </div>
            <div className="deliverdays px-4 font-400">
              <div className="icon flex">
                <img
                  src="/assests/calendar.png"
                  className="w-[24px] h-[24px] mt-1 mr-2"
                  alt=""
                />
                <span className="w-[424px] h-[32px] text-[20px]">
                  {info.deliveryTime}
                </span>
              </div>
              <div className="buttons mt-6 ml-4 font-bold">
                <button className="  bg-blue-500 text-[16px] text-white py-2 px-8 ml-3 rounded-xl">
                  Request Proposal
                </button>
                <button className=" border-2 border-blue-600 text-[16px] py-2 px-8 ml-6 text-blue-600  rounded-xl">
                  Chat with me
                </button>
              </div>
            </div>
          </div>
          <div className="bottomcard shadow-lg p w-[515px]">
            <div className="px-4 pb-2 ">
              <p className="  font-bold rounded-lg ml--[22px] text-[35px] mt-[77px]">
                What people say?
              </p>
              <p className="text-[20px]">
                I cannot express enough gratitude for the support Micheal has
                provided in managing my personal finances. Their attention to
                detail and deep understanding of financial markets has ensured
                that my investments are in safe hands. I highly recommend their
                services to anyone seeking financial guidance.
              </p>
              <div className="iconsgroup flex justify-center">
                <div className="rectangle w-[32px] mt-14 h-[10px] bg-blue-500 rounded-lg"></div>
                <div className="rectangle w-[10px] mt-14 ml-2 h-[10px] bg-gray-500 rounded-lg"></div>
                <div className="rectangle w-[10px] mt-14 ml-2 h-[10px] bg-gray-500 rounded-lg"></div>
                <div className="rectangle w-[10px] mt-14 ml-2 h-[10px] bg-gray-500 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="right ml-[30px]">
          <div className="image w-[733px] h-[412px] mt-[90px]  relative">
            <img src={img} alt="" />

            <div className="iconsgroup left-[300px] py-4 absolute bottom-0 flex justify-center">
              <div className="rectangle w-[32px] mt-14 h-[10px] bg-blue-500 rounded-lg"></div>
              <div className="rectangle w-[10px] mt-14 ml-2 h-[10px] bg-gray-500 rounded-lg"></div>
              <div className="rectangle w-[10px] mt-14 ml-2 h-[10px] bg-gray-500 rounded-lg"></div>
              <div className="rectangle w-[10px] mt-14 ml-2 h-[10px] bg-gray-500 rounded-lg"></div>
            </div>
          </div>
          <div className="content">
            <div className="title">
              <p className="font-Poppins font-bold text-[35px] mt-6 leading-[52.5px]">
                About {info.name}
              </p>
              <ul className="flex mt-4">
                <li className="w-[186px]">
                  <span className="font-bold text-gray-600">From</span>
                  <p>{info.about.from}</p>
                </li>
                <li className="w-[186px]">
                  <span className="font-bold text-gray-600">
                    Partners since
                  </span>
                  <p>{info.about.partnerSince}</p>
                </li>
                <li className="w-[186px]">
                  <span className="font-bold text-gray-600">
                    Average Response Time
                  </span>
                  <p>{info.about.averageResponseTime}</p>
                </li>
              </ul>
            </div>
            <div className="about">
              <p className="font-bold text-gray-600 mt-6">About</p>
              <p className="w-[733px] text-[20px] pr-14">
               {info.about.description}
              </p>
              <div className="points flex mr-10">
                <div>
                  <p className="my-4 font-bold text-gray-600">
                    SERVICES I OFFER
                  </p>
                  <ul className="list-disc ml-4">
                    {
                      info.about.services.map((item)=>(
                        <li>{item}</li>
                      ))
                    }
                   
                  </ul>
                </div>
                <div className="ml-28">
                  <p className="my-4 font-bold  text-gray-600">Why Me?</p>
                  <ul class="list-disc ">
                  {
                      info.about.benefits.map((item)=>(
                        <li>{item}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



<section className="w-[1279px] h-[562px] mx-[129px]  my-20">

      <div className="title w-[733px] ">
        <p className="font-bold text-[35px] leading-[52.5px]">Recommended for you</p>
        <div className="flex">
        <InfoCard/>
        <InfoCard/>
        <InfoCard/>
        </div>
      </div>
</section>









      <footer className="footer w-[1536px] h-[398px] text-white ">
        <div className="flex justify-between">
       <div className="left py-10 px-16">
            <div className="title">
              <img src="assests/image2.png" className="color-white" alt="" />
              <p className="w-[278px] pt-3">India's first platform dedicated to simplifying partner search</p>
            </div>
       </div>
       <div className="middle">
        <table className="ml-10">
          <tr className="p-4">
            <th className="pt-10">Compnay</th>
            <th className="pt-10">solutions</th>
            <th className="pt-10">resuorces</th>
            <th className="pt-10">Support</th>
            <td className="pt-10 px-10">Legal</td>
          </tr>
          <tr className="p-4">
            <td className="px-10 pt-6">About</td>
            <td className="px-10 pt-6">Search</td>
            <td className="px-10 pt-6">Blogs</td>
            <td className="px-10 pt-6">Help</td>
            <td className="px-10 pt-6">Privacy</td>
          </tr>
          <tr className="p-4">
            <td className="px-10 pt-6">Pricing</td>
            <td className="px-10 pt-6">Connect</td>
            <td className="px-10 pt-6">Forms</td>
            <td className="px-10 pt-6">Contact-us</td>
            <td className="px-10 pt-6">Terms</td>
          </tr>
          <tr className="p-4">
            <td className="px-10 pt-6">Careers</td>
            <td className="px-10 pt-6">Reasearch</td>
            <td className="px-10 pt-6"></td>
            <td className="px-10 pt-6"></td>
            <td className="px-10 pt-6">Accessiibity</td>
          </tr>
          <tr className="p-4">
            <td className="px-10 pt-6"></td>
            <td className="px-10 pt-6">Academy</td>
            <td className="px-10 pt-6"></td>
            <td className="px-10 pt-6"></td>
            <td className="px-10 pt-6"></td>
          </tr>
        </table>
       </div>
       <hr className="bg-white h-px "/>
       </div>
       <div className="endline flex justify-between px-16 pt-16"><p>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p> <span>
              <div className="icons flex">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMLhiZcxrJ2Us7U_nhEP4zrER_sGUDYnCOQ&usqp=CAU" className="rounded-full w-[24px] h-[24px] mr-6" alt="" />
              <img src="data:image/png;base64,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" className="rounded-full w-[24px] h-[24px] mr-6" alt="" />
              <img src="data:image/png;base64,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" className="rounded-full w-[24px] h-[24px] mr-6" alt="" />
              <img src="data:image/png;base64,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" className="rounded-full w-[24px] h-[24px] mr-6" alt="" />
              </div>
              </span></div>
      </footer>
    </div>

    </div>
  )
}

export default Page
