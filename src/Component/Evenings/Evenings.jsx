import React from "react";
import e_1 from "../../assets/evenings/1.jpg";
import e_2 from "../../assets/evenings/2.jpg";
import e_4 from "../../assets/evenings/4.jpg";
import e_6 from "../../assets/evenings/6.jpg";
import e_8 from "../../assets/evenings/8.jpg";

import t_1 from "../../assets/evenings/abdullah.jpg";
import t_2 from "../../assets/evenings/mahmoud_saleh.jpeg";
import t_3 from "../../assets/evenings/mohammed.png";
import t_4 from "../../assets/evenings/motaz.png";

import { Tab } from "@headlessui/react";
// date
import DateObject from "react-date-object";
import persian_ar from "react-date-object/locales/persian_ar";
import persian_en from "react-date-object/locales/persian_en";

// images
import o_1 from "../../assets/evenings/one/1.jpg";
import o_2 from "../../assets/evenings/one/2.jpg";
import o_4 from "../../assets/evenings/one/4.jpg";
import o_5 from "../../assets/evenings/one/5.jpg";

import tw_1 from "../../assets/evenings/two/1.jpg";
import tw_2 from "../../assets/evenings/two/2.jpg";
import tw_3 from "../../assets/evenings/two/3.jpg";
import tw_4 from "../../assets/evenings/two/4.jpg";
import tw_5 from "../../assets/evenings/two/5.jpg";

import th_1 from "../../assets/evenings/three/1.jpg";
import th_2 from "../../assets/evenings/three/2.jpg";
import th_3 from "../../assets/evenings/three/3.jpg";
import th_4 from "../../assets/evenings/three/4.jpg";
import th_5 from "../../assets/evenings/three/5.jpg";

import f_1 from "../../assets/evenings/four/1.jpg";
import f_2 from "../../assets/evenings/four/2.jpg";
import f_3 from "../../assets/evenings/four/3.jpg";
import f_4 from "../../assets/evenings/four/4.jpg";
import f_5 from "../../assets/evenings/four/5.jpg";

import PerfectScrollbar from "react-perfect-scrollbar";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import { LuYoutube } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

import { Link } from "react-router-dom";

