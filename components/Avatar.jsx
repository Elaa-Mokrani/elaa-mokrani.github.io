import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex max-w-none pointer-events-none select-none ml-5 justify-between">
      <Image
        src="/avatar2.png"
        alt="avatar"
        width={410}
        height={610}
        className="translate-x-[190px] translate-y-[77px] translate-z-6 
                   w-[200px] h-[320px] md:w-[250px] md:h-[370px] md:translate-x-[280px]

 lg:w-[410px] lg:h-[610px]"
      />
    </div>
  );
};
export default Avatar;
