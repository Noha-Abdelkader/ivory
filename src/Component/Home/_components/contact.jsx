import React from "react";
import { BiSolidPencil } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const contact = [
  { title: "واتساب", icon: <FaWhatsapp />, data: "أضعط للمحاثة" },
  { title: "اطلب الخدمة", icon: <BiSolidPencil />, data: "أضغط للتسجيل" },
  {
    title: "البريد الالكتروني",
    icon: <IoMailOutline />,
    data: "marketing@ivorytraining.com",
  },
];

export default function Contact() {
  return (
    <div className="wrapper grid grid-cols-1 sm:grid-cols-12 ">
      {/* data */}
      <div className="col-span-1 sm:col-span-6 grid grid-cols-4 gap-4  ">
        {contact.map((el, idx) => {
          return (
            <div
              key={idx}
              className="col-span-2 text-end border-[1px] border-[var(--main-color)] text-[var(--main-color)] rounded-lg p-3 flex items-start justify-end text-sm gap-2 hover:scale-105 duration-300 ease-in-out"
            >
              <div className="text-xs flex items-end justify-center  flex-col gap-2">
                <h6 className=" font-bold flex items-center justify-center flex-row-reverse gap-1">
                  <span className="font-bold text-base">{el.icon}</span>
                  <span>{el.title}</span>
                </h6>
                {idx == 2 && (
                  <a
                    href={`mailto:${el.data}`}
                    className="text-[10px] lg:text-xs"
                  >
                    {el.data}
                  </a>
                )}

                {idx == 0 && (
                  <a
                    className="btn text-[10px] px-3"
                    href="https://api.whatsapp.com/send/?phone=966537078019&text&type=phone_number&app_absent=0"
                  >
                    {el.data}
                  </a>
                )}
                {idx == 1 && (
                  <button type="button" className="btn text-[10px] px-3">
                    {el.data}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* header */}
      <div className="text-end col-span-1 sm:col-span-6 ">
        <div className="w-[80%] mx-auto">
          <h2 className="text-[var(--main-color)] font-semibold text-lg mb-3">
            تواصل مع مستشارينا فى التدريب لخدمتك
          </h2>
          <p className="text-[var(--main-color)] font-semibold  text-xs">
            يُعد التدريب والتطوير من الركائز الأساسية لنجاح أي مؤسسة أو فرد، حيث
            يساهم في تعزيز المهارات وزيادة الكفاءة وتحقيق الأهداف بكفاءة أعلى.
            تتعدد مجالات التدريب والتطوير لتشمل:
          </p>
        </div>
      </div>
    </div>
  );
}
