import FoBtn from "./BtnFo"
import LgBtn from "./BtnLg"
import Mbtn from "./BtnMn"
import ThBtn from "./BtnTh"
import CartC from "./CartC"
import SrcInp from "./InpSrc"

const Nav = () => {
    return (
        <nav>
            <Mbtn />
            <CartC />
            <SrcInp />
            <FoBtn />
            <ThBtn />
            <LgBtn />
        </nav>
    )
}

export default Nav
