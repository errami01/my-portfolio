import { useState } from "react"
import TopMenuItems from "./TopMenuItems"

const Header = ()=>{
    const [isOpen, setIsOpen] = useState(false)
    const barsMenuController = ()=>{
        setIsOpen(!isOpen)
    }

    return(
        <header className="flex justify-between h-[80px] px-[50px] shadow-[0_0_10px_rgba(0,0,0,.09)]">
            <h1 className="flex items-center text-3xl font-bold ">
                Logo
            </h1>
            <div className="flex  text-[1.7rem]">
                <i className="fa-solid fa-bars md:hidden  self-center text-[2.3rem]"></i>
                <TopMenuItems containerClassName="hidden md:flex gap-[2rem] font-[600]"/>
            </div>
        </header>
    )
}

export default Header