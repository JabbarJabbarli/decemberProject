import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ footerData, footerLinks, footerPayment }) => {
  return (
    <div className="flex px-32 py-20">
      <footer className="w-full flex justify-between">
        <div>
          {footerData.map((item, index) => (
            <div key={index} className="mb-8 w-[250px] flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <img src={item.icon} alt={`${item.title} icon`} />
                <h1 className="text-xl font-bold">{item.title}</h1>
              </div>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <div className="mt-4 flex items-center">
                {item.socialIcons.map((icons, linkIndex) => (
                  <img
                    key={linkIndex}
                    className="text-blue-500 hover:underline mr-4"
                    src={icons}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-20">
          {footerLinks.map((item) => (
            <ul>
              <h1 className="pb-10 text-lg text-neutral-500">{item.title}</h1>
              <div className="flex flex-col gap-4">
                {item.links.map((link) => (
                  <Link className=" text-neutral-700">{link}</Link>
                ))}
              </div>
            </ul>
          ))}
        </div>

        <div>
          {footerPayment.map((item) => (
            <div className="flex flex-col gap-10">
              <h1 className="text-neutral-500">{item.title}</h1>
              <div className="flex items-center gap-5">
                {item.payment.map((payment) => (
                  <img src={payment} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
