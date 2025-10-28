import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
   <header className="absolute z-30 w-full items-center px-2 sm:px-8 xl:px-2 xl:h-[9px] xl:-translate-y-28 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 ">
          {/* logo */}
          <Link className="hidden xl:flex" href="/">
            <Image 
              src="/logo.png"
              alt="logo"
              width={220}
              height={4}
              priority
            
            />
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
