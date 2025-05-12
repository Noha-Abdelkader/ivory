import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";

// icons
import {
  MdOutlineSecurity,
  MdOutlineSecurityUpdateGood,
  MdDeveloperMode,
} from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoLogoElectron } from "react-icons/io5";
import { SiElectronbuilder } from "react-icons/si";
import { GiChemicalDrop } from "react-icons/gi";
import { FaHouseChimney } from "react-icons/fa6";
import { SiCyberdefenders } from "react-icons/si";
import { GrSecure } from "react-icons/gr";

const features = [
  { title: "برانامج أمن المعلومات", icon: <MdOutlineSecurity />, lang: "ar" },
  { title: "البيئة الافتراضية", icon: <FaHouseChimney />, lang: "ar" },
  { title: "تقنية المعلومات", icon: "" },
  {
    title: "أمن المعلومات",
    icon: <MdOutlineSecurityUpdateGood />,
    lang: "ar",
  },
  {
    title: " التحقق في أمن المعلومات",
    icon: <SiCyberdefenders />,
    lang: "ar",
  },
  { title: "برنامج أمن الشبكات", icon: <GrSecure />, lang: "ar" },
  {
    title: "مزودو الخدمات",
    icon: <IoIosInformationCircleOutline />,
    lang: "ar",
  },
  { title: "هندسة كيماوية", icon: <GiChemicalDrop />, lang: "ar" },
  { title: "هندسة الليكترونية", icon: <IoLogoElectron />, lang: "ar" },
  { title: "data", icon: <SiElectronbuilder />, lang: "eng" },
  { title: "Developer", icon: <MdDeveloperMode />, lang: "eng" },
  { title: "SASS Human capital management ", icon: "", lang: "eng" },
];

export default function Features() {
  return (
    <Swiper
      spaceBetween={30}
      modules={[Autoplay]}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      className="mySwiper"
    >
      {features.map((el, idx) => {
        return (
          <SwiperSlide key={idx}>
            <div
              className={`
              ${el.lang == "eng" ? "flex-row-reverse" : ""}
              text-[var(--main-color)] text-xs font-bold flex items-center gap-2 `}
            >
              <span className="text-nowrap">{el.title}</span>
              <span className="text-lg inline-block">{el.icon}</span>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
