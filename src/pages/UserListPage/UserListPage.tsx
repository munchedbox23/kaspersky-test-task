import { FC, useRef } from "react";
import styles from "./UserListPage.module.css";
import { SelectBar } from "../../ui/SelectBar/SelectBar";
import { CardsList } from "../../components/UsersList/CardsList/CardsList";
import { TableList } from "../../components/UsersList/TableList/TableList";
import { motion } from "framer-motion";
import { useAppSelector } from "../../services/store/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

export const UserListPage: FC = () => {
  const users = useAppSelector((store) => store.users.users);
  const displayMode = useAppSelector((store) => store.users.displayMode);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleTabIcon = () => {
    contentRef.current?.scrollIntoView();
  };

  return (
    <motion.main className="pt-10">
      <div className={styles.wrapper}>
        <div className={styles.listHeading}>
          <SelectBar />
        </div>
        <section className={styles.listContainer}>
          {displayMode === "table" ? (
            <TableList data={users} />
          ) : displayMode === "cards" ? (
            <>
              <CardsList ref={contentRef} data={users} />
              <FontAwesomeIcon
                icon={faCircleArrowUp}
                className={styles.circleUp}
                onClick={handleTabIcon}
              />
            </>
          ) : null}
        </section>
      </div>
    </motion.main>
  );
};
