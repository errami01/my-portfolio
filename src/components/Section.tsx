import { ReactNode } from "react"

type SectionProps ={
    children: ReactNode
    id: string
}
const Section = ({children, id}:SectionProps)=>{
    return(
        <section id={id} className={`flex flex-col gap-[5rem]`}>
            {children}
        </section>
    )
}
export default Section