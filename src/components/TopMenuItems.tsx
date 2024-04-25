type TopMenuItemsProps ={
    containerClassName: string
}
const TopMenuItems = ({containerClassName}:TopMenuItemsProps)=>{
    const styles ={
        link: `flex items-center hover:text-[#4A86F7]`
    }
    return(
      <div className={containerClassName}>
        <a href="#hero" className={styles.link}>Home</a>
        <a href="#projects" className={styles.link}>Projects</a>
        <a href="#contact" className={styles.link}>contact</a>
      </div>
    )
}
export default TopMenuItems