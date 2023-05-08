import {Row, Col, Container} from "react-bootstrap";
import styles from "./timer.module.css"

export const Timer = () => {
    return <Container className={"mt-5 mb-3"}>
        <Row className={"d-flex justify-content-center"}>
            <Col className={'col-auto  rounded-5 px-5 py-1 ' +
                'd-flex justify-content-center align-items-center fs-2 fw-semibold ' + styles.timer}>
                <span>0</span>
                <span>:</span>
                <span>0</span>
                <span>0</span>
            </Col>
        </Row>
    </Container>

}

