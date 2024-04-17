type ProjectBoxProps = {
    imageSource: string
    projectName: string
}
const ProjectBox = ({imageSource, projectName}:ProjectBoxProps)=>{
    const styles ={
        container:`flex flex-col items-center gap-[2rem]  border-[0.3rem] bg-white rounded-[2.5rem]
        p-[3rem] text-[1.6rem]`,
        projectImage: `rounded-[1.5rem]`,
        projectName: `self-start font-bold text-[2.5rem]`
    }
    return(
        <div className={styles.container}>
            <img className={styles.projectImage} src={imageSource} width="310"  alt="Project image" />
            <h2 className={styles.projectName}>{projectName}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Odio, repellendus. Incidunt, laboriosam distinctio temporibus, 
                adipisci soluta modi id ut molestiae quidem optio asperiores a. 
                Delectus assumenda provident veniam dolorem.</p>
        </div>
    )
}
export default ProjectBox