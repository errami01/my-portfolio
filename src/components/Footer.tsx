import SocialIcon from "./SocialIcon"

const Footer = ()=>{
    return(
        <footer className="bg-[#3a3d49] p-[5rem_0]">
            <div className="flex items-center justify-between max-w-[107rem] m-auto mt-[1px] px-8">
                <p className="text-white text-[1.8rem] font-[600]">Copyright © 2024. All rights are reserved</p>
                <div className={"text-[3rem] flex gap-10 text-white"}>
                        <SocialIcon 
                            link="https://www.linkedin.com/in/abdellatif-e-98513119a/"
                            fontAwsomeClass="fa-brands fa-linkedin" 
                        />
                        <SocialIcon 
                            link="https://github.com/errami01"
                            fontAwsomeClass="fa-brands fa-github" 
                        />
                    </div>
            </div>
        </footer>
    )
}
export default Footer