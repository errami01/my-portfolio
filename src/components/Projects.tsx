import ProjectBox from "./ProjectBox"

const Projects = ()=>{
    const styles ={
        projects: `grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[5rem]`
    }
    return(
        <section >
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