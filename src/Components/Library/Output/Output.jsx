import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./output.module.css";
import { useSelector } from "react-redux";

export const Output = (props) => {
  const pause = useSelector((state) => state.timer.pause);
  const loading = useSelector((state) => state.text.loading);
  const typing = useSelector((state) => state.text.typing);
  return (
    <Container className={"d-flex justify-content-center mt-3"}>
      <Row
        className={
          "flex-nowrap px-4 rounded-4 justify-content-center " + styles.output
        }
      >
        {!typing ? (
          <div
            className={
              "d-flex justify-content-center align-items-center fs-2 " +
              styles.h80
            }
          >
            Enter начать / Esc пауза{" "}
          </div>
        ) : loading ? (
          <div
            className={
              "d-flex justify-content-center align-items-center fs-2 " +
              styles.h80
            }
          >
            Loading...
          </div>
        ) : pause ? (
          <div
            className={
              "d-flex justify-content-center align-items-center fs-2 " +
              styles.h80
            }
          >
            Пауза. Продолжить Enter.
          </div>
        ) : (
          props.canvasList
        )}
      </Row>
    </Container>
  );
};

Output.propTypes = {
  canvasList: PropTypes.arrayOf(PropTypes.node),
};
