import ProjectBox from "./ProjectBox"
import SectionTitle from "./SectionTitle"

const Projects = ()=>{
    const styles ={
        projects: `grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[5rem] mt-[2.5rem]`
    }
    return(
        <section >
            <SectionTitle text="Projects" />
            <div className={styles.projects}>
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
            </div>
        </section>
    )
}
export default Projects