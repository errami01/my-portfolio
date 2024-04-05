const Body = ()=>{
    const styles ={
        profileImage:`bg-[url('./assets/abdellatif.jpg')] size-[35rem] bg-[length:110%]
        bg-center bg-no-repeat border-8 animate-borderRadius`,
    }
    return(
        <div>
            <section >
                <div className={styles.profileImage}></div>
            </section>
        </div>
    )
}
export default Body