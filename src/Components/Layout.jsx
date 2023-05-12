import { Navigation } from "./Navigation/index.js";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer/Footer.jsx";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPause } from "../features/index.js";
import styles from "./layout.module.css";

export const Layout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPause(true));
  }, [location.pathname]);
  return (
    <div className={styles["min-width"]}>
      <Navigation />
      <Container className={"min-width flex-grow-1 d-flex flex-column"}>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};
