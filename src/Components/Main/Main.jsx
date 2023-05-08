import {Row} from "react-bootstrap";
import styles from "./main.module.css"
import {Canvas, Keyboard, Output} from "../Library";
import {useEffect, useState} from "react";

export const Main = () => {
    const [text, setText] = useState('')
    const [count, setCount] = useState(null);
    useEffect(() => {


        fetch('https://dinoipsum.com/api/?format=text&paragraphs=1&words=7')
            .then(r => r.text())
            .then(d => {
                setText(d.replace(/[^\w\s.,!?]/g, "")
                    .replace(/\t/g, "")
                    .replace(/\n/g, ""))
                setCount(0);
            })
            .catch(e => console.log(e.message))

    }, [])
    useEffect(() => {
        window.addEventListener('keydown', handleButton)
        return () => {
            window.removeEventListener('keydown', handleButton)
        }
    }, [count])
    const handleButton = (e) => {
        if (e.key === text[count] && count < text.length) {
            setCount(count => count + 1)
        }

    }
    return <Row className={"d-flex flex-column align-items-center " + styles['main-output']}>
        <Output canvasList={[<Canvas key={"start"} position={"start"} text={text} height={100} index={count}/>,
            <Canvas key={"center"} position={"center"} text={text} height={100} index={count}/>,
            <Canvas key={"end"} position={"end"} text={text} height={100} index={count}/>]}/>
        <Keyboard char={text[count]}/>
    </Row>

};

