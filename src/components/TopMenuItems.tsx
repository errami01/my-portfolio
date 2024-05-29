type TopMenuItemsProps ={
    containerClassName: string
    handleMenuItemClick?: (isOpen:boolean)=>void
}
const TopMenuItems = ({containerClassName, handleMenuItemClick=()=>null}:TopMenuItemsProps)=>{
    const styles ={
        link: `flex items-center hover:text-[#4A86F7]`
    }
    return(
      <div className={`${containerClassName}`}>
        <a href="#hero" className={styles.link} onClick={()=>handleMenuItemClick(false)}>Home</a>
        <a href="#technologies" className={styles.link} onClick={()=>handleMenuItemClick(false)}>Technologies</a>
        <a href="#projects" className={styles.link} onClick={()=>handleMenuItemClick(false)}>Projects</a>
        <a href="#contact" className={styles.link} onClick={()=>handleMenuItemClick(false)}>contact</a>
      </div>
    )
}
export default TopMenuItems