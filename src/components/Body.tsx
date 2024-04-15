import Hero from "./Hero"
import Projects from "./Projects"

const Body = ()=>{
    
    return(
        <div className="p-8 max-w-[107rem] m-auto flex flex-col gap-[10rem] mt-[5rem]">
           <Hero /> 
           <Projects />
        </div>
    )
}
export default Body