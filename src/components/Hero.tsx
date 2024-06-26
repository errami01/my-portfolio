import Section from "./Section"
import SectionTitle from "./SectionTitle"
import SocialIcon from "./SocialIcon"

const Hero = ()=>{
    
    const styles ={
        imageAndText: `flex flex-col items-center gap-[3rem] text-center 
        md:flex-row-reverse md:justify-between`,
        profileImage:`bg-[url('/assets/abdellatif.jpg')] transition-size duration-1000
        size-[28rem] md:size-[35rem] bg-[length:110%] bg-center bg-no-repeat border-8 
        animate-borderRadius`,
        titleToGithubContainer:`flex flex-col gap-[2.5rem] md:w-[50rem] md:text-left`,
        heroDescription: `text-[1.8rem] font-medium text-[#555] `,
        iconContainer:`text-[3rem]  flex gap-10 justify-center md:justify-start`,
        
        
    }
    return(
        <Section id='hero' >
            <div className={styles.imageAndText}>
                <div className={styles.profileImage}></div>
                <div className={styles.titleToGithubContainer}>
                    <SectionTitle text="Full-stack Developer"/>
                    <p className={styles.heroDescription}>
                        Hi, I'm Abdellatif Errami. A passionate Full-stack
                        Developer who loves solving problems and Turning ideas
                        into interactive experiences.
                    </p>
                    <div className={styles.iconContainer}>
                        <SocialIcon 
                            link="https://www.linkedin.com/in/erramidev"
                            fontAwsomeClass="fa-brands fa-linkedin" 
                        />
                        <SocialIcon 
                            link="https://github.com/errami01"
                            fontAwsomeClass="fa-brands fa-github" 
                        />
                        <SocialIcon 
                            link="/assets/resume.pdf"
                            fontAwsomeClass="fa-solid fa-file"
                        />
                    </div>
                </div>
            </div>
            
        </Section>
    )
}
export default Hero