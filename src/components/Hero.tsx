import SectionTitle from "./SectionTitle"

const Hero = ()=>{
    const styles ={
        homeSection:`flex flex-col gap-[5rem]`,
        imageAndText: `flex flex-col items-center gap-[3rem] text-center 
        md:flex-row-reverse md:justify-between`,
        profileImage:`bg-[url('./assets/abdellatif.jpg')] transition-size duration-1000
        size-[28rem] md:size-[35rem] bg-[length:110%] bg-center bg-no-repeat border-8 
        animate-borderRadius`,
        titleToGithubContainer:`flex flex-col gap-[2.5rem] md:w-[50rem] md:text-left`,
        heroDescription: `text-[1.8rem] font-medium text-[#555] `,
        iconContainer:`text-[3rem]  flex gap-10 justify-center md:justify-start`,
        skillIconsContainer:`flex justify-center items-center flex-col
        md:flex-row md:justify-start md:items-center`,
        techStack:`text-[1.7rem] py-[1rem] font-semibold mb-[3rem] border-b-[0.1rem] 
        border-black md:mb-0 md:mr-[3rem] md:border-r-[0.1rem] md:border-b-0 pr-[1rem]`
    }
    return(
        <section id='hero' className={styles.homeSection}>
            <div className={styles.imageAndText}>
                <div className={styles.profileImage}></div>
                <div className={styles.titleToGithubContainer}>
                    <SectionTitle text="Front-End React Developer"/>
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
            <div className={styles.skillIconsContainer}>
                <span className={styles.techStack}>Tech stack</span>
                <img src="https://skillicons.dev/icons?i=html,css,js,ts,react,tailwind,jest,vitest"  />
            </div>
        </section>
    )
}
export default Hero