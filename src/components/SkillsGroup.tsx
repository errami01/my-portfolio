import { nanoid } from 'nanoid'
type SkillsGroupProps ={
    title: string,
    skills: string[]
}
const SkillsGroup = ({title, skills}: SkillsGroupProps)=>{
    const styles = {
        container:`flex justify-center items-center flex-col
        md:flex-row md:justify-start md:items-center`,
        techStack:`text-[1.7rem] py-[1rem] w-[10rem] font-semibold mb-[3rem] border-b-[0.1rem] 
        border-black md:mb-0 md:mr-[3rem] md:border-r-[0.1rem] md:border-b-0 pr-[1rem]`,
        iconsContainer:`flex gap-[3rem]`
    }
    const skillImages = skills.map(skill =><div key={nanoid()}>
        <img src={`/assets/skill_icons/${skill}.svg`} width={50} />
        <p>{skill}</p>
    </div>)
    return(
        <div className={styles.container}>
            <span className={styles.techStack}>{title}</span>
            <div className={styles.iconsContainer}>
                {skillImages}
            </div>
            
        </div>
    )
}
export default SkillsGroup