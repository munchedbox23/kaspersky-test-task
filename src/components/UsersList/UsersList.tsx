import { FC, useState } from "react";
import styles from "./UsersList.module.css";
import { UserCard } from "../UserCard/UserCard";
import { useAppSelector } from "../../services/store/hooks";
import { motion } from "framer-motion";

export const UsersList: FC = () => {
  const [visibleUsers, setVisibleUsers] = useState(15);
  const users = useAppSelector((store) => store.users.users);

  const showMoreUsers = () => {
    setVisibleUsers((prevState) => prevState + 15);
  };

  return (
    <div className={styles.listWrapper}>
      <ul className={`${styles.userList} pb-10`}>
        {users.slice(0, visibleUsers).map((user) => (
          <UserCard key={user._id} {...user} />
        ))}
      </ul>
      {visibleUsers < users.length && (
        <motion.button
          initial={{ background: "var(--primary-button-bg-color)" }}
          whileHover={{ background: "var(--color-primary-active)" }}
          className={styles.moreBtn}
          onClick={showMoreUsers}
        >
          Показать больше
        </motion.button>
      )}
    </div>
  );
};
