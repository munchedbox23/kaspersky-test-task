import { FC } from "react";
import styles from "./UserListPage.module.css";
import { SelectBar } from "../../ui/SelectBar/SelectBar";
import { UsersList } from "../../components/UsersList/UsersList";

export const UserListPage: FC = () => {
  return (
    <main className="pt-10">
      <div className={styles.wrapper}>
        <div className={styles.listHeading}>
          <SelectBar />
        </div>
        <section>
          <UsersList />
        </section>
      </div>
    </main>
  );
};
