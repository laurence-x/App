export { }
/*
//~ get, compare with list, and add country code to select
const ccselect = document.getElementsByTagName("select")[ 0 ]
if (ccselect !== null && ccselect !== undefined) {
    // check if el exist on actual page
    // get json & create options
    let url = "../visitor/countries.json"
    let req = new XMLHttpRequest()
    req.open("GET", url, true)
    req.onload = () => {
        if (req.status === 200) {
            let cc = gck("cc")
            let data = JSON.parse(req.responseText)
            data.forEach(
                (e: { code: string | boolean | undefined; prefix: string }) => {
                    // create default option for dropdown select
                    if (e.code === cc) {
                        let defaultO = document.createElement("option")
                        defaultO.text = e.code + " " + e.prefix
                        defaultO.value = e.prefix
                        ccselect.add(defaultO)
                        ccselect.selectedIndex = 0
                    }
                }
            )
            let option
            data.forEach(
                (e: { code: string | boolean | undefined; prefix: string }) => {
                    // create all other options for dropdown select
                    if (e.code !== cc) {
                        option = document.createElement("option")
                        option.text = e.code + " " + e.prefix
                        option.value = e.prefix
                        ccselect.add(option)
                    }
                }
            )
        } else {
            window.open("../visitor/error.php?r=sj", "_self")
        }
    }
    req.onerror = () => {
        window.open("../visitor/error.php?r=rj", "_self")
    }
    req.send()
}
*/
