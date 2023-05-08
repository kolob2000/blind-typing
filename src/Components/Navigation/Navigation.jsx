import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const Navigation = () => <Navbar bg="success" variant="dark" expand="lg">
    <Container>
        <Navbar.Brand>BlindTP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={"mx-auto gap-3"}>
                <NavLink to={'/'} className={"nav-link"}>Главная</NavLink>
                <NavLink to={'rules'} className={"nav-link"}>Правила</NavLink>
                <NavLink to={'about'} className={"nav-link"}>О нас</NavLink>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>;

