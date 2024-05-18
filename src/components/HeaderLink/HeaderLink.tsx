import { FC } from "react";
import styles from "./HeaderLink.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { NavLink } from "react-router-dom";

type THeaderLink = {
  route: string;
  text: string;
  icon: IconDefinition;
};

export const HeaderLink: FC<THeaderLink> = ({ route, text, icon }) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        `${styles.navLink} ${isActive && styles.primary} pr-3 pl-3`
      }
    >
      <FontAwesomeIcon icon={icon} className={styles.linkIcon} />
      <span className="text-xl">{text}</span>
    </NavLink>
  );
};
