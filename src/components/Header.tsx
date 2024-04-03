const Header = ()=>{
    return(
        <header className="flex justify-between h-[80px] px-[50px] shadow-[0_0_10px_rgba(0,0,0,.09)]">
            <h1 className="flex items-center text-3xl font-bold ">
                Logo
            </h1>
            <div className="flex  text-[1.7rem]">
                <i className="fa-solid fa-bars md:hidden  self-center text-[2.3rem]"></i>
                <div className="hidden md:flex gap-[2rem] font-[600] ">
                    <a href="#" className=" flex items-center ">Home</a>
                    <a href="#" className=" flex items-center">Projects</a>
                    <a href="#" className="flex items-center">contact</a>
                </div>
            </div>
        </header>
    )
}

export default Header