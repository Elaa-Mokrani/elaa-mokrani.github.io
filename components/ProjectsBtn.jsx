import Image from "next/image";
import Link from "next/link";

import { HiArrowDown} from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
       <a
        href="/Elaa-MOKRANI-CV.pdf"
        download
        className="relative z-50 w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >

        <Image
          src="/rounded_text.png"
          alt="rounded text"
          width={166}
          height={172}
          className="animate-spin-slow w-full h-full max-w-[170px] max-h-[166px] pointer-events-none select-none"
        />
        <HiArrowDown
          className="absolute text-4xl group-hover:translate-y-2 transition-all duration-300"
          aria-hidden
        />
      </a>
    </div>
  );
};

export default ProjectsBtn;
