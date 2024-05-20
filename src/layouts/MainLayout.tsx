import { FC } from "react";
import { AppHeader } from "../components/AppHeader/AppHeader";
import { Preloader } from "../ui/Preloader/Preloader";
import { Outlet } from "react-router";
import { useAppSelector } from "../services/store/hooks";

export const MainLayout: FC = () => {
  const isUsersRequestLoading = useAppSelector(
    (store) => store.users.isUsersRequestLoading
  );
  return (
    <>
      <AppHeader />
      {isUsersRequestLoading ? <Preloader /> : <Outlet />}
    </>
  );
};
