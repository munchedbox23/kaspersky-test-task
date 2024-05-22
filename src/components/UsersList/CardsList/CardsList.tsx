import { FC, forwardRef, useState } from "react";
import styles from "./CardsList.module.css";
import { UserCard } from "../../UserCard/UserCard";
import { TListProps } from "../../../types/userTypes";
import { PrimaryButton } from "../../../ui/PrimaryButton/PrimaryButton";
import { useAppDispatch, useAppSelector } from "../../../services/store/hooks";
import { TSortOption } from "../../../types/userTypes";
import { setSortOption } from "../../../services/features/users/usersSlice";
import { useSearchParams } from "react-router-dom";

export const CardsList = forwardRef<HTMLDivElement, TListProps>(
  ({ data }, ref) => {
    const [visibleUsers, setVisibleUsers] = useState(15);
    const sortOption = useAppSelector((store) => store.users.sortOption);
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    const showMoreUsers = () => {
      setVisibleUsers((prevState) => prevState + 15);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
      dispatch(setSortOption(e.target.value as TSortOption));
    };
    return (
      <article className={styles.cardsList}>
        <div ref={ref} className={`${styles.sortContainer} mb-7 ml-20`}>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className={styles.sortSelect}
            name="sort"
          >
            <option value="default">По умолчанию</option>
            <option value="name-asc">Имя: по возрастанию</option>
            <option value="name-desc">Имя: по убыванию</option>
            <option value="group-asc">Группа: по возрастанию</option>
            <option value="group-desc">Группа: по убыванию</option>
            <option value="phone-asc">Телефон: по возрастанию</option>
            <option value="phone-desc">Телефон: по убыванию</option>
          </select>
        </div>
        <ul className={`${styles.userList} pb-10`}>
          {data.slice(0, visibleUsers).map((user) => (
            <UserCard key={user._id} {...user} />
          ))}
        </ul>
        {visibleUsers < data.length && (
          <PrimaryButton onClick={showMoreUsers}>Показать больше</PrimaryButton>
        )}
      </article>
    );
  }
);
