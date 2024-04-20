import ContactBox from "./ContactBox"
import Section from "./Section"
import SectionTitle from "./SectionTitle"

const Contact = ()=>{
    
    return(
        <Section id='contact'>
            <SectionTitle text="Contact"/>
            <div className="flex flex-col gap-[3rem] md:flex-row">
                <ContactBox fontAwsomeClass="fa-solid fa-envelope" contactInfo="errami.dev@gmail.com"/>
                <ContactBox fontAwsomeClass="fa-solid fa-phone-volume" contactInfo="+212678908765"/>
                <ContactBox fontAwsomeClass="fa-solid fa-location-dot" contactInfo="Agdir, Morocco"/>
            </div>
        </Section>
    )
}
export default Contact