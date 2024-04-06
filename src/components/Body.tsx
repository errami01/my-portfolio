const Body = ()=>{
    const styles ={
        homeSection:`border-8 flex flex-col items-center gap-[3rem] text-center`,
        profileImage:`bg-[url('./assets/abdellatif.jpg')] transition-size duration-1000
        size-[28rem] md:size-[35rem] bg-[length:110%] bg-center bg-no-repeat border-8 
        animate-borderRadius`,
        title: `text-6xl font-bold `,
        heroDescription: `text-[1.8rem] font-medium text-[#555] mt-10`,
    }
    return(
        <div>
            <section className={styles.homeSection}>
                <div className={styles.profileImage}></div>
                <div>
                    <h1 className={styles.title}>Front-End React Developer</h1>
                    <p className={styles.heroDescription}>
                        Hi, I'm Abdellatif Errami. A passionate Front-end React
                        Developer who loves solving problems and Turning ideas
                        into interactive experiences.
                    </p>
                </div>
            </section>
        </div>
    )
}
export default Body