import { nanoid } from 'nanoid'
type SkillsGroupProps ={
    title: string,
    skills: string[]
}
const SkillsGroup = ({title, skills}: SkillsGroupProps)=>{
    const styles = {
        container:`flex flex-col`,
        techStack:`text-[1.7rem] py-[1rem] w-[10rem] font-semibold mb-[3rem] border-b-[0.1rem] 
        border-black pr-[1rem]`,
        iconsContainer:`flex gap-[3rem] flex-wrap`,
        iconAndName: `flex flex-col items-center gap-[0.5rem]`,
        skillName: `text-[1.2rem] text-gray-500 font-medium`,
    }
    const skillImages = skills.map(skill =><div key={nanoid()} className={styles.iconAndName}>
        <img src={`/assets/skill_icons/${skill}.svg`} width={50} />
        <p className={styles.skillName}>{skill}</p>
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