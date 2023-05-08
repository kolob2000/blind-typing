import {Container, Row} from "react-bootstrap";
import PropTypes from "prop-types";
import styles from './output.module.css'

export const Output = (props) => (
    <Container className={"d-flex justify-content-center mt-5"}>
        <Row className={"flex-nowrap px-4 rounded-4 justify-content-center border border-3 " + styles.output}>
            {props.canvasList}
        </Row>
    </Container>
);


Output.propTypes = {
    canvasList: PropTypes.arrayOf(PropTypes.node),
};