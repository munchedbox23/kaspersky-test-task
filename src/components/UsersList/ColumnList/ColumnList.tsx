import styles from "./ColumnList.module.css";
import { v4 as uuidv4 } from "uuid";
import { FC, useState } from "react";
import { TListProps, IUser } from "../../../types/userTypes";
import { Column } from "./Column/Column";

export const ColumnList: FC<TListProps> = ({ data }) => {
  const userGroups = Array.from(
    new Set(
      data
        .map((user) => user.group.split("/")[1])
        .filter((group) => group !== undefined)
    )
  ).splice(0, 3);

  const [columns, setColumns] = useState(
    userGroups.reduce((acc, group) => {
      acc[group] = data.filter((user) => user.group.includes(group));
      return acc;
    }, {} as Record<string, IUser[]>)
  );

  const handleDrop = (group: string, user: IUser) => {
    setColumns((prevColumns) => {
      const updatedColumns = { ...prevColumns };

      Object.keys(updatedColumns).forEach((key) => {
        updatedColumns[key] = updatedColumns[key].filter(
          (u) => u._id !== user._id
        );
      });

      if (!updatedColumns[group]) {
        updatedColumns[group] = [];
      }
      updatedColumns[group] = [user, ...updatedColumns[group]];

      return updatedColumns;
    });
  };

  return (
    <section className={styles.columnSection}>
      <ul className={styles.columnList}>
        {userGroups.map((group) => (
          <Column
            key={uuidv4()}
            group={group}
            users={columns[group]}
            onDrop={handleDrop}
          />
        ))}
      </ul>
    </section>
  );
};
