const Body = ()=>{
    const styles ={
        homeSection:`border-8 flex flex-col gap-[10rem]`,
        imageAndText: `flex flex-col items-center gap-[3rem] text-center 
        md:flex-row-reverse md:justify-between`,
        profileImage:`bg-[url('./assets/abdellatif.jpg')] transition-size duration-1000
        size-[28rem] md:size-[35rem] bg-[length:110%] bg-center bg-no-repeat border-8 
        animate-borderRadius`,
        titleToGithubContainer:`md:w-[50rem] md:text-left`,
        title: `text-6xl font-bold `,
        heroDescription: `text-[1.8rem] font-medium text-[#555] mt-10`,
        iconContainer:`text-[3rem]  flex gap-10 justify-center md:justify-start`
    }
    return(
        <div className="p-8 max-w-[107rem] m-auto">
            <section className={styles.homeSection}>
                <div className={styles.imageAndText}>
                    <div className={styles.profileImage}></div>
                    <div className={styles.titleToGithubContainer}>
                        <h1 className={styles.title}>Front-End React Developer</h1>
                        <p className={styles.heroDescription}>
                            Hi, I'm Abdellatif Errami. A passionate Front-end React
                            Developer who loves solving problems and Turning ideas
                            into interactive experiences.
                        </p>
                        <div className={styles.iconContainer}>
                            <a  href="https://www.linkedin.com/in/abdellatif-e-98513119a/" 
                                target="_blank">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href='https://github.com/errami01' target="_blank">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://skillicons.dev/icons?i=html,css,js,ts,react,tailwind,jest,vitest"/>
                </div>
            </section>
        </div>
    )
}
export default Body