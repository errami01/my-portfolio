import TopMenuItems from "./TopMenuItems"

const BarsMenu = () =>{
    return (
        <div className="flex justify-center fixed top-0 bottom-0 left-0 right-0 z-[2] bg-white md:hidden">
            <TopMenuItems containerClassName=" flex items-center flex-col gap-[4rem] font-[600] mt-[15rem] text-[2rem]"/>
        </div>
    )
}
export default BarsMenu