"use client"

export default function Home() {

    const getLogOut = async () => {
        localStorage.removeItem("token")

        window.location.href = "/";

    }
    
    return(
        <>
        <button onClick={getLogOut} >Logout</button>
        </>
    )
}