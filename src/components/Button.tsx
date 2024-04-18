type ButtonProps = {
    text: string
}
const Button = ({text}: ButtonProps)=>{

    return(
        <button className="w-[14.5rem] h-[4.5rem] bg-[#96cbeb]">{text}</button>
    )
}
export default Button