import { motion, useAnimation } from "framer-motion";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700 ">
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
          Domain Specialisation
        </h1>
        <p className="pt-1 font-['Neue_Montreal'] tracking-tight">
          we have extensive experience of building scalable products in all
          major domains
        </p>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10 mb-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer relative w-1/2 h-[75vh]  "
          >
            <li className="text-4xl font-semibold mb-2">Banking & Finance</li>
            <h1 className="absolute text-[#CDEA68] flex overflow-hidden z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter right-0 text-6xl ">
              {"BANKING & FINANCE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-full h-full rounded-xl overflow-hidden"
              whileHover={{ scale: 0.97 }} // Increase the scale on hover
              transition={{ ease: "easeInOut", duration: 0.2 }} // Transition duration
            >
              <motion.img
                className="w-full h-full bg-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src="httPs://d3nn873nee648n.cloudfront.net/900x600/20658/300-SM1071871.jpg"
                alt="basicImage"
              />
            </motion.div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer relative w-1/2 h-[75vh]  "
          >
            <li className="text-4xl font-semibold mb-2">Insurance</li>
            <h1 className="absolute text-[#CDEA68] hover:flex overflow-hidden z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter left-0 text-8xl ">
              {"INSURANCE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-[30vw] rounded-xl overflow-hidden"
              whileHover={{ scale: 0.97 }}
              transition={{ ease: "easeInOut", duration: 0.3 }} // Transition duration
            >
              <motion.img
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="w-[40vw] bg-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWLr7uHR1b6ySqBtr9wjaHBl__plKcOYhlOA&s"
                alt="basicImage"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="cards w-full flex gap-10 mt-10 mb-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer relative w-1/2 h-[75vh] mt-10 "
          >
            <li className="text-4xl font-semibold mb-10">Online Gaming</li>

            <h1 className="absolute text-[#CDEA68] hover:flex overflow-hidden z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter right-0 text-6xl">
              {"ONLINE GAMING".split(" ").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block gap-5"
                >
                  {item} <span>&nbsp;</span>
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-[25vw] rounded-xl overflow-hidden"
              whileHover={{ scale: 0.97 }} // Increase the scale on hover
              transition={{ ease: "easeInOut", duration: 0.3 }} // Transition duration
            >
              <motion.img
                className="w-full h-full bg-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src="https://media.istockphoto.com/id/157423589/photo/internet-gambling.jpg?s=612x612&w=0&k=20&c=SSD1GR8QdYSTRUKzxv9KQiEajEE8CE3-Te6b11mWu0A="
                alt="basicImage"
              />
            </motion.div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer relative w-1/2 h-[75vh] mt-10"
          >
            <li className="text-4xl font-semibold mb-2">Blockchain & web3</li>

            <h1 className="absolute text-[#CDEA68] flex overflow-hidden z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter left-0 text-8xl">
              {"BLOCKCHAIN&Web3".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-[40vw] h-full rounded-xl overflow-hidden"
              whileHover={{ scale: 0.97 }}
              transition={{ ease: "easeInOut", duration: 0.3 }} // Transition duration
            >
              <motion.img
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="w-full h-full bg-cover"
                src="https://media.istockphoto.com/id/1371536838/photo/blockchain-technology-concepts-hand-levitating-a-digital-and-futuristic-graphic-to-connecting.jpg?s=612x612&w=0&k=20&c=Cri8NUrIReH4iGS80ThRzJYpUJJts-SzDFErvU2CxI8="
                alt="basicImage"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="cards w-full flex gap-10 mt-10 mb-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer relative w-1/2 h-[75vh] mt-10 "
          >
            <li className="text-4xl font-semibold mb-2">
              Education & Learning
            </li>
            <h1 className="absolute text-[#CDEA68] flex overflow-hidden z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter right-0 text-6xl ">
              {"EDUCATION&LEARNING".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-full h-full rounded-xl overflow-hidden"
              whileHover={{ scale: 0.97 }} // Increase the scale on hover
              transition={{ ease: "easeInOut", duration: 0.2 }} // Transition duration
            >
              <motion.img
                className="w-full h-full bg-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src="https://media.istockphoto.com/id/1007056552/vector/education-target-and-study-concept.jpg?s=612x612&w=0&k=20&c=d17vOfAtA8gqomM8aGJKE5jWZ311BsWXxANjyrD8MZA="
                alt="basicImage"
              />
            </motion.div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer relative w-1/2 h-[75vh] mt-10 "
          >
            <li className="text-4xl font-semibold mb-2">Ecommerce & Retail</li>
            <h1 className="absolute text-[#CDEA68] hover:flex overflow-hidden z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter left-0 text-5xl ">
              {"ECOMMERCE&RETAIL".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-[30vw] rounded-xl overflow-hidden"
              whileHover={{ scale: 0.97 }}
              transition={{ ease: "easeInOut", duration: 0.3 }} // Transition duration
            >
              <motion.img
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="w-[40vw] bg-cover"
                src="https://media.istockphoto.com/id/1152401160/vector/delivery-and-shopping.jpg?s=612x612&w=0&k=20&c=-mWq5AiZrYYDn1DgbFvofXtx7mO7PGgkZ0Uawn-r4fo="
                alt="basicImage"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <button className="flex gap-10 items-center px-6 py-4 bg-white mt-[7vw] ml-[2vw] rounded-full text-zinc-900 font-['Founders_Grotesk_X-Condensed']">
        Know More
        <div className="w-2 h-2 bg-black rounded-full"></div>
      </button>
    </div>
  );
}

export default Featured;
