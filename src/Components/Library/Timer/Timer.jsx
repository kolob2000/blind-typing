import { Row, Col, Container } from "react-bootstrap";
import styles from "./timer.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMinutes,
  setSeconds,
} from "../../../features/index.js";

export const Timer = () => {
  // const typing = useSelector((state) => state.text.typing);
  // const modal = useSelector((state) => state.timer.modal);
  const pause = useSelector((state) => state.timer.pause);
  const seconds = useSelector((state) => state.timer.seconds);
  const minutes = useSelector((state) => state.timer.minutes);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        if (seconds >= 59) {
          dispatch(setMinutes(minutes + 1));
          dispatch(setSeconds(0));
        } else {
          dispatch(setSeconds(seconds + 1));
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes, pause]);
  //

  return (
    <Container className={"mt-5 mb-3"}>
      <Row className={"d-flex justify-content-center"}>
        <Col
          className={
            "col-auto  rounded-5 px-5 py-1 " +
            "d-flex justify-content-center align-items-center fs-2 fw-semibold " +
            styles.timer
          }
        >
          {minutes < 10 ? (
            <div className={styles["double-digit"]}>0{minutes}</div>
          ) : (
            <div className={styles["double-digit"]}>{minutes}</div>
          )}
          :
          {seconds < 10 ? (
            <div className={styles["double-digit"]}>0{seconds}</div>
          ) : (
            <div className={styles["double-digit"]}>{seconds}</div>
          )}
        </Col>
      </Row>
    </Container>
  );
};
