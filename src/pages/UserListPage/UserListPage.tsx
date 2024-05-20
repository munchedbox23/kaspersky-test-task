import { FC } from "react";
import styles from "./UserListPage.module.css";
import { SelectBar } from "../../ui/SelectBar/SelectBar";

export const UserListPage: FC = () => {
  return (
    <main className="pt-10">
      <div className={styles.wrapper}>
        <div className={styles.listHeading}>
          <SelectBar />
        </div>
        <section>
          
        </section>
      </div>
    </main>
  );
};
