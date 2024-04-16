type ProjectBoxProps = {
    imageSource: string
}
const ProjectBox = ({imageSource}:ProjectBoxProps)=>{
    const styles ={
        container:`flex flex-col items-center h-[53rem] border-[0.3rem] bg-white rounded-[2.5rem]
        p-[3rem]`
    }
    return(
        <div className={styles.container}>
            <img src={imageSource} width="310"  alt="Project image" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Odio, repellendus. Incidunt, laboriosam distinctio temporibus, 
                adipisci soluta modi id ut molestiae quidem optio asperiores a. 
                Delectus assumenda provident veniam dolorem.</p>
        </div>
    )
}
export default ProjectBox