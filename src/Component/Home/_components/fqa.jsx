
import React from 'react'

import { Disclosure } from "@headlessui/react";

// icons
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
} from "react-icons/md";


const data = [
  {
    title: "التطوير الإداري",
    sub: [
      "الإدارة و الإستراتيجية",
      "القطاع العام والإدارة الحكومية",
      "المنظمات الغير هادفة للربح",
      "المخاطر و الأزمات",
      "الجودة والامتثال",
    ],
  },
  {
    title: "إدارة الرعــاية الطــبية",
    sub: [
      "القيادة والاستراتيجية",
      "الإدارة والتشغيل",
      " الرعاية الطبية",
      "الجودة والامتثال",
    ],
  },
  {
    title: "إدارة   الخدمات التعليمية",
    sub: [
      "تطوير هيئة التدريس",
      " منهجيات التعليم ونقل المعرفة",
      "الجودة والامتثال",
      " التعليم الأكاديمي",
      "الجودة في الخدمات التعليمية",
    ],
  },
  {
    title: "الجودة والتميز المؤسسي",
    sub: [" االجودة ", " الجودة والامتثال "],
  },
  {
    title: "الهندسة",
    sub: [
      "الهندسة - المعمارية والمدنية والإدارة",
      " الهندسة - الهندسة الكيميائية",
      " الهندسة - الكهربائية والأجهزة",
      " الهندسة - الميكانيكية وعلوم الصيانة",
      " الهندسة - الطاقة والبترول والنفط والغاز",
    ],
  },
  {
    title: "إدارة   المكاتب و البيانات",
    sub: [" إدارة المكاتب", " إدارة الوثائق و البيانات"],
  },
  {
    title: "الأمن والسلامة و الصحة المهنية",
    sub: [" الأمن", "الصحة و السلامة"],
  },
];

export default function FQA() {
  return (
    <div className="wrapper grid grid-cols-1 sm:grid-cols-12">
      {/* data */}
      <div className="col-span-1 sm:col-span-8">
        {data.map((el, idx) => {
          return (
            <div key={idx}>
              <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 ">
                <Disclosure>
                  {({ open }) => (
                    <div>
                      <div data-aos="flip-up">
                        <Disclosure.Button className="flex w-full justify-between items-end  gap-2 rounded-lg bg-[var(--faint-color)] px-4 py-2 text-start text-sm font-medium text-[var(--main-color)]  focus:outline-none focus-visible:ring-0 cursor-pointer">
                          {open ? (
                            <MdKeyboardArrowDown />
                          ) : (
                            <MdKeyboardArrowLeft />
                          )}
                          <span>{el.title}</span>
                        </Disclosure.Button>
                      </div>

                      {el.sub.map((_sub, index) => {
                        return (
                          <Disclosure.Panel
                            key={index}
                            className="px-4 my-1 text-xs text-[var(--main-color)] flex items-center gap-1 justify-end"
                          >
                            {_sub}
                            <MdOutlineKeyboardDoubleArrowLeft />
                          </Disclosure.Panel>
                        );
                      })}
                    </div>
                  )}
                </Disclosure>
              </div>
            </div>
          );
        })}
      </div>
      {/* header */}
      <div className="text-end col-span-1 sm:col-span-4 ">
        <h2 className="text-[var(--main-color)] font-semibold text-lg mb-3">
          مجالات التدريب والتطوير
        </h2>
        <p className="text-[var(--main-color)] font-semibold  text-xs">
          يُعد التدريب والتطوير من الركائز الأساسية لنجاح أي مؤسسة أو فرد، حيث
          يساهم في تعزيز المهارات وزيادة الكفاءة وتحقيق الأهداف بكفاءة أعلى.
          تتعدد مجالات التدريب والتطوير لتشمل:
        </p>
      </div>
    </div>
  );
}
