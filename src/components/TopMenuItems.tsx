type TopMenuItemsProps ={
    containerClassName: string
}
const TopMenuItems = ({containerClassName}:TopMenuItemsProps)=>{
    return(
      <div className={containerClassName}>
        <a href="#hero" className="flex items-center ">Home</a>
        <a href="#projects" className="flex items-center ">Projects</a>
        <a href="#" className="flex items-center">contact</a>
      </div>
    )
}
export default TopMenuItems