import headerStyles from "./AppHeader.module.css";
import LogoImage from "../../images/logo.svg";
import { FC, useState } from "react";
import { navLinks } from "../../utils/constants";
import { HeaderLink } from "../HeaderLink/HeaderLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

export const AppHeader: FC = () => {
  const [isInputActive, setIsInputActive] = useState(false);

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
                role="search"
                className={headerStyles.searchField}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ width: 0 }}
                transition={{ duration: 1 }}
              >
                <input
                  type="text"
                  placeholder="Поиск..."
                  name="search"
                  className={`${headerStyles.input} pt-4 pr-10 pb-4 pl-6`}
                  autoComplete="off"
                  maxLength={550}
                />
                <motion.button
                  type="button"
                  className={cn(
                    headerStyles.searchIcon,
                    headerStyles.closeIcon
                  )}
                  onClick={() => setIsInputActive(false)}
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
        </nav>
      </div>
    </header>
  );
};
