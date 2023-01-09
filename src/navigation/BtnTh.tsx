import { useEffect, useState } from "react"

export default function ThBtn() {
    const [ thm, setThm ] = useState(localStorage.getItem("thm") || "D")
    const xThm = () => (thm === "D" ? setThm("L") : setThm("D"))

    useEffect(() => {
        localStorage.setItem("thm", thm)
        const setC = (c: Object) =>
            (Object.entries(c) as []).map((e) =>
                document.documentElement.style.setProperty(e[ 0 ], e[ 1 ])
            )
        thm === "D"
            ? setC({
                "--bk": " #000", // line, els: bg, shadow, border, outline
                "--bn": "#444", // code bg, hr, btn color
                "--b": " #222", // color & background
                "--gy": " #888", // pre
            })
            : setC({
                "--bk": " #ccc",
                "--bn": "#ddd",
                "--b": " #eee",
                "--gy": " #bbb",
            })
    }, [ thm ])

    return (
        <div>
            <input
                type="button"
                value="&#x2699;"
                title={thm === "D" ? "light mode" : "dark mode"}
                className={thm === "D" ? "r" : "y"}
                onMouseUp={xThm}
            />
        </div>
    )
}
