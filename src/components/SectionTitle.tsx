type SectionTitleProps ={
    text: string
}
const SectionTitle = ({text}:SectionTitleProps)=>{
    return(
        <h1>
            {text}
        </h1>
    )
}
export default SectionTitle