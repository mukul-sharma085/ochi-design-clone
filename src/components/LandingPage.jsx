import { FaLongArrowAltUp } from "react-icons/fa";
import { motion } from "framer-motion";

const LandingPage = () => {
  const titles = ["Leapfrog Your ", "Product Development","With Us"];
  const below_border = [
    "For public and private companies",
    "From the first pitch to IPO",
  ];
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="TextStructure mt-52 px-20">
        {titles.map((title, index) => (
          <div key={index} className="Masker ">
            <div className="w-fit flex items-center overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.6, -0.05, 0.01, 0.99], duration: 3 }}
                  className="mr-[0.5vw]  bg-[url('https://nzz858.n3cdn1.secureserver.net/wp-content/uploads/2023/01/Logos-20-150x150.png')] rounded-md h-[6vw] w-[9vw] relative -top-[0.4]"
                ></motion.div>
              )}
              <h1 className=" text-[4vw] leading-[6vw] tracking-tighter font-['Founders_Grotesk_X-Condensed'] font-bold">
                {title}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center tracking-tight leading-none py-5 px-20">
        {below_border.map((phrase, index) => (
          <p key={index} className="text-md font-light ">
            {phrase}
          </p>
        ))}

        <div className="start flex gap-5 items-center">
          <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full uppercase font-light text-md  ">
            start the project
          </div>
          <div className="w-10 h-10 rounded-full border-[1px] border-zinc-500 flex items-center justify-center ">
            <span className="rotate-[45deg]">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
