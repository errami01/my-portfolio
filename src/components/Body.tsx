import Contact from "./Contact"
import Hero from "./Hero"
import Projects from "./Projects"
import Skills from "./Skills"

const Body = ()=>{
    
    return(
        <div className="px-8 max-w-[107rem] m-auto flex flex-col gap-[10rem] my-[6rem]">
           <Hero /> 
           <Skills />
           <Projects />
           <Contact />
        </div>
    )
}
export default Body