export default function Evenings() {
  const data = [
    {
      header: "الأولي",
      title: "تصميم وتنفيذ استراتيجيات التغيير المؤسسي",
      sub: [
        "   إدارة التغيير بنجاح: استراتيجيات لتحويل المؤسسات",
        "تحفيز الموظفين وإشراكهم في رحلة التغيير",
        "تحقيق النجاح المستدام: تواصل الابتكار والتحسين المستمر",
      ],
      lang: "اللغة العربية",
      locate: "مقر آيفوري بالرياض",
      date: "2024-03-26",
      time_from: "22:00:00",
      time_to: "24:00:00",

      speaker: "د . معتز كردي",
      speakerTitle: "مستشار تطوير القيادات، ,مرشد وميسر التدريب التجريبي",
      speakerImg: t_4,
      imgs: [o_1, o_2, o_4, o_5],
      video: "https://youtu.be/0AmyKuUqoe8",
    },
    {
      header: "الثانية",

      title: "بناء ثقافة الابتكار في المؤسسات من خلال التدريب",
      sub: [
        " رحلة نحو ثقافة مؤسسية مليئة بالابتكار والإبداع",
        "     إشعال الشغف وتعزيز التفكير المبتكر بين الموظفين",
        "     القيادة الجريئة: الدافع الرئيسي وراء الابتكار الناجح",
      ],
      lang: "اللغة العربية",
      locate: "مقر آيفوري بالرياض",
      date: "2024-03-27",
      time_from: "22:00:00",
      time_to: "24:00:00",

      speaker: "د . محمد عبدالقادر",
      speakerTitle:
        " مستشار التطوير الإداري والتدريب الابتكاري وتطوير البرامج التعليمية",
      speakerImg: t_3,

      imgs: [tw_1, tw_2, tw_3, tw_4, tw_5],
      video: "https://youtu.be/LZDBCFvNGYI",
    },
    {
      header: "الثالثة",

      title:
        "تعزيز الثقة في التقنيات الجديدة عبر دمج الذكاء الاصطناعي في التدريب",
      sub: [
        "تكنولوجيا التعلم: كيف يمكن أن يدعم الذكاء الاصطناعي التدريب والتطوير",
        "بناء ثقة الموظفين: دور التكنولوجيا في تحقيق التحفيز والثقة",
        "التحول الرقمي: إعداد الموارد البشرية لعصر التكنولوجيا الذكية",
      ],
      lang: "اللغة العربية",
      locate: "مقر آيفوري بالرياض",
      date: "2024-03-28",
      time_from: "22:00:00",
      time_to: "24:00:00",

      speaker: ": المهندس / محمود الصالح",
      speakerTitle:
        "الرئيس التنفيذي لشركة آيفوري ومستشار التدريب وتطوير الأعمال",
      speakerImg: t_2,

      imgs: [th_1, th_2, th_3, th_4, th_5],
      video: "https://youtu.be/5k_S_yUr_Ls",
    },
    {
      header: "الرابعة",

      title: "المهارات الحاسمة التي يحتاجها القادة الآن",
      sub: [
        "        ملامح القائد المبتكر: الرؤية، التفكير النقدي، والتأثير الإيجابي",
        "تطوير المهارات القيادية الحديثة لمواكبة التغيير المستمر",
        "إلهام الفرق وتحفيزها لتحقيق النجاح والتميز.",
      ],
      lang: "اللغة العربية",
      locate: "مقر آيفوري بالرياض",
      date: "2024-03-31",
      time_from: "22:00:00",
      time_to: "24:00:00",

      speaker: "د . عبدالله الحوطي",
      speakerTitle:
        "مستشار ومدرب معتمد في مجال إعداد القیادات والعلاقات العامة وتنمیة الذات",
      speakerImg: t_1,

      imgs: [f_1, f_2, f_3, f_4, f_5],
      video: "https://youtu.be/WongSBMrxFk",
    },
    {
      header: "الخامسة",

      title: "استراتيجيات الموارد البشرية لمواجهة أزمة المواهب",
      sub: [
        "تحليل الاتجاهات العالمية في إدارة المواهب واستراتيجيات التحديات",
        "جذب واحتفاظ بالمواهب: التقنيات والتكتيكات المبتكرة",
        "الاستثمار في الموارد البشرية كمحرك للنمو والتطور المؤسسي",
      ],
      lang: "اللغة العربية",
      locate: "مقر آيفوري بالرياض",
      date: "2024-04-01",
      time_from: "22:00:00",
      time_to: "24:00:00",

      speaker: "المهندس / محمود الصالح ",
      speakerTitle:
        "الرئيس التنفيذي لشركة آيفوري ومستشار التدريب وتطوير الأعمال",
      speakerImg: t_2,

      imgs: [],
      video: "https://youtu.be/1Xf-BEDmOS8",
    },
  ];

  return (
    <section className=" ">
      {/* breadcrumb */}
      <div className="center_icon text-[var(--main-color)] p-5  pb-0 sm:pe-16 !items-center ">
        <Link to="/evenings" className="text-sm">
          الدورات التدريبة
        </Link>
        <IoIosArrowBack className=" text-xs" />

        <span>....</span>
        <IoIosArrowBack className=" text-xs" />
        <Link to="/">
          <IoHomeOutline className="text-lg" />
        </Link>
      </div>
      <div></div>
      {/* 1st */}
      <div className="wrapper">
        <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-10 py-1 sm:py-7 ">
          {/* left */}
          <div className="col-span-1 sm:col-span-6 ">
            {/* top */}

            <div className=" gap-1 flex items-end w-3/4 mx-auto mb-1">
              <img
                src={e_2}
                className="w-1/2 rounded-sm max-h-[80px]  md:max-h-[120px] lg:max-h-full"
              />
              <img
                src={e_4}
                className="w-1/2 rounded-sm max-h-[100px] sm:min-h-[120px] md:min-h-[180px] xl:min-h-[220px]"
              />
            </div>
            {/* bottom */}
            <div className="flex items-start gap-1">
              <img
                src={e_6}
                className="w-1/3 rounded-sm max-h-[80px]  md:max-h-[120px] lg:max-h-full"
              />
              <img
                src={e_1}
                className="w-1/3  rounded-sm max-h-[100px] sm:min-h-[120px] md:min-h-[180px] xl:min-h-[220px]"
              />
              <img
                src={e_8}
                className="w-1/3 rounded-sm max-h-[80px]  md:max-h-[120px] lg:max-h-full"
              />
            </div>
          </div>
          {/* right */}
          <div className="col-span-1 sm:col-span-6 ">
            <div className="flex items-end">
              <div className="header ">
                <h2 className="lg:!text-xl !font-bold">
                  أمسيات رمضان الإثرائية من آيفوري
                </h2>
                <div
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="500"
                >
                  <p>
                    أمسيات رمضـان الاثـرائـيـة من آيفوري تقدم مزيـجًا غنيًـا من
                    الأفكار والاستراتيجيات حيث نجمع خبراء في مجالات متنوعـة
                    لتقديـم رؤى فـريـدة، كل أمسيـة تـوفـر فرصـة للتعلم والإلهام،
                    مـصـممـة خصيصًـا لتـمكيـن المهنيين والقادة من تحقيق النجاح
                    في عالم متغير.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd */}
      <div className=" bg-[var(--faint-color)] py-1 sm:py-7 ">
        <div className="wrapper">
          <div className="header">
            <h2 className="text-center !text-3xl">الأمسيات</h2>
          </div>

          {/* data */}

          <Tab.Group>
            <PerfectScrollbar>
              <Tab.List
                className="flex space-x-1 rounded-xl bg-white p-1  mb-3 w-full
            "
              >
                {data.reverse().map((el, idx) => (
                  <Tab
                    key={idx}
                    className={`({ selected }) =>
                      w-full rounded-lg p-1.5  sm:px-4 text-sm font-medium leading-5 bg-[var(--faint-color)] cursor-pointer
                  text-[var(--main-color)]
                  ring-offset-[1px] ring-offset-[var(--main-color)] focus:outline-none focus:ring-[1px]
                      selected
                        ? "bg-white  shadow"
                        : " hover:bg-white/[0.12] hover:text-white"
                    )
                  }`}
                  >
                    <span className="ps-1">الأمسية</span>
                    <span>{el.header}</span>
                  </Tab>
                ))}
              </Tab.List>
            </PerfectScrollbar>
            <Tab.Panels className="mt-2">
              {data.map((el, idx) => (
                <Tab.Panel key={idx}>
                  <div className="bg-[#A55D70] rounded-md ">
                    <div
                      className="
                  ring-none
                   grid grid-cols-1 sm:grid-cols-12 text-[var(--faint-color)]"
                    >
                      {/* image */}
                      <div className="col-span-1 sm:col-span-4 h-full max-h-[300px]">
                        <img
                          src={el.speakerImg}
                          alt={el.speaker}
                          className="w-full rounded-tl-md rounded-tr-md sm:rounded-tr-none sm:rounded-bl-md h-full "
                        />
                      </div>

                      {/* data */}
                      <div className="col-span-1 sm:col-span-8 py-4 px-3 text-xs">
                        <h4 className="text-[15px] mb-2 text-white">
                          {el.title}
                        </h4>
                        {/* subs */}
                        <div className="mb-2">
                          <h5 className="mb-1 text-sm">: المحاور الرئيسية</h5>
                          <ul>
                            {el.sub.map((_sub) => {
                              return (
                                <li key={_sub} className="mb-0.5 ">
                                  {_sub} -
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        {/* time */}
                        <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
                          <div className="col-span-1">
                            <p>
                              اللغة {" : "} {el.lang}
                            </p>
                            <p>
                              الموقع {" : "} {el.locate}
                            </p>
                          </div>
                          <div className="col-span-1">
                            <p>
                              <span className="font-semibold">
                                الوقت
                                {" : "}
                              </span>
                              <span>
                                {new DateObject()
                                  .setHour(el.time_from.slice(0, 2))
                                  .setMinute(el.time_from.slice(3, 5))
                                  .setLocale(persian_ar)
                                  .format("hh:mm")}
                                {" - "}
                                {new DateObject()
                                  .setHour(el.time_to.slice(0, 2))
                                  .setMinute(el.time_to.slice(3, 5))
                                  .setLocale(persian_ar)
                                  .format("hh:mm")}
                              </span>
                            </p>
                            <p>
                              التاريخ {" : "}
                              {new DateObject({
                                date: el.date,
                                locale: persian_ar,
                              }).format("DD-MM-YYYY")}
                            </p>
                          </div>
                        </div>
                        {/* speaker */}
                        <div className=" ">
                          <div>
                            <h4 className="text-sm font-semibold text-white">
                              {el.speaker}
                            </h4>
                            <p className="mb-5">{el.speakerTitle}</p>
                          </div>

                          <div className="flex items-center gap-3  justify-end sm:justify-between flex-wrap-reverse sm:flex-nowrap">
                            {/* swipper */}

                            <div className="w-[100%] sm:w-[60%]">
                              {el.imgs.length >= 1 && (
                                <Swiper
                                  slidesPerView={3}
                                  spaceBetween={10}
                                  modules={[Autoplay]}
                                  autoplay={{
                                    delay: 1000,
                                    disableOnInteraction: false,
                                  }}
                                  breakpoints={{
                                    640: {
                                      slidesPerView: 2,
                                    },
                                    768: {
                                      slidesPerView: 4,
                                    },
                                    1024: {
                                      slidesPerView: 4,
                                    },
                                  }}
                                  className="mySwiper h-[50px] "
                                >
                                  {el.imgs.map((i) => (
                                    <SwiperSlide key={i} className="w-auto ">
                                      <img
                                        src={i}
                                        alt=""
                                        className="h-20 aspect-square"
                                      />
                                    </SwiperSlide>
                                  ))}
                                </Swiper>
                              )}
                            </div>
                            <a
                              className="btn-faint  px-5 !w-auto !ms-0 flex items-center gap-1 "
                              type="button"
                              href={el.video}
                            >
                              <LuYoutube className="text-lg" />
                              عرض المحتوي
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
}
