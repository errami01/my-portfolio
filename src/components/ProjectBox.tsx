type ProjectBoxProps = {
    imageSource: string
}
const ProjectBox = ({imageSource}:ProjectBoxProps)=>{
    const styles ={
        container:`h-[53rem] border-4`
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