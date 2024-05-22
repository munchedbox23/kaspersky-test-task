import { FC } from "react";
import cardStyles from "./ColumnCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { useDrag } from "react-dnd";
import { IUser } from "../../../../types/userTypes";

export const ColumnCard: FC<{ user: IUser }> = ({ user }) => {
  const [{ opacity }, dragRef] = useDrag({
    type: "card",
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
    item: { ...user },
  });

  return (
    <div
      ref={dragRef}
      style={{ opacity }}
      className={`${cardStyles.columnCard} p-4`}
    >
      {window.innerWidth > 975 && (
        <FontAwesomeIcon icon={faGripVertical} className="text-gray-600" />
      )}

      <div className={cardStyles.textWrapper}>
        <h4 className="text-lg font-medium">{user.name}</h4>
        <span className={cardStyles.email}>{user.email}</span>
      </div>
    </div>
  );
};
