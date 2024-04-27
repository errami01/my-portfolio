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
                    githubLink=""
                    demoLink=""
                >
                    <>A Scalable E-commerce Web Application 
                    with the following key features:
                    <br/>-Product Catalog Management
                    <br/>-Shopping Cart and Checkout
                    <br/>-Customer Account Management
                    <br/>-Responsive Design
                    <br/>-Implement product reviews and ratings to encourage customer
                    engagement and provide valuable product feedback.</>
                </ProjectBox>
                <ProjectBox 
                    imageSource="src\assets\calculator.png"
                    projectName="Calculator"
                    githubLink="https://github.com/errami01/javaScript-calculator"
                    demoLink="https://legendary-lamington-29c64d.netlify.app/"
                >
                    <>
                        A sleek and intuitive calculator web app
                        built with React.js. Designed for efficiency and offers
                        a user-friendly interface that simplifies complex calculations.
                    </>
                </ProjectBox>
                
                <ProjectBox 
                    imageSource="src\assets\pomodoro.png"
                    projectName="Pomodoro Timer"
                    githubLink=""
                    demoLink=""
                >
                    <> a web-based Pomodoro Timer to enhance productivity and focus.
                    This user-friendly application implements the Pomodoro Technique, 
                    allowing users to set work intervals and short breaks. The timer 
                    visually tracks progress and provides notifications to maintain 
                    focus during work sessions and signal breaks.</>
                </ProjectBox>

                <ProjectBox 
                    imageSource="src\assets\ecommerce.png"
                    projectName="E-commerce"
                    githubLink=""
                    demoLink=""
                > 
                    <>Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Voluptatum quasi debitis perferendis cupiditate
                    consequuntur fuga error dolor deserunt, alias sequi!
                    </>
                </ProjectBox>
            </div>
        </Section>
    )
}
export default Projects