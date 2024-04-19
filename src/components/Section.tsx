import { ReactNode } from "react"

type SectionProps ={
    children: ReactNode
}
const Section = ({children}:SectionProps)=>{
    return(
        <section className={`flex flex-col gap-[5rem]`}>
            {children}
        </section>
    )
}
export default Section