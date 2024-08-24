

export function LogIn() {

    return(
        <>
        <div>
        <h1 style={{color: "white"}}>Log-In</h1>
        <nav>

        </nav>
        
        
        <div style={ {
   position: "absolute",
   top: 0,
   left: 0,
   width: "100%",
   height: "100vh",
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   backgroundImage: "url('https://th.bing.com/th/id/OIP.ZAMzSvckAk1uVl2mNHJCKgHaEK?rs=1&pid=ImgDetMain')",
   backgroundSize: "cover",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
}}>


            <input type="text" placeholder="username@gmail.com"
             style={{width: "40%", marginBottom: "15px",height: "5%" }}></input>

            <input type="text" placeholder="Password"
            style={{width: "40%", height: "5%"}}></input>
        </div>
        </div>
        </>
    )
}