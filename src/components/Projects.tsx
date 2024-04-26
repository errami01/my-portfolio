import ProjectBox from "./ProjectBox"
import Section from "./Section"
import SectionTitle from "./SectionTitle"

const Projects = ()=>{
    const styles ={
        projects: `grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[5rem]`
    }
    return(
        <Section id='projects'>
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
                    imageSource="src\assets\calculator.png"
                    projectName="Calculator"
                    projectDescription={`A sleek and intuitive calculator web app
                    built with React.js. Designed for efficiency and offers
                    a user-friendly interface that simplifies complex calculations.`}
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
        </Section>
    )
}
export default Projects