import TopMenuItems from "./TopMenuItems"

const BarsMenu = () =>{
    const styles={
        container: `flex justify-center fixed top-0 bottom-0 right-0 left-0 animate-barsMenu z-[2] 
        bg-white md:hidden `,
        topMenuItems:`flex items-center flex-col gap-[4rem] font-[600] mt-[15rem]
        text-[2rem]`
    }
    return (
        <div className={styles.container}>
            <TopMenuItems containerClassName={styles.topMenuItems}/>
        </div>
    )
}
export default BarsMenu