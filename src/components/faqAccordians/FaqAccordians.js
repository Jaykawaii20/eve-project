import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
const FaqAccordians = ({ setAccordianDetail }) => {
  const [accordian, setAccordian] = useState([
    {
      name: "Features",
      childs: [
        {
          name: "Create and update an Eve Account",
          subChilds: [
            {
              name: "Create An Eve Account",
              detail: [
                "1 Yes! You can purchase a license that you can share with your entire",
                "2 Yes! You can purchase a license that you can share with your entire",
                "3 Yes! You can purchase a license that you can share with your entire",
                "4 Yes! You can purchase a license that you can share with your entire",
                "5 Yes! You can purchase a license that you can share with your entire",
              ],
            },
            {
              name: "Create An Eve Account child 2",
              detail: [
                "1 Yes! You can purchase a license that you can share with your entire",
                "2 Yes! You can purchase a license that you can share with your entire",
                "3 Yes! You can purchase a license that you can share with your entire",
                "4 Yes! You can purchase a license that you can share with your entire",
                "5 Yes! You can purchase a license that you can share with your entire",
              ],
            },
          ],
        },
        {
          name: "Create and update an 2 Account",
          subChilds: [
            {
              name: "Create An Eve Account 2",
              detail: [
                "1 Yes! You can purchase a license that you can share with your entire",
                "2 Yes! You can purchase a license that you can share with your entire",
                "3 Yes! You can purchase a license that you can share with your entire",
                "4 Yes! You can purchase a license that you can share with your entire",
                "5 Yes! You can purchase a license that you can share with your entire",
              ],
            },
            {
              name: "Create An Eve Account subchild",
              detail: [
                "1 Yes! You can purchase a license that you can share with your entire",
                "2 Yes! You can purchase a license that you can share with your entire",
                "3 Yes! You can purchase a license that you can share with your entire",
                "4 Yes! You can purchase a license that you can share with your entire",
                "5 Yes! You can purchase a license that you can share with your entire",
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Features",
      childs: [
        {
          name: "Create and update an Eve Account",
          subChilds: [
            {
              name: "Create An Eve Account",
              detail: [
                "1 Yes! You can purchase a license that you can share with your entire",
                "2 Yes! You can purchase a license that you can share with your entire",
                "3 Yes! You can purchase a license that you can share with your entire",
                "4 Yes! You can purchase a license that you can share with your entire",
                "5 Yes! You can purchase a license that you can share with your entire",
              ],
            },
          ],
        },
        {
          name: "Create and update an 2 Account",
          subChilds: [
            {
              name: "Create An Eve Account 2",
              detail: [
                "1 Yes! You can purchase a license that you can share with your entire",
                "2 Yes! You can purchase a license that you can share with your entire",
                "3 Yes! You can purchase a license that you can share with your entire",
                "4 Yes! You can purchase a license that you can share with your entire",
                "5 Yes! You can purchase a license that you can share with your entire",
              ],
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div className="">
      {accordian.map((item, i) => (
        <div key={i}>
          <Disclosure>
            <Disclosure.Button className="py-2 text-black">
              {({ open }) => (
                <div
                  className={`w-[300px] flex h-[45px]  bg-white border-[2px] border-solid ${
                    open ? "border-[#589CFF]" : "border-[#fff]"
                  } rounded-[12px]`}
                >
                  <div className="flex justify-between items-center h-auto w-[300px] py-[0px] px-[12px]">
                    <div className="flex items-center flex-shrink-0 w-[215px] h-auto gap-[14px]">
                      <img src="/contact.png" alt="picture" />
                      <p className="text-[#589CFF] text-center font-poppins text-[16px] font-medium">
                        {item.name}
                      </p>
                    </div>
                    <button>
                      {open ? (
                        <img src="/listup.png" alt="picture" />
                      ) : (
                        <img src="/listing.png" alt="picture" />
                      )}
                    </button>
                  </div>
                </div>
              )}
            </Disclosure.Button>
            <Disclosure.Panel className=" text-black">
              {item.childs.map((childItem, j) => (
                <button
                  onClick={() => setAccordianDetail(childItem)}
                  key={j}
                  className="py-[4px] px-[12px] rounded-[8px] bg-white bg-opacity-80 ml-[5px] mb-[10px] "
                >
                  {childItem.name}
                </button>
              ))}
            </Disclosure.Panel>
          </Disclosure>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordians;
