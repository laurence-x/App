import { useLocation } from "react-router-dom"

//~ path already set to: "/hks/useLoc?nm=Mike&ag=24#abc"

let UseLoc = () => {
    let Loc = useLocation()
    // console.log(Loc)

    let LocS = Loc.search
    // let LocP = Loc.pathname
    // let LocH = Loc.hash
    // let LocK = Loc.key
    // let LocS = Loc.state

    // ~ get from param "search" the ag key
    // const qV = new URLSearchParams(useLocation().search)
    const qV = new URLSearchParams(LocS)
    const res = qV.get("ag")
    console.log("Param ag: ", res)

    return (
        <>
            <h1 className="g">useLocation</h1>
            <p>Retuns an Obj containing pathname, search, hash, state, key.</p>
            <br />
            <p>Observe the url in the addressbar ending in:</p>
            <p className="y">/hks/useLoc?nm=Mike&ag=24</p>
            <br />
            <p>Log the useLocation object</p>
            <code>
                <pre>
                    {`
let Loc = useLocation()
console.log(Loc)
                `}
                </pre>
            </code>
            <br />
            <p>The object contains key:values</p>
            <code>
                <pre>
                    {`
{
  "pathname": "/hks/useLoc",
  "search": "?nm=Mike&ag=24",
  "hash": "#abc",
  "state": null, // set state with useNavigate
  "key": "lff4unym"
}
                `}
                </pre>
            </code>
            <br />
            <p>Access the key value pairs</p>
            <code>
                <pre>
                    {`
let LocP = Loc.pathname
let LocS = Loc.search
let LocH = Loc.hash
let LocK = Loc.key
let LocS = Loc.state
                `}
                </pre>
            </code>
            <br />
            <p>Access the search key</p>
            <code>
                <pre>
                    {`
const qV = new URLSearchParams(useLocation().search)
const res = qV.get("ag")
console.log("Param ag: ", res)
                `}
                </pre>
            </code>
            <br />
            <p>Scroll up on every pathname change</p>
            <code>
                <pre>
                    {`
export default function ScrollUp() {
    const { pathname } = useLocation()
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }, [pathname])
    return null
}
                `}
                </pre>
            </code>
        </>
    )
}

export default UseLoc
