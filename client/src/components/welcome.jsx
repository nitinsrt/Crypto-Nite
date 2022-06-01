import { SiEthereum } from "react-icons/si";
import { Services } from ".";
const Welcome = () => {
  return (
    <>
      <div className=" flex w-full   justify-center items-center">
        <div className=" flex md:flex-row flex-col items-center  justify-between md:p-20 py-12 px-4">
          <div className=" mb-10 md:mb-0 flex flex-1 justify-start items-start flex-col md:mr-10">
            <h1 style={{ color:"black", fontSize:"35px" }}>
              <b>Send Ethereum <br/> Now</b>
            </h1>
            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
             Track Currencies and see news on Crypto Nite
            </p>
          </div>
          <div className=" rounded-full   md:rounded-full  border-2 border-x-black-600 p-14 border-y-black-300 blue-glassmorphism">
            <SiEthereum fontSize={200} color="black" />
          </div>
        </div>
      </div>
      <Services />
    </>
  );
};

export default Welcome;
