import ProjectBox from "./ProjectBox"
import SectionTitle from "./SectionTitle"

const Projects = ()=>{
    const styles ={
        projects: `grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[5rem] mt-[2.5rem]`
    }
    return(
        <section id='projects'>
            <SectionTitle text="Projects" />
            <div className={styles.projects}>
                <ProjectBox 
                    imageSource="src\assets\ecommerce.png"
                    projectName="E-commerce"
                    projectDescription={`Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Voluptatum quasi debitis perferendis cupiditate
                    consequuntur fuga error dolor deserunt, alias sequi!`}
                />
                <ProjectBox 
                    imageSource="src\assets\ecommerce.png"
                    projectName="E-commerce"
                    projectDescription={`Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Voluptatum quasi debitis perferendis!`}
                />
                <ProjectBox 
                    imageSource="src\assets\ecommerce.png"
                    projectName="E-commerce"
                    projectDescription={`Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Voluptatum quasi debitis perferendis cupiditate
                    consequuntur fuga error!`}
                />
                <ProjectBox 
                    imageSource="src\assets\ecommerce.png"
                    projectName="E-commerce"
                    projectDescription={`Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Voluptatum quasi debitis perferendis cupiditate
                    consequuntur fuga error dolor deserunt, alias sequi!`}
                />
            </div>
        </section>
    )
}
export default Projects