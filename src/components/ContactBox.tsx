type ContactBoxProps ={
    icon: JSX.Element
    contactInfo: string
}
const ContactBox = ({icon, contactInfo}: ContactBoxProps)=>{
    return(
        <div>
            {icon}
            <p>{contactInfo}</p>
        </div>    
    )
}
export default ContactBox