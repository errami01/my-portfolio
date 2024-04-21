type SocialIconProps ={
    link: string
    fontAwsomeClass: string
}
const SocialIcon = ({link, fontAwsomeClass}: SocialIconProps)=>{
    return(
     <a href={link} target="_blank">
        <i className={fontAwsomeClass}></i>
     </a>   
    )
}
export default SocialIcon