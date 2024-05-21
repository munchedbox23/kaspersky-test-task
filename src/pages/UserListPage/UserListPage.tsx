import { FC } from "react";
import styles from "./UserListPage.module.css";
import { SelectBar } from "../../ui/SelectBar/SelectBar";
import { CardsList } from "../../components/UsersList/CardsList/CardsList";
import { TableList } from "../../components/UsersList/TableList/TableList";
import { motion } from "framer-motion";
import { useAppSelector } from "../../services/store/hooks";

export const UserListPage: FC = () => {
  const users = useAppSelector((store) => store.users.users);
  const displayMode = useAppSelector((store) => store.users.displayMode);

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
            <CardsList data={users} />
          ) : null}
        </section>
      </div>
    </motion.main>
  );
};
