import {Button, Col, Container, Row} from "react-bootstrap";

export const Dashboard = (props) => {
    return <Container>
        
        <Row className={"gap-3"}>
            <Col className={"ms-auto w-auto col-1 p-0"}>
                <Button className={"bg-transparent p-0 border-0"}><img
                    style={{height: "25px"}} src="public/keyboard.svg" alt="keyboard"/></Button>
            </Col>
            <Col className={"w-auto col-1 p-0"}>
                <Button className={"bg-transparent p-0 border-0"}><img src="public/russian.svg" alt="rus"/></Button>
            </Col>
            <Col className={"w-auto col-1 p-0 "}>
                <Button className={"bg-transparent p-0  border-0"}><img src="public/english.svg" alt="eng"/></Button>
            </Col>
        </Row>
    </Container>

}

