import Link from "next/link";

import {
  RiDribbbleLine,
  RiGithubLine,
  RiLinkedinLine,
  RiMailAddLine,
  RiPhoneLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Linked In",
    link: "https://www.linkedin.com/in/elaa-mokrani-107859245",
    Icon:   RiLinkedinLine,
  },

  {
    name: "Dribbble",
    link: "https://dribbble.com/elaa-mokrani",
    Icon: RiDribbbleLine,
  },
 {
  name: "Mail",
  link: "mailto:elaa.mokrani@istic.ucar.tn",
  Icon: RiMailAddLine,
},
 {
      name: "Phone",
      link: "tel:+21622182365", // <-- replace with your real phone number
      Icon: RiPhoneLine,
    },
  {
    name: "Github",
    link: "https://github.com/Elaa-Mokrani",
    Icon: RiGithubLine,
  },
 
    

];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
