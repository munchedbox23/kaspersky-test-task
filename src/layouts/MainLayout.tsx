import { FC } from "react";
import { AppHeader } from "../components/AppHeader/AppHeader";
import { Preloader } from "../ui/Preloader/Preloader";
import { Outlet } from "react-router";

export const MainLayout: FC = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
};
