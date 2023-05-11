import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from "./dashboard.module.css";
import {
  fetchText,
  resetTimer,
  setLang,
  toggleKeyboard,
} from "../../../features/index.js";

export const Dashboard = () => {
  const lang = useSelector((state) => state.dashboard.lang);
  const typing = useSelector((state) => state.text.typing);
  const dispatch = useDispatch();
  const handleLang = (flag) => {
    if (flag !== lang) {
      if (typing) {
        dispatch(resetTimer());
        dispatch(setLang(flag));
        dispatch(fetchText());
      } else {
        dispatch(setLang(flag));
      }
    }
  };

  return (
    <Container>
      <Row className={"gap-3"}>
        <Col className={"ms-auto w-auto col-1 p-0"}>
          <Button
            onClick={() => dispatch(toggleKeyboard())}
            className={"bg-transparent p-0 border-0"}
          >
            <img
              className={styles.keyboard}
              src="keyboard.svg"
              alt="keyboard"
            />
          </Button>
        </Col>
        <Col className={"w-auto col-1 p-0"}>
          <Button
            onClick={() => handleLang("ru")}
            className={
              lang === "eng"
                ? styles.inactive
                : "" + " bg-transparent p-0 border-0"
            }
          >
            <img src="russian.svg" alt="rus" />
          </Button>
        </Col>
        <Col className={"w-auto col-1 p-0 "}>
          <Button
            onClick={() => handleLang("eng")}
            className={
              lang === "ru"
                ? styles.inactive
                : "" + " bg-transparent p-0  border-0"
            }
          >
            <img src="english.svg" alt="eng" />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
