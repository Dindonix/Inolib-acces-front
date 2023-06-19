import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";

const LibraryNavBar = () => {
  const { t } = useTranslation();
  i18n.language;

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full burgerStyle2 transition ease transform duration-300`;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="windowStyle rounded-md h-[10vh] flex justify-end items-center w-[87vw]">
        <ul className="menu flex items-start">
          <li>
            <div className="block px-4 py-2" aria-current="page">
              {t("nav-home")}
            </div>
          </li>
          <li>
            <div href="#" className="block px-4 py-2">
              {t("nav-about")}
            </div>
          </li>
          <li>
            <div href="#" className="block px-4 py-2">
              Contact
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LibraryNavBar;
