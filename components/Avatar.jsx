import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none ml-5 justify-between">

      <Image
        src="/avatar2.png"
        alt="avatar"
        width={410} // par exemple 100px
        height={610}
        className="translate-x-[190px] translate-y-[77px] translate-z-6"
      />
    </div>
  );
};

export default Avatar;
