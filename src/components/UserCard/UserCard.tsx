import { FC } from "react";
import { IUser } from "../../types/userTypes";
import userStyles from "./UserCard.module.css";
import Gravatar from "react-gravatar";

type TUserCardProps = Omit<IUser, "_id" | "verified">;

export const UserCard: FC<TUserCardProps> = ({ name, email, group, phone }) => {
  return (
    <li className={`${userStyles.userCard} p-4`}>
      <h4 className="font-medium font-semibold">{name}</h4>
      <Gravatar
        email={email}
        rating="pg"
        default="mp"
        className={userStyles.userAvatar}
        size={100}
      />
      <span
        className={`${
          group === "Unmanaged" ? "text-lg font-semibold" : "text-base"
        } font-light`}
      >
        {group}
      </span>
      <p>{phone}</p>
    </li>
  );
};
