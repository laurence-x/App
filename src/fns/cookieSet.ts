let sck = (cname: string, cvalue: string | number | boolean, exh: number) => {
    let d = new Date()
    d.setTime(d.getTime() + exh * 60 * 60 * 1000)

    let expires = "expires=" + d.toUTCString()

    document.cookie =
        cname +
        "=" +
        `${encodeURIComponent(cvalue)}` +
        ";" +
        "domain=;" +
        "path=/;" +
        "expires=" +
        expires +
        ";" +
        "secure=true;" +
        "samesite=Strict;"
}

export default sck

// ~ usage:
// sck(cname,cvalue,exh)
