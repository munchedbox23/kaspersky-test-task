import { FC, useState } from "react";
import styles from "./CardsList.module.css";
import { UserCard } from "../../UserCard/UserCard";
import { motion } from "framer-motion";
import { IUser } from "../../../types/userTypes";
import { TListProps } from "../../../types/userTypes";

export const CardsList: FC<TListProps> = ({ data }) => {
  const [visibleUsers, setVisibleUsers] = useState(15);

  const showMoreUsers = () => {
    setVisibleUsers((prevState) => prevState + 15);
  };

  return (
    <>
      <ul className={`${styles.userList} pb-10`}>
        {data.slice(0, visibleUsers).map((user) => (
          <UserCard key={user._id} {...user} />
        ))}
      </ul>
      {visibleUsers < data.length && (
        <motion.button
          initial={{ background: "var(--primary-button-bg-color)" }}
          whileHover={{ background: "var(--color-primary-active)" }}
          className={styles.moreBtn}
          onClick={showMoreUsers}
        >
          Показать больше
        </motion.button>
      )}
    </>
  );
};
