import { FC } from "react";
import { useDrop } from "react-dnd";
import styles from "./Column.module.css";
import { IUser } from "../../../../types/userTypes";
import { ColumnCard } from "../ColumnCard/ColumnCard";

type TColumnProps = {
  group: string;
  users: IUser[];
  onDrop: (group: string, user: IUser) => void;
};

export const Column: FC<TColumnProps> = ({ group, users, onDrop }) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: "card",
    drop: (item: IUser) => onDrop(group, item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={dropRef}
      className={`${styles.column} p-4 ${isOver ? styles.isOver : ""}`}
    >
      <h2 className="text-2xl font-normal text-gray-500 mb-3">{group}</h2>
      <div className={styles.cardsList}>
        {users.map((user) => (
          <ColumnCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};
