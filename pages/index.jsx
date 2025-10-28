import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 -md:translate-y-[45px]">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto ">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
           
            <span className="text-accent">Hi I'm Elaa!</span>
             <br /> Full-Stack Developer <br /> 
             Data Analyst  {" "}
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 -mt-6 mb-6 xl:mb-6 hidden md:block "

          >
            I’m passionate about data analysis, interactive visualization, and modern web development. With a strong academic foundation in computer engineering and IoT, I’m currently pursuing a Master’s degree in Business Analytics and Data Science. 
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative scale-80 -mt-[31px] mb-[115px] md:translate-y-[45px]">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
     <div className="w-full xl:w-[1280px] h-full absolute right-0 bottom-0">
  {/* bg img */}
  <div
    role="img"
    className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
    aria-hidden
  />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
       <motion.div
  variants={fadeIn("up", 0.5)}
  initial="hidden"
  animate="show"
  exit="hidden"
  transition={{ duration: 1, ease: "easeInOut" }}
  className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] -bottom-[325px] right-[95px] "
>
  <Avatar />
</motion.div>
      </div>
    </div>
  );
};

export default Home;
