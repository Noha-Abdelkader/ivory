// images
import Logo from "../../assets/logo.png";
import UsaFlag from "../../assets/usa_flag.jpg";
import SaFlag from "../../assets/sa_flag.webp";
// headeless import
import { Menu, Dialog, Disclosure, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { Link } from "react-router-dom";

// icons
import {
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";


import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function Navbar() {
  // navlist
  const navList = [
    { title: "الرئيسية", link: "/", sub: [] },
    {
      title: "الخدمات",
      link: "/",
      sub: [
        { title: "التدريب", link: "/" },
        { title: "حلول التعليم المتكاملة", link: "/"  },
        { title: "التقيميات", link: "/"  },
      ],
    },
    { title: "الدورات التدريبية", link: "/evenings", sub: [] },
    { title: "الخطة التدريبية", link: "/", sub: [] },
    { title: "الأعتمادات", link: "/", sub: [] },
    {
      title: "الفاعليات",
      link: "/",
      sub: [
        { title: "المحاضرات والندوات العامة", link: "/"  },
        { title: "مؤتمر ATD", link: "/"  },
      ],
    },
    {
      title: "بودكاست",
      link: "/",
      sub: [],
    },
    { title: "اتصل بنا", link: "/", sub: [] },
  ];

  //   language
  const lang = [
    { title: "عربي", src: SaFlag, alt: "egypt flag", selected: "ar" },
    { title: "English", src: UsaFlag, alt: "usa flag", selected: "eg" },
  ];

  const [selectedLang, setSelectedLang] = useState("ar");
  let [isOpenSide, setIsOpenSide] = useState(false);

  function closeModal() {
    setIsOpenSide(false);
  }

  function openModal() {
    setIsOpenSide(true);
  }
  return (
    <div
      className="px-4 py-2 grid grid-cols-12 text-[10px] font-bold"
      style={{ backgroundColor: "var(--main-color)" }}
    >
      {/* lang + btns */}
      <div className=" col-span-2 sm:col-span-3 grid grid-cols-2 sm:grid-cols-3 items-center">
        <div className="col-span-1 flex items-center order-2 lg:order-1">
          <Menu as="div" className="relative inline-block text-left ">
            <div>
              <Menu.Button className="flex w-full justify-center  items-center rounded-md focus:outline-none focus-visible:ring-none">
                <div className="flex items-center gap-2  cursor-pointer">
                  <div className="border-2 border-[var(--faint-color)] rounded-full">
                    <img
                      src={lang.find((el) => el.selected == selectedLang).src}
                      alt={lang.find((el) => el.selected == selectedLang).alt}
                      className="rounded-full w-[20px] aspect-square"
                    />
                  </div>
                  <span className="text-[var(--faint-color)] font-semibold hidden md:inline-block">
                    {lang.find((el) => el.selected == selectedLang).title}
                  </span>
                </div>
              </Menu.Button>
            </div>
            <Transition
              as="div"
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 mt-1 w-26 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          setSelectedLang(selectedLang == "ar" ? "eg" : "ar");
                        }}
                        className={`${
                          active
                            ? "bg-[var(--faint-color)] text-white"
                            : "text-[var(--main-color)]"
                        } group flex w-full items-center rounded-md px-2 py-2 
                         hover:text-[var(--main-color)]
                        `}
                      >
                        <div className="flex items-center gap-2 font-semibold text-xs cursor-pointer  hover:text-[var(--main-color)]">
                          <img
                            src={
                              lang.find((el) => el.selected != selectedLang).src
                            }
                            alt={
                              lang.find((el) => el.selected != selectedLang).alt
                            }
                            className="rounded-full w-[20px] aspect-square"
                          />
                          <span className="text-[10px] ">
                            {
                              lang.find((el) => el.selected != selectedLang)
                                .title
                            }
                          </span>
                        </div>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* btns */}
        {/* web view */}
        <div className="col-span-1 sm:col-span-2   hidden lg:flex items-center gap-3 order-1 lg:order-2">
          <button type="button" className=" btn-faint ">
            الخطة التدريبية
          </button>
          <button type="button" className=" btn-faint  ">
            الأعتمادات
          </button>
        </div>
        {/* mobile view */}
        <HiMenuAlt1
          onClick={openModal}
          className="text-[var(--faint-color)] text-xl cursor-pointer  order-1 lg:order-2  inline-block lg:hidden "
        />
        <Transition appear show={isOpenSide} as="div">
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as="div"
              enter="ease-out duration-300"
              enterFrom=" right-[-400px]"
              enterTo=" right-0"
              leave="ease-in duration-200"
              leaveFrom=" left-0"
              leaveTo=" left-[-400px]"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 ">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as="div"
                  enter="ease-out duration-300"
                  enterFrom="right-[-400px]"
                  enterTo="right-0"
                  leave="ease-in duration-200"
                  leaveFrom="right-0"
                  leaveTo="right-[-400px]"
                >
                  <Dialog.Panel className="w-full max-w-[250px] transform overflow-hidden rounded-tl-lg rounded-bl-lg bg-[var(--main-color)] absolute inset-y-0 right-0 p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      onClick={closeModal}
                      className="text-lg  text-[var(--faint-color)] cursor-pointer"
                    >
                      <FaXmark />
                    </Dialog.Title>

                    {/* list */}
                    <div className="mt-2 ">
                      <div className="h-[calc(100vh-120px)]  ">
                        <PerfectScrollbar>
                          {navList.map((el, idx) => {
                            return (
                              <Disclosure
                              as="div"
                              key={idx}>
                                {/* web view */}
                                {({ open }) => (
                                  <>
                                    <Disclosure.Button
                                      className={`
                                          ease-in-out
                                            pe-4
                                    flex w-full justify-end text-sm focus:outline-none focus-visible:ring-0
                                    `}
                                    >
                                      <div
                                        key={idx}
                                        className={`
                                        ${
                                          idx != 0 &&
                                          idx != navList.length - 1 &&
                                          "py-2"
                                        }
                                        ${idx == 0 && "pb-2"}
                                        ${idx == navList.length - 1 && "pt-2"}
                                        cursor-pointer  text-nowrap  flex items-center justify-end font-bold relative`}
                                        style={{
                                          color: "var(--faint-color)",
                                        }}
                                      >
                                        {el.sub.length >= 1 &&
                                          (open ? (
                                            <MdKeyboardArrowDown className="me-1" />
                                          ) : (
                                            <MdKeyboardArrowLeft className="me-1" />
                                          ))}
                                        <span
                                          className="text-xs"
                                          onClick={() => setIsOpenSide(false)}
                                        >
                                          <Link to={el.link}>{el.title}</Link>
                                        </span>
                                      </div>
                                    </Disclosure.Button>

                                    {el.sub.length >= 1 &&
                                      open &&
                                      el.sub.map((_sub, index) => {
                                        return (
                                          <Disclosure.Panel
                                            style={{
                                              color: "var(--faint-color)",
                                            }}
                                            className="px-4 py-1 text-end bg-[var(--main-color)] rounded-md  my-0.5 text-[10px]  hover:text-[var(--rd-colot)] hover:duration-300 hover:ease-in-out"
                                            key={index}
                                            static
                                          >
                                            <button type="button">
                                              <div className=" cursor-pointer">
                                                {_sub.title}
                                              </div>
                                            </button>
                                          </Disclosure.Panel>
                                        );
                                      })}
                                  </>
                                )}
                              </Disclosure>
                            );
                          })}
                        </PerfectScrollbar>
                      </div>

                      {/* btns */}
                      <div className=" flex items-center gap-3  absolute bottom-3 inset-x-[20px] ">
                        <button
                          type="button"
                          className=" btn-faint text-xs font-semibold"
                        >
                          الخطة التدريبية
                        </button>
                        <button
                          type="button"
                          className=" btn-faint text-xs font-semibold"
                        >
                          الأعتمادات
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>

      {/* list */}
      <ul className="col-span-8  items-center flex justify-end gap-10 ">
        <div className="col-span-6 ">
          <div className="flex items-center justify-end gap-4">
            {/* <li className="col-span-1"></li> */}
            {navList.reverse().map((el, idx) => {
              return (
                <ul key={idx}>
                  <li
                    className="cursor-pointer   text-nowrap    items-center justify-end hidden lg:flex"
                    style={{ color: "var(--faint-color)" }}
                  >
                    {/* web view */}
                    {el.sub.length >= 1 ? (
                      <Menu
                        as="div"
                        className="relative inline-block text-left "
                      >
                        <div>
                          <Menu.Button className="flex w-full justify-center  items-center rounded-md focus:outline-none focus-visible:ring-none cursor-pointer">
                            <MdOutlineKeyboardArrowDown className="me-1" />
                            <span className="   xl:text-[10px] ">
                              {el.title}
                            </span>
                          </Menu.Button>
                        </div>
                        <Transition
                          as='div'
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                            <div className="p-1  ">
                              {el.sub.map((_sub) => {
                                return (
                                  <Menu.Item key={_sub.title}>
                                    {({ active }) => (
                                      <button
                                        className={`${
                                          active
                                            ? "bg-[var(--faint-color)] text-white"
                                            : "text-[var(--main-color)]"
                                        } group flex w-full items-center justify-end rounded-md px-2 py-1 hover:text-[var(--main-color)] text-[10px] `}
                                      >
                                        <div className=" cursor-pointer">
                                          {_sub.title}
                                        </div>
                                      </button>
                                    )}
                                  </Menu.Item>
                                );
                              })}{" "}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    ) : (
                      <span className="   xl:text-[10px] ">
                        <Link to={el.link}>{el.title}</Link>
                      </span>
                    )}
                  </li>
                  {/* mobile view */}
                  <li className="lg:hidden cursor-pointer  col-span-1"></li>
                </ul>
              );
            })}
          </div>
        </div>

        {/* logo */}
        <li className="col-span-2 flex items-center justify-end">
          <img src={Logo} alt="logo" className="w-[80px] " />
        </li>
      </ul>

      <div className=" col-span-1 "></div>
    </div>
  );
}
