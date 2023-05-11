import styles from "./keyboard.module.css";
import PropTypes from "prop-types";

export const Key = ({ text, char, className, isWord, isWin }) => {
  const isChar = (symbols, character) => {
    if (symbols?.toLowerCase().includes(character?.toLowerCase())) {
      return " " + styles.highlighted;
    } else {
      return "";
    }
  };
  const classes = [styles.keyboard__button, !isWord ? isChar(text, char) : ""];
  return (
    <div className={classes.concat(className?.split(" ")).join(" ")}>
      {isWin ? (
        <>
          <img src="win.svg" alt="win" />
        </>
      ) : isWord ? (
        <>{text}</>
      ) : text.length === 2 ? (
        <>
          {text[0]}
          <br />
          {text[1]}
        </>
      ) : text.length === 3 ? (
        <>
          {text[0]}
          <br />
          {text[1]}&nbsp;&nbsp;{text[2]}
        </>
      ) : text.length === 4 ? (
        <>
          {text[0]}
          <br />
          {text[1]}&nbsp;{text[2]}&nbsp;{text[3]}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

Key.propTypes = {
  text: PropTypes.string,
  char: PropTypes.string,
  className: PropTypes.string,
  isWord: PropTypes.bool,
  isWin: PropTypes.bool,
};
