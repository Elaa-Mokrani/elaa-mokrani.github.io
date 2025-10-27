import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiR,
  SiMysql,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiPowerbi,
  SiApache,
  SiDocker,
  SiFigma,
  SiCanva,
  SiAdobexd,
  SiJupyter,
  SiAnaconda,
  SiGit,
  SiVisualstudiocode,
  SiAndroidstudio,
  SiBootstrap,
  SiWordpress,
} from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming Languages",
        icons: [SiC, SiCplusplus, FaPython, SiR, FaJava, FaJs],
      },
      {
        title: "Web & Mobile Development",
        icons: [FaHtml5, FaCss3, FaReact, SiBootstrap, SiWordpress],
      },
      {
        title: "Databases",
        icons: [SiMysql, SiMongodb, SiMicrosoftsqlserver, FaDatabase],
      },
      {
        title: "Data Science & Tools",
        icons: [SiPowerbi, SiApache, SiJupyter, SiAnaconda],
      },
      {
        title: "Dev Tools ",
        icons: [
          SiGit,
          SiDocker,
          SiVisualstudiocode,
          SiAndroidstudio,
        ],
      },
       {
        title: "Design",
        icons: [
          SiFigma,
          SiCanva,
          SiAdobexd,

        ],
      },
    ],
  },

 {
  title: "education",
  info: [
    {
      title: "Master’s Degree in Business Analytics and Data Science",
      stage: "UVT (present)",
    },
    {
      title:"Bachelor’s Degree in Computer Engineering – in IoT & Embedded Systems",
      stage: "ISTIC Borj Cedria (2024)",
    },
    {
      title: "High School Diploma in Experimental Sciences",
      stage: "Ben Arous High School (2021)",
    },
  ],
},

{
  title: "experience",
  info: [
    {
      title: "Web Development Intern",
      stage: "Lablink – Montplaisir (01-03/2025)",
    },
    {
      title: "Webmaster",
      stage: "Univers Marketing – Charguia 1 (10-12/2024)",
    },
    {
      title: "Final-Year Internship",
      stage: "Tunisie Telecom – Lac 1 (01-05/2024)",
    },
    {
      title: "Summer Internship",
      stage: "Electro-plus – Borj Cedria (2023)",
    },
  ],
},

{
  title: "languages",
  info: [
    {
      title: "Arabic",
      stage: "Native language",
    },
    {
      title: "French",
      stage: "Fluent",
    },
    {
      title: "English",
      stage: "Fluent",
    },
    {
      title: "Spanish",
      stage: "Basic knowledge",
    },
  ],
},

];


const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate=""
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            From <span className="text-accent">ideas</span> to applications , from  <span className="text-accent">data</span> to decisions
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I’m a beginner Full-Stack Developer and Data Analyst, passionate about transforming data into insights and building interactive web applications. I enjoy learning new technologies and applying them to real projects to solve practical problems.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={25} duration={7} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Skills Learned.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={7} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Certificates Earned.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={12} duration={7} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={7} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Languages Spoken.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;