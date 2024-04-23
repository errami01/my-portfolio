import TopMenuItems from "./TopMenuItems"

const BarsMenu = () =>{
    const styles={
        container: `flex flex-col  fixed top-0 bottom-0 right-0 left-0 animate-barsMenu z-[2] 
        bg-white md:hidden text-[2.3rem] p-[3rem_5rem]`,
        topMenuItems:`flex items-center flex-col gap-[4rem] font-[600] mt-[15rem]
        `,
        xIconContainer: ` self-end text-[2.5rem]`
    }
    return (
        <div className={styles.container}>
            <span className={styles.xIconContainer}><i className='fa-solid fa-x'></i></span>
            <TopMenuItems containerClassName={styles.topMenuItems}/>
        </div>
    )
}
export default BarsMenu