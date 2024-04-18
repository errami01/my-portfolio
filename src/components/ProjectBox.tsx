type ProjectBoxProps = {
    imageSource: string
    projectName: string
}
const ProjectBox = ({imageSource, projectName}:ProjectBoxProps)=>{
    const styles ={
        container:`flex flex-col items-center gap-[2rem]  border-[0.3rem] bg-white rounded-[2.5rem]
        p-[3rem] text-[1.6rem]`,
        projectImage: `rounded-[1.5rem] z-[1]`,
        projectName: `self-start font-bold text-[2.5rem]`,
        projectDescription: `text-[1.6rem] font-[500] text-[#555]`
    }
    return(
        <div className={styles.container}>
            <div className="relative flex items-center justify-center  w-[100%] h-[30rem]">
                <img className={styles.projectImage} src={imageSource} width="310"  alt="Project image" />
                <div className="absolute w-[80%] bg-[#D3DEE5] h-[80%] rounded-[50%] blur-[5rem]"></div>
            </div>
            <h2 className={styles.projectName}>{projectName}</h2>
            <p className={styles.projectDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Odio, repellendus. Incidunt, laboriosam distinctio temporibus, 
                adipisci soluta modi id ut molestiae quidem optio asperiores a. 
                Delectus assumenda provident veniam dolorem.</p>
        </div>
    )
}
export default ProjectBox