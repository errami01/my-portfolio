type ContactBoxProps ={
    fontAwsomeClass: string 
    contactInfo: string
}
const ContactBox = ({fontAwsomeClass, contactInfo}: ContactBoxProps)=>{
    const styles = {
        contactBoxContainer: `flex bg-white grow gap-[3rem] rounded-[1rem] p-[3rem] items-center 
        text-[1.8rem] md:flex-col font-[500] text-[#555]`,
        icon:`text-[4rem] text-[#4A86F7]`
    }
    return(
        <div className={styles.contactBoxContainer}>
            <i className={`${fontAwsomeClass} ${styles.icon}`}></i>
            <p className="break-all ">{contactInfo}</p>
        </div>    
    )
}
export default ContactBox