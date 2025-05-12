
import React from "react";
import coverImg from "../../assets/new/cover_3.jpg";



  const FQA = React.lazy(() => import("./_components/fqa"));
  const Features = React.lazy(() => import("./_components/features"));
  const Traning = React.lazy(() => import("./_components/traning"));
  const Contact = React.lazy(() => import("./_components/contact"));

export default function Home() {
 
  const cover = {
    backgroundImage: `url(${coverImg})`, // Use the imported image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "24px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    borderRadius: "12px",
  };
  
  return (
    <section>
      {/* 1st */}

      <section className="bg-[var(--fait-color)]  py-5">
        <div className="rounded-xl  relative wrapper !p-0">
          {/* overlay */}
          <div className="bg-[#00000015] absolute inset-0 rounded-xl"></div>

          <div style={cover} className="p-10 sm:p-20 ">
            {/* content */}
            <div className="   ">
              <div className="w-[90%] lg:w-[60%] m-auto center flex-col ">
                <h1 className="head">التدريب</h1>
                <div className="">
                  <p className=" para  ">
                    فـي عصـرِ النهضـة التكنولوجيـة تقـدم آيفورى حقيبـة تدريبيـة
                    ذات موضوعـات تفاعلية ومؤثـرة، تـم إعدادهـا على نحِو
                    إسـتراتيجي لتلائم طبيعـة التحديـات التـي يواجههـا العالـم
                    فـي الفتـرة الحاليـة. نهـدف مـن تلـك الموضوعـات التدريبيـة
                    سـد الفجـوة ومعالجـة نقــاط الضعــف لــدى الأفــراد والعمــل
                    علــى تنميــة مواهبهــم وتوســيع مداركهــم وتعزيــز
                    مهاراتهــم بشــكل ملائم لســوق العمــل.
                  </p>
                  <p className="para ">
                    عـلاوة علـى تحسـين أداء المؤسسـات والشـركات بهـدف الوصـول
                    بهـم نحـو أعلـى معـدلات النمـو والإزدهـار. ويندرج تحت كل
                    موضوع تدريبي عدة برامج مختصة بالتدريب والتأهيل والتوجية
                    بالإضافة إلى البرامج الإستشارية.
                  </p>
                </div>

                {/* btns */}
                <div className="flex items-center gap-3  w-[60%] mx-auto   text-[8px] sm:text-xs lg:text-sm font-bold mt-2 lg:mt-10 ">
                  <button type="button" className="btn_hover ">
                    <div className=""></div>
                    الخطة التدريبية
                  </button>
                  <button type="button" className=" btn_hover ">
                    <div></div>
                    الأعتمادات
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd */}
      <section className=" text-end">
        <div className=" wrapper">
          <div className="text-center w-[80%] mx-auto">
            <h2 className="text-[var(--main-color)] font-semibold text-lg mb-3">
              تقنية المعلومات والتحول الرقمي
            </h2>
            <p className="text-[var(--main-color)] font-semibold  text-xs">
              في عصرنا الحالي، أصبحت تقنية المعلومات والتحول الرقمي من الركائز
              الأساسية التي تقود التطور في جميع المجالات. تعتمد تقنية المعلومات
              على استخدام الحواسيب والبرمجيات والشبكات لتخزين البيانات ومعالجتها
              ونقلها، بينما يشير التحول الرقمي إلى عملية استخدام هذه التقنيات
              لإعادة تصميم العمليات والخدمات لتصبح أكثر كفاءة وسرعة ومرونة.
            </p>
          </div>
          <div className="my-10">
            <Features/>
          </div>
        </div>
      </section>
      {/* 3rd */}

      <section className=" text-end bg-[var(--faint-color)]">
     <Traning/>
      </section>

      {/* 4th */}
      <section className="">
        <FQA />
      </section>

      {/* 5th */}
      <section className="bg-[var(--faint-color)]">
       <Contact/>
      </section>
    </section>
  );
}
