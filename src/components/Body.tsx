import Contact from "./Contact"
import Hero from "./Hero"
import Projects from "./Projects"

const Body = ()=>{
    
    return(
        <div className="p-8 max-w-[107rem] m-auto flex flex-col gap-[10rem] mt-[5rem]">
           <Hero /> 
           <Projects />
           <Contact />
        </div>
    )
}
export default Body