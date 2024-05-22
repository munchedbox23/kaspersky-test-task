export interface IUser {
  _id: string;
  name: string;
  account: string;
  email: string;
  group: string;
  phone: string;
  verified: boolean;
}

export type TDisplayMode = "cards" | "table" | "columns";

export type TListProps = {
  data: IUser[];
};
