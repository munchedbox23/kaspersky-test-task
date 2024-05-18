import { Routes, useLocation, Route } from "react-router";
import { AnimatePresence } from "framer-motion";
import { MainLayout } from "../../layouts/MainLayout";
import { FC } from "react";
import { ROUTE } from "../../utils/constants";

const App: FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location?.pathname} location={location}>
        <Route path={ROUTE.home} element={<MainLayout />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
