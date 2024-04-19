const Contact = ()=>{
    const styles = {
        icon:`text-[4rem] text-[#4A86F7]`
    }
    return(
        <section className="bg-red-100">
            <span><i className={`fa-solid fa-envelope ${styles.icon}`}></i></span>
            <span><i className={`fa-solid fa-phone-volume ${styles.icon}`}></i></span>
            <span><i className={`fa-solid fa-location-dot ${styles.icon}`}></i></span>
        </section>
    )
}
export default Contact