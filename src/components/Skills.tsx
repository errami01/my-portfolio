import Section from "./Section"
import SectionTitle from "./SectionTitle"
import SkillsGroup from "./SkillsGroup"

const Skills = ()=>{
    const frontEndSkills: string[] = ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'TypeScript', 'ReactJS', 'Redux', 'NextJS']
    const backEndSkills: string[] = ['NodeJS', 'ExpressJS', 'MongoDB', 'PostgreSQL', 'NextJS']
    const devOpsSkills: string[] = ['Git', 'Playwright', 'Cypress']
    return(
        <Section id="technologies">
            <SectionTitle text="Technologies "/>
            <SkillsGroup title="Front-end" skills={frontEndSkills}></SkillsGroup>
            <SkillsGroup title="Back-end" skills={backEndSkills}></SkillsGroup>
            <SkillsGroup title="DevOps" skills={devOpsSkills}></SkillsGroup>
        </Section>

        
    )
}
export default Skills