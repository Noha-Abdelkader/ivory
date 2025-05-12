import React from "react";

import f_8 from "../../assets/traning/8.png";
import f_9 from "../../assets/traning/9.jpg";
import f_10 from "../../assets/traning/10.jpg";
import f_11 from "../../assets/traning/11.jpg";
import f_12 from "../../assets/traning/12.png";
import f_13 from "../../assets/traning/6.jpg";

import { BsDot } from "react-icons/bs";

const traning = [
  {
    title: "التطوير التنظيمى",
    sub: [
      "الهيكلة والتصميم ",
      "االتفاعلات الإنسانية",
      "الموارد البشرية",
      "التغير الإستراتيجى",
      "القيادة",
    ],
    src: f_12,
  },
  {
    title: "إدارة الثروة و الاستثمار",
    sub: [
      "التأمين",
      "البنوك",
      "المصارف الإسلامية",
      "الأصول والإستثمار",
      "سوق المال",
    ],
    src: f_13,
  },
  {
    title: "التطوير الشخصى",
    sub: ["إدارة الذات", "التواصل و التأثير", "مناهج التفكير", "القيادة"],
    src: f_8,
  },
  {
    title: "تطوير الأداء التشغيلى",
    sub: [
      "إدارة عمليات الصيانة",
      "إدارة الأصول والمنشآت",
      "إدارة العمليات والمشروعات",
      "الصحة والأمن والسلامة",
      "الجودة والامتثال",
    ],
    src: f_9,
  },
  {
    title: " إدارة المشتريات وسلاسل المشتريات",
    sub: [
      "التسويق",
      "المبيعات",
      "العلاقات والسمعة والعلامة",
      "تجربة العميل",
      "الصورة الذهنية وإدارة السمعه",
      "العلاقات العامة",
    ],
    src: f_10,
  },
  {
    title: "الإتصال التجارى",
    sub: [
      "التسويق",
      "المبيعات",
      "العلاقات والسمعة والعلامة",
      "تجربة العميل",
      "العلاقات العامة",
      "خدمة العملاء",
      "الصورة الذهنية وإدارة السمعة",
    ],
    src: f_11,
  },
];

export default function Traning() {
  return (
    <div className=" wrapper w-full sm::w-[80%] mx-auto">
      {/* header */}
      <div className="text-center ">
        <h2 className="text-[var(--main-color)] font-semibold text-lg mb-3">
          التطوير الشخصي
        </h2>
        <p className="text-[var(--main-color)] font-semibold  text-xs">
          التطوير الشخصي هو عملية مستمرة تهدف إلى تعزيز قدرات الفرد وتحسين
          مهاراته لتحقيق النجاح على المستوى الشخصي والمهني
        </p>
      </div>
      {/* details */}
      <div className="   w-full  mt-5 ">
        {traning.map((el, idx) => {
          return (
            <div
              key={idx}
              className={`
             grid grid-cols-1 md:grid-cols-12
         gap-1 xl:gap-5 py-0  sm:py-3  `}
            >
              {/* image */}
              <div
                className={`
        ${idx % 2 == 0 ? "order-1" : "order-1 md:order-3"}

            col-span-1  md:col-span-5 w-full
               `}
              >
                <div
                  className="w-[300px] mx-auto bg-[var(--main-color)] rounded-md pt-2 relative
              overflow-hidden
              parent_overLay
            
            "
                >
                  <div className="absolute  bg-[#fce8ed2e] duration-300 ease-in-out bottom-[-400px]  w-[300px] aspect-square over_lay"></div>

                  <img
                    src={el.src}
                    alt={el.title}
                    className="w-[95%] mx-auto rounded-tr-md rounded-tl-md  max-h-[200px] min-h-[200px]"
                  />
                </div>
              </div>
              {/* between */}
              <div
                className={`
        order-2
            line_through
            col-span-2`}
              >
                <span>{idx + 1}</span>
              </div>
              {/* text */}
              <div
                className={`
        ${idx % 2 == 0 ? "order-3" : "order-3 md:order-1"}
center
            col-span-1 md:col-span-5
            text-[var(--main-color)] text-md  `}
              >
                <div
                  className={`

             mx-auto
                `}
                >
                  <h4 className=" text-sm md:text-base font-bold mb-2">
                    {el.title}
                  </h4>
                  <div
                    data-aos={`${idx % 2 == 0 ? "fade-left" : "fade-right"}`}
                  >
                    <ul className="">
                      {el.sub.map((_sub, i) => {
                        return (
                          <li key={i} className="text-md mb-1 text-xs ">
                            <div className="flex items-center justify-end ">
                              {_sub}
                              <BsDot />
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
