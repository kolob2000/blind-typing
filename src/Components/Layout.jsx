import { Navigation } from "./Navigation/index.js";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer/Footer.jsx";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPause } from "../features/index.js";

export const Layout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPause(true));
  }, [location.pathname]);
  return (
    <>
      <Navigation />
      <Container className={"min-width flex-grow-1 d-flex flex-column"}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

