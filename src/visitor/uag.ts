export { }
/*
// Check user agent
let r_uag = new XMLHttpRequest()
r_uag.open("GET", "../visitor/vic.php?r=ua")
r_uag.onload = () => {
    if (r_uag.status === 200) {
        let uag = r_uag.responseText
        let agt = uag.toLowerCase()
        let chr = agt.includes("chrome")
        let ffx = agt.includes("firefox")
        let tri = agt.includes("Trident")
        tri || (!chr && !ffx)
            ? window.open("../visitor/error.php?r=ca", "_self")
            : ""
    } else {
        window.open("../visitor/error.php?r=sa", "_self")
    }
}
r_uag.onerror = () => {
    window.open("../visitor/error.php?r=ra", "_self")
}
r_uag.send()
*/
