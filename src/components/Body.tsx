const Body = ()=>{
    const styles ={
        homeSection:`border-8 flex flex-col items-center gap-[3rem]`,
        profileImage:`bg-[url('./assets/abdellatif.jpg')] transition-size duration-1000 size-[28rem] md:size-[35rem]
        bg-[length:110%] bg-center bg-no-repeat border-8 animate-borderRadius`,
        title: `text-6xl text-center font-bold `
    }
    return(
        <div>
            <section className={styles.homeSection}>
                <div className={styles.profileImage}></div>
                <h1 className={styles.title}>Front-End React Developer</h1>
            </section>
        </div>
    )
}
export default Body