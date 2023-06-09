import { Container, Row } from "react-bootstrap";
import styles from "./main.module.css";
import { Canvas, Dashboard, Keyboard, Output, Result } from "../Library";
import { useEffect } from "react";
import { Timer } from "../Library/Timer";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchText,
  incrementAllCount,
  incrementCorrectCount,
  resetIndication,
  resetTimer,
  setCorrectness,
  setIndex,
  setModal,
  setPause,
  setSpeed,
  setTyping,
} from "../../features/index.js";

export const Main = () => {
  const audio = new Audio("no.mp3");
  const sound = useSelector((state) => state.dashboard.sound);
  const pause = useSelector((state) => state.timer.pause);
  const seconds = useSelector((state) => state.timer.seconds);
  const minutes = useSelector((state) => state.timer.minutes);
  const count = useSelector((state) => state.timer.allCount);
  const correctCount = useSelector((state) => state.timer.correctCount);
  const modal = useSelector((state) => state.timer.modal);
  const keyboard = useSelector((state) => state.dashboard.keyboard);
  const index = useSelector((state) => state.text.index);
  const text = useSelector((state) => state.text.text);
  const typing = useSelector((state) => state.text.typing);
  const dispatch = useDispatch();
  useEffect(() => {
    if (minutes * 60 + seconds >= 120) {
      dispatch(setTyping(false));
      dispatch(setPause(true));
      stopTyping();
      dispatch(setModal(true));
      dispatch(resetTimer());
    }
  }, [seconds]);
  useEffect(() => {
    window.addEventListener("keydown", handleButton);
    return () => {
      window.removeEventListener("keydown", handleButton);
    };
  }, [index, text, modal, sound, pause]);
  const handleButton = (e) => {
    if (e.key === "Enter" && !typing) {
      if (!modal) {
        dispatch(fetchText());
        dispatch(setTyping(true));
        dispatch(resetTimer());
        dispatch(resetIndication());
        dispatch(setPause(false));
      }
    } else if (e.key === "Enter" && typing && pause) {
      dispatch(setPause(false));
      if(modal){
        dispatch(setModal(false));
      }
    }

    if (typing && !modal) {
      dispatch(incrementAllCount());
      if (e.key === text[index] && index < text.length) {
        dispatch(incrementCorrectCount());
        dispatch(setIndex(index + 1));

        if (index + 1 >= text.length) {
          dispatch(setTyping(false));
          dispatch(setPause(true));
          stopTyping();
          dispatch(setModal(true));
          dispatch(resetTimer());
        }
      } else if (e.key !== "Escape" && e.key !== "Shift" && sound) {
        console.log("here");
        audio.play();
      }
    }
    if (e.key === "Escape") {
      if (typing) {
        dispatch(setPause(!pause));
        stopTyping();
      }
      dispatch(setModal(!modal));
    }
  };

  function stopTyping() {
    const times = minutes * 60 + seconds;
    if (times !== 0) {
      dispatch(setSpeed(Math.floor((index / times) * 60)));
    }
    if (count === correctCount) {
      dispatch(setCorrectness(100));
    } else {
      dispatch(
        setCorrectness(
          Math.floor((count - (count - correctCount)) / (count / 100))
        )
      );
    }
  }

  return (
    <Container className={"d-flex justify-content-center"}>
      <Row
        className={
          "d-flex flex-column align-items-center " + styles["main-output"]
        }
      >
        <Dashboard />
        <Timer />
        <Output
          canvasList={[
            <Canvas
              key={"start"}
              position={"start"}
              text={text}
              height={100}
              index={index}
            />,
            <Canvas
              key={"center"}
              position={"center"}
              text={text}
              height={100}
              index={index}
            />,
            <Canvas
              key={"end"}
              position={"end"}
              text={text}
              height={100}
              index={index}
            />,
          ]}
        />
        {keyboard ? <Keyboard char={text[index]} /> : ""}
      </Row>
      <Result />
    </Container>
  );
};
