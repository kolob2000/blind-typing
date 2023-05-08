import {Navigation} from "./Navigation/index.js";
import {Outlet} from "react-router-dom";
import {Footer} from "./Footer/Footer.jsx";
import {Container} from "react-bootstrap";

export const Layout = () => (
    <>
        <Navigation/>
        <Container className={"flex-grow-1 d-flex flex-column"}>
            <Outlet/>
        </Container>
        <Footer/>
    </>
);

