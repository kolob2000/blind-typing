import { useEffect, useRef } from "react";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./canvas.module.css";

export const Canvas = ({ text, position, index }) => {
  const canvas = useRef();

  useEffect(() => {
    const context = canvas.current?.getContext("2d");
    const font = "40px  Arial";
    canvas.current.height = 80;
    context.font = font;
    context.lineHeight = 40;
    position === "center" &&
      (canvas.current.width = context.measureText(text[index]).width);
    context.textBaseline = "top";
    context.font = font;
    context.fillStyle = "rgb(33,37,41)";
    position === "start" && (context.textAlign = "right");
    position === "center" && (context.fillStyle = "rgb(220,53,69)");

    const textY = 20;
    context.clearRect(0, 0, canvas.current.width, canvas.current.height);
    if (index < text.length) {
      context.clearRect(0, 0, canvas.current.width, canvas.current.height);

      context.fillText(
        position === "start"
          ? text.slice(0, index)
          : position === "end"
          ? text.slice(index + 1, text.length)
          : text[index],
        position === "start" ? canvas.current.width : 0,
        textY
      );
    }
  }, [index]);
  return (
    <Col
      className={"col-auto p-0 " + `${position === "start" ? styles.blur : ""}`}
    >
      <canvas ref={canvas}></canvas>
    </Col>
  );
};

Canvas.propTypes = {
  text: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  position: PropTypes.string,
  index: PropTypes.number,
};
