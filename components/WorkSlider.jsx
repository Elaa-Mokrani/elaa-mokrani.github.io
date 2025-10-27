import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Tunisie Telecom",
          path: "/telecom.png",
          link: "https://github.com/Elaa-Mokrani/projet-de-fin-d-etudes-.git",
          tools: ["IoT", "Cloud", "Node-RED", "HTML", "CSS", "JS"],
        },
        {
          title: "Enercall",
          path: "/enercall.png",
          link: "http://enercall.tn",
          tools: ["Wordpress", "HTML", "SEO","Responsive"],
        },
        {
          title: "Vitactive",
          path: "/vitactive.png",
          link: "https://github.com/Elaa-Mokrani/Vitactive",
          tools: ["React Native", "React JS", "Expo", "Figma"],
        },
        {
          title: "Lablink",
          path: "/lablink.png",
          link: "http://lablink.tn",
          tools: ["Wordpress", "HTML", "SEO","Responsive"],
        },
      ],
    },
    {
      images: [
        {
          title: "Delta Consulting",
          path: "/deltaconsult.png",
          link: "http://deltaconsult.fr",
          tools: ["Wordpress", "HTML", "SEO","Responsive","calendly"],
        },
        {
          title: "Vital Care",
          path: "/vital care.png",
          link: "https://github.com/Elaa-Mokrani/vital-care-projet-web.git",
          tools: ["HTML", "CSS", "JS","Figma","Canva",]
        },
        {
          title: "Boutiket.tn",
          path: "/boutiket.png",
          link: "https://github.com/Tasnim-b/Marketplace.git",
          tools: ["E-commerce", "PHP", "Git","Figma"]
        },
        {
          title: "Univers Marketing",
          path: "/unimarket.png",
          link: "http://unimarket.tn",
          tools: ["WordPress", "E-commerce","SEO"],
        },
      ],
    },
    {
      images: [
        {
          title: "Bracelet médical",
          path: "/Bracelet med.png",
          link: "https://github.com/Elaa-Mokrani/Lifeguard.git",
          tools: ["JS", "CSS", "EJS", "C++", "Firebase"],
        },
        {
          title: "Giftiny",
          path: "/Giftiny.png",
          link: "https://github.com/Elaa-Mokrani/Giftiny.git",
          tools: ["Streamlit", "Python", "MongoDB" ,"Docker", "Spark"],
        },
        {
          title: "SID (Suivi des livraisons)",
          path: "/sid.png",
          link: "https://github.com/Elaa-Mokrani/projet-d-cisionnel-de-suivi-des-livraisons.git",
          tools: ["SQL Server", "Power BI", "SSIS", "SSAS ", "Excel"],
        },
        {
          title: "Affiche Promo",
          path: "/unimarket1.png",
          link: "https://dribbble.com/shots/26697397-Unimarket-tn?utm_source=Clipboard_Shot&utm_campaign=elaa-mokrani&utm_content=Unimarket.tn&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=elaa-mokrani&utm_content=Unimarket.tn&utm_medium=Social_Share",
          tools: ["E-commerce", "Canva","Marketing digital"],

        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden w-full h-full">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={800}
                    height={500}
                    className="object-cover w-full h-full"
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* contenu au survol (outils) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-500 text-white text-center">
                    <h3 className="text-sm sm:text-lg font-semibold mb-2">
                      {image.title}
                    </h3>

                    <div className="flex flex-wrap justify-center gap-2 max-w-[90%]">
                      {image.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-white/20 px-2 py-1 rounded-md text-xs sm:text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-3 inline-flex items-center gap-2 text-[13px] tracking-[0.2em] underline"
                    >
                      <span>Live project</span>
                      <BsArrowRight aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
