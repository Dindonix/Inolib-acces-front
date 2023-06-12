import NavBar from "@components/header/NavBar";
import { Link } from "react-router-dom";
import ImageSlider from "../components/UI/ImageSlider";
import TextReveal from "@components/UI/TextReveal";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Home = () => {
  const { t } = useTranslation();
  i18n.language;

  return (
    <>
      <header id="header">
        <NavBar href="#main" title="Inotest" />
      </header>

      <section className="md:grid md:grid-cols-2 md:grid-rows-2 md:justify-items-start h-[90vh]">
        <div className="h-[8rem] md:h-[35vh] flex flex-col items-center justify-center md:col-start-1 md:row-start-1 md:place-content-end">
          <h2 className="title md:max-w-min text-3xl md:block lg:block xl:block md:text-4xl xl:text-5xl lg:text-5xl md:ml-[35rem] lg:ml-[45rem] xl:mt-[-3.5rem] xl:ml-[59rem]">
            {t("home-title")}
          </h2>
        </div>
        <div className="md:mt-[5rem] mt-60 flex min-[1050px]:flex-row flex-col items-center gap-6 md:col-start-2 md:row-start-2">
          <Link
            to="/getstarted"
            className="bg-[#000] buttonClass text-white w-[15rem] rounded-lg h-[3rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center"
          >
            {t("getstarted")}
          </Link>
          <a
            href="#main"
            className="bg-[#000] buttonClass text-white w-[15rem] rounded-lg h-[3rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center"
          >
            {t("learnmore")}
          </a>
        </div>
      </section>

      <section id="main">
        <TextReveal />
        <div className="flex flex-col gap-6 max-w-xl ml-5 p-6 mt-0 items-start reveal">
          <h2 className="title text-3xl md:text-4xl xl:text-5xl lg:text-5xl font-semibold">{t("library-title")}</h2>
          <p className="title text-xl">{t("library-content")}</p>
        </div>
      </section>

      <section className="flex flex-col items-center justify-end overflow-x-hidden">
        <div className="mt-36">
          <ImageSlider />
        </div>
      </section>

      <footer className="flex justify-center pb-12">
        <div>
          <a
            href="#header"
            className="buttonClass p-3 w-fit rounded h-[3rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center cursor-pointer"
          >
            {t("backtop")}
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
