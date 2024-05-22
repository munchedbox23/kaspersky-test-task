import styles from "./ColumnList.module.css";
import { v4 as uuidv4 } from "uuid";
import { FC } from "react";
import { TListProps } from "../../../types/userTypes";
import { ColumnCard } from "./ColumnCard/ColumnCard";

export const ColumnList: FC<TListProps> = ({ data }) => {
  const userGroups = Array.from(
    new Set(
      data
        .map((user) => user.group.split("/")[1])
        .filter((group) => group !== undefined)
    )
  );

  return (
    <section className={styles.columnSection}>
      <ul className={styles.columnList}>
        {userGroups.splice(0, 3).map((group) => (
          <div key={uuidv4()} className={`${styles.column} p-4`}>
            <h2 className="text-2xl font-normal text-gray-500 mb-3">{group}</h2>
            <div className={styles.cardsList}>
              {data
                .filter((user) => user.group.includes(group))
                .map((user, index) => (
                  <ColumnCard
                    key={user._id}
                    index={index}
                    name={user.name}
                    email={user.email}
                    id={user._id}
                    group={user.group}
                  />
                ))}
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
};
