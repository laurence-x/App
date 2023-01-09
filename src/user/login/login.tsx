import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import CapsOn from "../../fns/capsOn"
import checks from "./checks"
import ku from "./keyup"

export default function Login() {
    const Em = useRef<HTMLInputElement>(null!)
    const Pw = useRef<HTMLInputElement>(null!)
    const ms = useRef<HTMLParagraphElement>(null!)
    const iB = useRef<HTMLInputElement>(null!)
    const rD = useRef<HTMLDivElement>(null!)
    const nvg = useNavigate()

    const [ showPw, setShowPw ] = useState(false)
    const showPwTgl = () => setShowPw((showPw) => !showPw)

    const kup = () => ku(Em, Pw, ms, iB)
    const btn = () => checks({ Em, Pw, ms, iB, rD, nvg })
    const reg = () => nvg("/reg")
    const rec = () => nvg("/rec")

    return (
        <>
            <CapsOn />
            <b className="h">Login</b>
            <div className="l c" ref={rD}>
                <input
                    type="email"
                    name="email"
                    ref={Em}
                    onKeyUp={kup}
                    placeholder="type your email..."
                    title="type your email"
                    pattern=".{5,40}"
                    minLength={Number(5)}
                    maxLength={Number(40)}
                    autoComplete="off"
                    required
                />
                <br />
                <input
                    type={showPw ? "text" : "password"}
                    name="pass"
                    ref={Pw}
                    onKeyUp={kup}
                    placeholder="type your password..."
                    title="type your password"
                    pattern=".{6,20}"
                    minLength={Number(6)}
                    maxLength={Number(20)}
                    autoComplete="off"
                    required
                />
                <label className="showPw" htmlFor="checkbox">
                    <div>Show password?</div>
                    <div>
                        <input
                            id="checkbox"
                            type="checkbox"
                            checked={showPw}
                            onChange={showPwTgl}
                        />
                    </div>
                </label>
                <br />
                <b ref={ms} className="hide c r"></b>
                <input type="button" ref={iB} value="login" onMouseUp={btn} />
                <br />
                <p className="c">don't have an account yet?</p>
                <input type="button" value="register" onMouseUp={reg} />
                <br />
                <p className="c">don't remember your password?</p>
                <input type="button" value="recover" onMouseUp={rec} />
                <br />
            </div>
        </>
    )
}
