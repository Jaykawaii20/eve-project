// "use client";
// import React from "react";
// import { Poppins } from "next/font/google";
// import useOnboarding from "./useOnboarding";

// const poppins = Poppins({
//   weight: "600",
//   subsets: ["latin"],
// });
// const CommonCard = (props) => {
  
//   return (
//     <div className="bg-white sm:bg-opacity-[0.50] ml-[6%] max-xl:w-[40%] xl:w-[21%] max-md:w-[88%] p-[40px] rounded-[12px] flex flex-col  items-center">
//           <div className="flex flex-col">
//             <p className="text-[32px] text-[#589CFF]">Eve</p>
//             <div>
//               <p className="text-[32px] max-sm:text-[24px] mt-[40px] font-[700] text-[#2F2F2F]">
//                 We want to keep anonymity for our users
//               </p>
//               <p className="text-[16px] font-[500] text-[#4F4F4F]">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Pariatur autem, quae quos at veritatis officia ipsum repellat
//                 voluptate ipsam, officiis, obcaecati ab blanditiis.
//               </p>
//             </div>
//           </div>

//           {props.commonCard === "mobile" ? (
//             <div
//               onClick={() => props.commonCardFun()}
//               className="md:hidden cursor-pointer flex w-[250px] justify-center items-center gap-[8px] bg-[#589CFF] mt-[32px] py-[8px] max-sm:px-[30px] sm:px-[16px] rounded-[12px]"
//             >
//               <img src="/images/svgs/forward-circle.svg" alt="img" />

//               <p className="text-[16px] font-[500] text-white">Continue</p>
//             </div>
//           ) : (
//             <div className="mt-[100px]">
//               <div
//                 className={`flex items-center w-[100%] gap-[20px] text-[${
//                   props.tab === 1 ? "24px" : "12px"
//                 }] font-[${props.tab === 1 ? "600" : "500"}] bg-${
//                   props.tab === 1 ? "white" : "transparent"
//                 } rounded-[${props.tab === 1 ? "12px" : "0px"}]
//                   py-[${props.tab === 1 ? "4px" : "0px"}] px-[${
//                   props.tab === 1 ? "12px" : "0px"
//                 }]
//                   text-[${props.tab === 1 ? "#589CFF" : "#4F4F4F"}]`}
//               >
//                 <p
//                   className={`${props.tab===1? "h-[24px]":"h-[16px]"} ${props.tab===1? "w-[24px]":"w-[16px]"} border border-[#4F4F4F] rounded-full bg-[${
//                     props.tab === 1 ? "#589CFF" : "white"
//                   }]`}
//                 >
//                   {" "}
//                 </p>
//                 <p className="whitespace-nowrap">Detailed information</p>
//               </div>
//               <div
//                 className={`flex items-center w-[100%] gap-[20px] text-[${
//                   props.tab === 2 ? "24px" : "12px"
//                 }]
//                   bg-${props.tab === 2 ? "white" : "transparent"} rounded-[${
//                   props.tab === 2 ? "12px" : "0px"
//                 }]
//                   py-[${props.tab === 2 ? "4px" : "0px"}] px-[${
//                   props.tab === 2 ? "12px" : "0px"
//                 }]
//                   font-[${props.tab === 2 ? "600" : "500"}]  text-[${
//                   props.tab === 2 ? "#589CFF" : "#4F4F4F"
//                 }] my-[20px]`}
//               >
//                <p
//                   className={`${props.tab===2? "h-[24px]":"h-[16px]"} ${props.tab===2? "w-[24px]":"w-[16px]"} border border-[#4F4F4F] rounded-full bg-[${
//                     props.tab === 2 ? "#589CFF" : "black" }]`}
//                 >
//                   {" "}
//                 </p>

//                 <p>Pick   interests   </p>
//               </div>
//               <div
//                 className={`flex items-center w-[100%] gap-[20px] text-[${
//                   props.tab === 3 ? "24px" : "12px"
//                 }]
//                   bg-${props.tab === 3 ? "white" : "transparent"} rounded-[${
//                   props.tab === 3 ? "12px" : "0px"
//                 }]
//                   py-[${props.tab === 3 ? "4px" : "0px"}] px-[${
//                   props.tab === 3 ? "12px" : "0px"
//                 }]
//                   font-[${props.tab === 3 ? "600" : "500"}]  text-[${
//                   props.tab === 3 ? "#589CFF" : "#4F4F4F"
//                 }]`}
//               >
//                <p
//                   className={`${props.tab===3? "h-[24px]":"h-[16px]"} ${props.tab===3? "w-[24px]":"w-[16px]"} border border-[#4F4F4F] rounded-full bg-[${
//                     props.tab === 3 ? "#589CFF" : "white"
//                   }]`}
//                 >
//                   {" "}
//                 </p>

//                 <p className="whitespace-nowrap"> Create your avatar</p>
//               </div>
//             </div>
//           )}
//         </div>
//   );
// };

// export default CommonCard;

import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const CommonCard = (props) => {
  const renderMobileContent = () => (
    <div
      onClick={props.commonCardFun}
      className="md:hidden cursor-pointer flex w-[250px] justify-center items-center gap-[8px] bg-[#589CFF] mt-[32px] py-[8px] max-sm:px-[30px] sm:px-[16px] rounded-[12px]"
    >
      <img src="/images/svgs/forward-circle.svg" alt="img" />
      <p className="text-[16px] font-[500] text-white">Continue</p>
    </div>
  );

  const renderTabContent = (tabNumber, label) => (
    <div
      className={`flex mt-[24px] items-center w-[100%] gap-[20px] text-[${props.tab === tabNumber ? "30px" : "14px"}] font-[${props.tab === tabNumber ? "600" : "500"}] bg-${props.tab === tabNumber ? "white" : "transparent"} rounded-[${props.tab === tabNumber ? "12px" : "0px"}]
        py-[${props.tab === tabNumber ? "4px" : "0px"}] px-[${props.tab === tabNumber ? "12px" : "0px"}]
        text-[${props.tab === tabNumber ? "#589CFF" : "#4F4F4F"}]`}
    >
      <p
        className={`${props.tab === tabNumber ? "h-[24px]" : "h-[16px]"} ${props.tab === tabNumber ? "w-[24px]" : "w-[16px]"} border border-[#4F4F4F] rounded-full bg-[${props.tab === tabNumber ? "#589CFF" : "white"}]`}
      >
        {" "}
      </p>
      <p className="whitespace-nowrap ">{label}</p>
    </div>
  );

  return (
    <div className="bg-white sm:bg-opacity-[0.50] ml-[8%] max-xl:w-[40%] xl:w-[28%] max-md:w-[88%] p-[40px] rounded-[12px] xl:h-[80%] flex flex-col items-center">
      <div className="flex flex-col">
        <p className="text-[32px] text-[#589CFF]">Eve</p>
        <div>
          <p className={`text-[32px] max-sm:text-[24px] mt-[40px] font-[700] text-[#2F2F2F]`}>
            We want to keep anonymity for our users
          </p>
          <p className="text-[16px] font-[500] text-[#4F4F4F]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur autem, quae quos at
            veritatis officia ipsum repellat voluptate ipsam, officiis, obcaecati ab blanditiis.
          </p>
        </div>
      </div>

      {props.commonCard === "mobile" ? renderMobileContent() : (
        <div className="mt-[100px]">
          {renderTabContent(1, "Detailed information")}
          {renderTabContent(2, "Pick interests")}
          {renderTabContent(3, "Create your avatar")}
        </div>
      )}
    </div>
  );
};

export default CommonCard;
