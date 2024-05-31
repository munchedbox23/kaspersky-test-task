import headerStyles from "./AppHeader.module.css";
import LogoImage from "../../images/logo.svg";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { navLinks } from "../../utils/constants";
import { HeaderLink } from "../HeaderLink/HeaderLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import { useAppDispatch } from "../../services/store/hooks";
import { filterUsersByName } from "../../services/features/users/usersSlice";
import { useSearchParams } from "react-router-dom";

export const AppHeader: FC = () => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 640);
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchParams({ [e.target.name]: searchTerm });
    dispatch(filterUsersByName(searchTerm));
  };

  const handleCloseSearch = () => {
    setIsInputActive(false);
    setSearchParams("");
    dispatch(filterUsersByName(""));
  };

  return (
    <header className={`${headerStyles.header} pt-8 pb-8`}>
      <div className={headerStyles.headerWrapper}>
        <img src={LogoImage} alt="Kaspersky Logo" />
        <nav className={headerStyles.navMenu}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={headerStyles.searchIcon}
            onClick={() => setIsInputActive(true)}
          />
          <AnimatePresence>
            {isInputActive && (
              <motion.form
                autoComplete="false"
                className={headerStyles.searchField}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ width: 0 }}
                transition={{ duration: 1 }}
              >
                <input
                  type="text"
                  placeholder="Поиск пользователя..."
                  name="search"
                  className={`${headerStyles.input} pt-4 pr-10 pb-4 pl-6`}
                  autoComplete="off"
                  value={searchParams.get("search") || ""}
                  onChange={handleSearchChange}
                />
                <motion.button
                  type="button"
                  className={cn(
                    headerStyles.searchIcon,
                    headerStyles.closeIcon
                  )}
                  onClick={handleCloseSearch}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
          {!isMobileView ? (
            <ul className={headerStyles.menuList}>
              {navLinks.map((link) => (
                <HeaderLink
                  key={link.id}
                  icon={link.icon}
                  text={link.name}
                  route={link.route}
                />
              ))}
            </ul>
          ) : (
            <FontAwesomeIcon icon={faBars} className={headerStyles.menuIcon} />
          )}
        </nav>
      </div>
    </header>
  );
};
