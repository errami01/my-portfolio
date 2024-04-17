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
                <ProjectBox 
                    imageSource="src\assets\ecommerce.png"
                    projectName="E-commerce"
                />
                <ProjectBox 
                    imageSource="src\assets\ecommerce.png"
                    projectName="E-commerce"
                />
                <ProjectBox 
                    imageSource="src\assets\ecommerce.png"
                    projectName="E-commerce"
                />
                <ProjectBox 
                    imageSource="src\assets\ecommerce.png"
                    projectName="E-commerce"
                />
            </div>
        </section>
    )
}
export default Projects