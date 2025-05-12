
import Logo from "../../assets/logo.png";

import {
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { TiLocationArrowOutline } from "react-icons/ti";
import { FaSnapchat } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

export default function Footer() {
  const courses = [
    "المهارات العملية لإدارة المبيعات",
    "شريك محترف في إدارة الموارد البشرية aPHRi",
    "تصميم خطة التدريب للشركات (رفع كفاءة الأعمال بالتدريب )",
    "(C-KPIs)  محترف وممارس معتمد في مؤشرات الأداء الرئيسية ",
  ];
  const stay = [
    {
      title:
        "الرياض ، المرسلات طريق ابو بكر الصديق الإمارات العربية المتحدة - دبي ",
      icon: <IoLocationOutline />,
    },
    {
      title: "جمهورية مصر العربية - القاهرة",
      icon: <TiLocationArrowOutline />,
    },
    { title: "00966533993220", icon: <FaPhone /> },
  ];

  const connect = [
    { icon: <FaFacebookF />, link: "" },
    { icon: <FaInstagram />, link: "" },
    { icon: <FaLinkedin />, link: "" },
    { icon: <RiTwitterXFill />, link: "" },
    { icon: <FaTiktok />, link: "" },
    { icon: <FaSnapchat />, link: "" },
  ];
  return (
    <div className="  bg-[var(--main-color)] text-[var(--faint-color)] pt-5 sm:pt-10   text-end  text-xs px-5">
      <div className=" sm:w-[90%] mx-auto">
        <div className=" grid  grid-cols-6 sm:grid-cols-12   border-b-[1px] border-[var(--faint-color)] pb-3 gap-4 sm:gap-1 ">
          {/* links */}
          <div className=" col-span-3 sm:col-span-2 order-3 sm:order-1">
            <h5 className="font-semibold me-2 mb-1">روابط تهمك</h5>
            <div>
              <a href="" className="inline-block mb-2 text-[10px]">
                التحقق من الشهادة
              </a>
              <button
                className="btn-faint text-[10px] !py-1 sm:!py-2"
                type="button"
              >
                أطلب دورتك التعاقدية
              </button>
            </div>
          </div>

          {/* stary with us */}
          <div className="col-span-3 sm:col-span-4 order-4 sm:order-2">
            <h5 className="font-semibold me-2 mb-1">ابق معنا</h5>
            <ul className="me-1">
              {stay.map((el, idx) => {
                return (
                  <li key={idx} className="center_icon my-1 ">
                    <span className="text-[10px] ">{el.title}</span>
                    <span
                      className={`
                      ${idx == 2 && "text-[10px]"}
                      mt-0.5 ms-1 text-sm`}
                    >
                      {el.icon}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* courses */}
          <div className=" col-span-3  sm:col-span-4  order-1 sm:order-3">
            <h5 className="font-semibold  mb-1">الدورات الاكثر طلبا</h5>
            <ul className="">
              {courses.map((el , idx) => {
                return (
                  <li key={idx} className="center_icon text-[10px]">
                    <span className="">{el}</span>
                    <FaCheck className=" ms-1" />
                    {/* <span className="ms-0.5">- </span> */}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* logo */}
          <div className=" col-span-3 sm:col-span-2  order-2 sm:order-4 center_icon">
            <div className=" max-w-[150px] sm:max-w-[180px] text-sm text-start ">
              <img src={Logo} alt="logo" className="w-full" />
              <h2 className="text-center  text-[10px] sm:text-xs">
                Broaden Your Success
              </h2>
              {/* <PiWavesBold className="text-7xl " /> */}
              <div className="flex items-center justify-center">

              {/* { Array.from('123').map((el,index)=> <PiWavesBold key={index}/>)} */}
              </div>
              {/* <img src={waves_2} alt="" /> */}
            </div>
          </div>
        </div>

        <div className="flex items-center flex-row-reverse justify-between py-2  text-[10px] sm:text-xs">
          <p>جميع الحقوق محفوظة - ايفوري للتدريب والاستشارات 2023</p>

          <ul className="flex items-center gap-2">
            {connect.reverse().map((el , idx) => {
              return (
                <li key={idx} className=" text-base cursor-pointer">
                  <span className="text-xs">{el.icon}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
