import { Routes, useLocation, Route } from "react-router";
import { AnimatePresence } from "framer-motion";
import { MainLayout } from "../../layouts/MainLayout";
import { FC, useEffect } from "react";
import { ROUTE } from "../../utils/constants";
import { HomePage, NotFoundPage, UserListPage } from "../../pages";
import { useAppDispatch } from "../../services/store/hooks";
import { getUsers } from "../../services/features/users/usersSlice";

const App: FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <AnimatePresence mode="wait">
      <Routes key={location?.pathname} location={location}>
        <Route path={ROUTE.home} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTE.userList} element={<UserListPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
