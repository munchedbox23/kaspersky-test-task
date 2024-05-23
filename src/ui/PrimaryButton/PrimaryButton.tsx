import { FC, PropsWithChildren } from "react";
import styles from "./PrimaryButton.module.css";
import { motion } from "framer-motion";

type TPrimaryButton = {
  onClick: () => void;
};

export const PrimaryButton: FC<PropsWithChildren<TPrimaryButton>> = ({
  onClick,
  children,
}) => {
  return (
    <motion.button
      initial={{ background: "var(--primary-button-bg-color)" }}
      whileHover={{ background: "var(--color-primary-active)" }}
      className={`${styles.primaryBtn} text-xl`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
