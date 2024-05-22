import { FC } from "react";
import cardStyles from "./ColumnCard.module.css";
import { IUser } from "../../../../types/userTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useDrop, useDrag } from "react-dnd";
import { Identifier } from "dnd-core";
import { useAppDispatch } from "../../../../services/store/hooks";
import { moveCard } from "../../../../services/features/users/usersSlice";

export const ColumnCard: FC<
  Pick<IUser, "name" | "email"> & { index: number; id: string; group: string }
> = ({ name, email, index, id, group }) => {
  const myRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useAppDispatch();

  const [{ handlerId }, drop] = useDrop<
    { index: number; group: string },
    void,
    { handlerId: Identifier | null }
  >({
    accept: "card",
    collect: (monitor) => ({
      handlerId: monitor?.getHandlerId(),
    }),
    hover(item, monitor) {
      if (!myRef.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = myRef.current.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      if (
        (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) ||
        (dragIndex > hoverIndex && hoverClientY > hoverMiddleY)
      ) {
        return;
      }
      dispatch(moveCard({ dragIndex, hoverIndex, sourceGroup: group }));
      item.index = hoverIndex;
    },
  });

  const [{ opacity }, drag] = useDrag({
    type: "card",
    item: () => {
      return { id, index, group };
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  drag(drop(myRef));

  return (
    <div
      style={{ opacity }}
      ref={myRef}
      className={`${cardStyles.columnCard} p-4`}
    >
      <FontAwesomeIcon icon={faGripVertical} className="text-gray-600" />
      <div className={cardStyles.textWrapper}>
        <h4 className="text-lg font-medium">{name}</h4>
        <span>{email}</span>
      </div>
    </div>
  );
};
