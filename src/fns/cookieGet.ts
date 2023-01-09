let gck = (c: string) => {
    let v = document.cookie.match("(^|;)\\s*" + c + "\\s*=\\s*([^;]+)")

    let cv = v ? v.pop() : ""
    let cc = String(cv).length > 0 ? String(cv) : false

    return cc
}

export default gck

// ~ usage:
// gck('rd') -> let ck = decodeURIComponent(cnm)
