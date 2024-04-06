const Body = ()=>{
    const styles ={
        homeSection:`border-8 flex flex-col items-center gap-[3rem] text-center`,
        profileImage:`bg-[url('./assets/abdellatif.jpg')] transition-size duration-1000
        size-[28rem] md:size-[35rem] bg-[length:110%] bg-center bg-no-repeat border-8 
        animate-borderRadius`,
        title: `text-6xl font-bold `,
        heroDescription: `text-[1.8rem] font-medium text-[#555] mt-10`,
        iconContainer:`text-[3rem]  flex gap-10`
    }
    return(
        <div className="p-8">
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
                <div className={styles.iconContainer}>
                    <a href="https://www.linkedin.com/in/abdellatif-e-98513119a/" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href='https://github.com/errami01' target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </section>
        </div>
    )
}
export default Body