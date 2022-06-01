import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 style={{ color:"black", fontSize:"35px" }} >
          Services that we
          <br />
          offer
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          Connect Metamask Wallet and Send Ethereum
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#8945F8]"
          title="Track Currency"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Track all the currency and there performance"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="News"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Get all crytpocurrecy news on your finger tips"
        />
         <ServiceCard
          color="bg-[#2952E3]"
          title="Security gurantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Higly Secured Transactions directly on the blockchain"
        />
      </div>
    </div>
  </div>
);

export default Services;
