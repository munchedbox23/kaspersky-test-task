import { FC, useState } from "react";
import styles from "./CardsList.module.css";
import { UserCard } from "../../UserCard/UserCard";
import { TListProps } from "../../../types/userTypes";
import { PrimaryButton } from "../../../ui/PrimaryButton/PrimaryButton";

export const CardsList: FC<TListProps> = ({ data }) => {
  const [visibleUsers, setVisibleUsers] = useState(15);

  const showMoreUsers = () => {
    setVisibleUsers((prevState) => prevState + 15);
  };

  return (
    <>
      <ul className={`${styles.userList} pb-10`}>
        {data.slice(0, visibleUsers).map((user) => (
          <UserCard key={user._id} {...user} />
        ))}
      </ul>
      {visibleUsers < data.length && (
        <PrimaryButton onClick={showMoreUsers}>Показать больше</PrimaryButton>
      )}
    </>
  );
};
