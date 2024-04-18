type ButtonProps = {
    text: string
}
const Button = ({text}: ButtonProps)=>{

    return(
        <button className="w-[14.5rem] h-[4.5rem] bg-[#4A86F7] rounded-[0.5rem]
        text-white font-[600]">{text}</button>
    )
}
export default Button