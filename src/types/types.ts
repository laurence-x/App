import { To } from "react-router-dom"

export type UseContext = {
    nm: string
    nr: number
    setString: React.Dispatch<React.SetStateAction<string>>
    setNumber: React.Dispatch<React.SetStateAction<number>>
}

export type UseState = {
    nm: string
    nr: number
}

export type mLink = {
    menu: string
    name: string
    path: To
    // icon: JSX.Element
}

export type TpStr = { target: { value: string } }
