import Section from "./Section"
import SectionTitle from "./SectionTitle"
import SkillsGroup from "./SkillsGroup"

const Skills = ()=>{
    const frontEndSkills: string[] = ['HTML', 'CSS', 'JavaScript', 'TypeScript']
    const backEndSkills: string[] = ['NodeJS']
    const devOpsSkills: string[] = ['Git']
    return(
        <Section id="skills">
            <SectionTitle text="Skills"/>
            <SkillsGroup title="Front-end" skills={frontEndSkills}></SkillsGroup>
            <SkillsGroup title="Back-end" skills={backEndSkills}></SkillsGroup>
            <SkillsGroup title="DevOps" skills={devOpsSkills}></SkillsGroup>
        </Section>

        
    )
}
export default Skills