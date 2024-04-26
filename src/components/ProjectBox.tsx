import Button from "./Button"

type ProjectBoxProps = {
    imageSource: string
    projectName: string
    projectDescription: string
    githubLink: string
    demoLink: string
}
const ProjectBox = (props:ProjectBoxProps)=>{
    const {imageSource, projectName, projectDescription, githubLink, demoLink} = props
    const styles ={
        container:`flex flex-col items-center gap-[2rem]  border-[0.3rem] bg-white rounded-[2.5rem]
        p-[3rem] text-[1.6rem]`,
        projectImage: `rounded-[1.5rem] z-[1]`,
        projectName: `self-start font-bold text-[2.5rem]`,
        projectDescription: `text-[1.6rem] font-[500] text-[#555]`,
        buttonContainer: `flex gap-[2rem] mt-auto`
    }
    return(
        <div className={styles.container}>
            <div className="relative flex items-center justify-center  w-[100%] h-[30rem]">
                <img className={styles.projectImage} src={imageSource} width="310"  alt="Project image" />
                <div className="absolute w-[80%] bg-[#D3DEE5] h-[80%] rounded-[50%] blur-[5rem]"></div>
            </div>
            <h2 className={styles.projectName}>{projectName}</h2>
            <p className={styles.projectDescription}>{projectDescription}</p>
            <div className={styles.buttonContainer}>
                <a href={githubLink}><Button text="Code"/></a>
                <a href={demoLink}><Button text="Demo"/></a>
            </div>
        </div>
    )
}
export default ProjectBox