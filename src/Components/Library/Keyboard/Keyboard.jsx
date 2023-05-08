import styles from './keyboard.module.css'
import {Container, Row} from "react-bootstrap";
import PropTypes from "prop-types";
import {Button} from "./Button.jsx";

export const Keyboard = ({char}) => {
    const isShifted = (character) => {
        const shiftedCharacters = 'Ё!"№;%:?*()_+/ЪХЗЩШГНЕКУЦЙФЫВАПРОЛДЖЭ,' + 'ЮБЬТИМСЧЯ~!@#$%^&*()_+}{POIUYTREWQASDFGHJKL:"?><MNBVCXZ'
        return shiftedCharacters.includes(character) ? " " + styles.highlighted : ""
    }
    const isSpace = (char) => char === " " ? " " + styles.highlighted : ""

    class ButtonProps {
        constructor(text = "", className = "",
                    isWord = false, isWin = false) {
            this.text = text;
            this.className = className;
            this.isWord = isWord;
            this.isWin = isWin;
        }
    }

    const rowOne = [
        new ButtonProps("~`ё", styles.keyboard__button_lt,),
        new ButtonProps("!1"),
        new ButtonProps("@2\""),
        new ButtonProps("#3№"),
        new ButtonProps("$4;"),
        new ButtonProps("%5"),
        new ButtonProps("^6:"),
        new ButtonProps("&7?"),
        new ButtonProps("*8"),
        new ButtonProps("(9"),
        new ButtonProps(")0%"),
        new ButtonProps("_-"),
        new ButtonProps("+="),
        new ButtonProps("delete", styles.keyboard__button_delete, true),
    ]
    const rowTwo = [
        new ButtonProps("tab", styles.keyboard__button_tab, true),
        new ButtonProps("QЙ"),
        new ButtonProps("WЦ"),
        new ButtonProps("EУ"),
        new ButtonProps("RК"),
        new ButtonProps("TЕ"),
        new ButtonProps("YН"),
        new ButtonProps("UГ"),
        new ButtonProps("IШ"),
        new ButtonProps("OЩ"),
        new ButtonProps("PЗ"),
        new ButtonProps("{[Х"),
        new ButtonProps("}]Ъ"),
        new ButtonProps("|\\/"),
    ]
    const rowThree = [
        new ButtonProps("capslock", styles.keyboard__button_capslock, true),
        new ButtonProps("AФ"),
        new ButtonProps("SЫ"),
        new ButtonProps("DВ"),
        new ButtonProps("FА"),
        new ButtonProps("GП"),
        new ButtonProps("HР"),
        new ButtonProps("JО"),
        new ButtonProps("KЛ"),
        new ButtonProps("LД"),
        new ButtonProps(":;Ж"),
        new ButtonProps(`"'Э`),
        new ButtonProps("enter", styles.keyboard__button_enter, true),

    ]
    const rowFour = [
        new ButtonProps("shift", styles.keyboard__button_lshift + isShifted(char), true),
        new ButtonProps("ZЯ"),
        new ButtonProps("XЧ"),
        new ButtonProps("CС"),
        new ButtonProps("VМ"),
        new ButtonProps("BИ"),
        new ButtonProps("NТ"),
        new ButtonProps("MЬ"),
        new ButtonProps("<,Б"),
        new ButtonProps(">.Ю"),
        new ButtonProps("?/.,"),
        new ButtonProps("shift", styles.keyboard__button_lshift + isShifted(char), true),

    ]
    const rowFive = [
        new ButtonProps("ctrl", styles.keyboard__button_lctrl, true),
        new ButtonProps("", "", false, true),
        new ButtonProps("alt", styles.keyboard__button_lalt, true),
        new ButtonProps("", styles.keyboard__button_space + isSpace(char), true),
        new ButtonProps("alt", styles.keyboard__button_ralt, true),
        new ButtonProps("menu", "", true),
        new ButtonProps("fn", "", true),
        new ButtonProps("ctrl", styles.keyboard__button_rctrl, true)
    ]

    return <Container className={"w-auto d-flex flex-column flex-nowrap mt-5 " + styles.keyboard}>
        <Row className={"gx-0 flex-nowrap " + styles.keyboard__row}>
            {rowOne.map(i => <Button text={i.text}
                                     char={char}
                                     className={i.className}
                                     isWord={i.isWord}
                                     isWin={i.isWin}
                                     key={i.text}/>)}
        </Row>
        <Row className={"gx-0 flex-nowrap " + styles.keyboard__row}>
            {rowTwo.map(i => <Button text={i.text}
                                     char={char}
                                     className={i.className}
                                     isWord={i.isWord}
                                     isWin={i.isWin}
                                     key={i.text}/>)}

        </Row>
        <Row className={"gx-0 flex-nowrap " + styles.keyboard__row}>
            {rowThree.map(i => <Button text={i.text}
                                       char={char}
                                       className={i.className}
                                       isWord={i.isWord}
                                       isWin={i.isWin}
                                       key={i.text}/>)}
        </Row>
        <Row className={"gx-0 flex-nowrap " + styles.keyboard__row}>
            {rowFour.map(i => <Button text={i.text}
                                      char={char}
                                      className={i.className}
                                      isWord={i.isWord}
                                      isWin={i.isWin}
                                      key={i.text}/>)}
        </Row>
        <Row className={"gx-0 flex-nowrap " + styles.keyboard__row}>

            {rowFive.map(i => <Button text={i.text}
                                      char={char}
                                      className={i.className}
                                      isWord={i.isWord}
                                      isWin={i.isWin}
                                      key={i.text}/>)}
        </Row>
    </Container>
}

Keyboard.propTypes = {
    char: PropTypes.string,
}
