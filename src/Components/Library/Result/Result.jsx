import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchText,
  resetTimer,
  setModal,
  setPause,
  setTyping,
} from "../../../features/index.js";

export function Result(props) {
  const speed = useSelector((state) => state.timer.speed);
  const correctness = useSelector((state) => state.timer.correctness);
  const modal = useSelector((state) => state.timer.modal);
  const dispatch = useDispatch();
  const typing = useSelector((state) => state.text.typing);
  const handleStop = () => {
    dispatch(setTyping(false));
    dispatch(resetTimer());
    dispatch(setModal(false));
  };
  const handleRestart = () => {
    dispatch(resetTimer());
    dispatch(fetchText());
    dispatch(setTyping(true));
    dispatch(setPause(false));
    dispatch(setModal(false));
  };
  const handleContinue = () => {
    dispatch(setModal(false));
    if (typing) {
      dispatch(setPause(false));
    }
  };
  return (
    <Modal
      {...props}
      show={modal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header onClick={handleContinue} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Blind Typing
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Результаты:</h4>
        <p>Скорость: {speed} зн./мин.</p>
        <p>Точность: {correctness}%</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className={"px-5 btn-success btn-block"} onClick={handleStop}>
          Завершить
        </Button>
        <Button
          className={"px-4 btn-success btn-block"}
          onClick={handleRestart}
        >
          Начать сначала
        </Button>
        <Button
          className={"px-5 btn-danger btn-block"}
          onClick={handleContinue}
        >
          Продолжить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
