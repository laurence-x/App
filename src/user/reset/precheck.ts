export default async function preCheck(
    hdc: string,
    rD: React.RefObject<HTMLDivElement>,
    nvg: (arg: string) => void
) {
    const controller = new AbortController()
    let cData = new URLSearchParams()
    cData.append("c", hdc)
    await fetch("../php/u_res_pre.php", {
        method: "POST",
        body: cData,
        signal: controller.signal,
    })
        .then((response) => response.text())
        .then((r) => {
            r === "rd" && window.open("https://www.google.com", "_self")
            if (r === "e") {
                rD.current && (rD.current.textContent = "try again later")
                const timer = setTimeout(() => {
                    nvg("/login")
                }, 8000)
                clearTimeout(timer)
            }
            if (r === "ex") {
                rD.current && (rD.current.textContent = "try resetting again")
                const timer = setTimeout(() => {
                    nvg("/rec")
                }, 8000)
                clearTimeout(timer)
            }
            if (r === "nc") {
                rD.current && (rD.current.textContent = "recover again")
                const timer = setTimeout(() => {
                    nvg("/rec")
                }, 6000)
                clearTimeout(timer)
            }
        })
        .catch((error) => {
            rD.current && (rD.current.textContent = "maintenance")
            console.error("Error Reset: ", error)
        })
    return () => controller.abort()
}
