import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import BtnMsg from "../fns/btnMsg"
import checks from "./checks"
import KeyupEm from "./keyupEm"
import KeyupTe from "./keyupTe"
import KeyupTx from "./keyupTx"

export default function Contact() {
    const iN = useRef<HTMLInputElement>(null!)
    const iT = useRef<HTMLInputElement>(null!)
    const iE = useRef<HTMLInputElement>(null!)
    const iE2 = useRef<HTMLInputElement>(null!)
    const tA = useRef<HTMLTextAreaElement>(null!)
    const ms = useRef<HTMLParagraphElement>(null!)
    const iB = useRef<HTMLInputElement>(null!)
    const rD = useRef<HTMLDivElement>(null!)
    const nvg = useNavigate()

    const kupNm = () => BtnMsg(ms, iB)
    const kupTe = () => KeyupTe({ iT, ms, iB })
    const kupEm = () => KeyupEm({ iE, iE2, ms, iB })
    const kupTx = () => KeyupTx(tA, ms, iB)
    const btn = () =>
        checks({ iN, iT, iE, iE2, tA, ms, iB, rD, nvg })

    return (
        <>
            <b className="h">Contact</b>
            <div className="l c" ref={rD}>
                <input
                    name="iN"
                    type="text"
                    ref={iN}
                    onKeyUp={kupNm}
                    placeholder="type your name..."
                    title="type your name"
                    pattern=".{2,25}"
                    minLength={Number(2)}
                    maxLength={Number(25)}
                    autoComplete="off"
                    required
                />
                <input
                    name="iT"
                    type="tel"
                    ref={iT}
                    onKeyUp={kupTe}
                    placeholder="phone number..."
                    title="type your phone number"
                    pattern=".{10,20}"
                    minLength={Number(10)}
                    maxLength={Number(20)}
                    autoComplete="off"
                    required
                />
                <input
                    name="iE"
                    type="email"
                    ref={iE}
                    onKeyUp={kupEm}
                    placeholder="type your email..."
                    title="type your email"
                    pattern=".{5,40}"
                    minLength={Number(5)}
                    maxLength={Number(40)}
                    autoComplete="off"
                    required
                />
                <input
                    type="email"
                    ref={iE2}
                    onKeyUp={kupEm}
                    placeholder="re-type your email..."
                    title="type your email"
                    pattern=".{5,40}"
                    minLength={Number(5)}
                    maxLength={Number(40)}
                    autoComplete="off"
                    required
                />
                <textarea
                    name="tA"
                    ref={tA}
                    onKeyUp={kupTx}
                    placeholder="text..."
                    title="type your message"
                    minLength={Number(2)}
                    maxLength={Number(360)}
                    autoComplete="off"
                    required
                />
                <b ref={ms} className="hide c r"></b>
                <input type="button" ref={iB} value="send" onMouseUp={btn} />
                <br />
            </div>
        </>
    )
}
