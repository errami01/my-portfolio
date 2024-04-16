type SectionTitleProps ={
    text: string
}
const SectionTitle = ({text}:SectionTitleProps)=>{
    return(
        <h1 className="text-6xl font-bold">
            {text}
        </h1>
    )
}
export default SectionTitle