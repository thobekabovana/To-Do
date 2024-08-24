

export function LogIn() {

    return(
        <>
        <div style={{
             position: "absolute",
             top: 0,
             left: 0,
             width: "100%",
             height: "100vh",
            
            backgroundImage: "url('https://th.bing.com/th/id/OIP.ZAMzSvckAk1uVl2mNHJCKgHaEK?rs=1&pid=ImgDetMain')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
        
        <nav>
        <ul>
    <li><a style={{
      backgroundColor: "purple",
      color: "white",
      padding: "10px 20px",
      textDecoration: "none",
      borderRadius: "5px",
      cursor: "pointer",
      position: "absolute",
      left: "85%",
      top: "1%",
    }}>Sign Up</a></li>

    </ul>
        </nav>
        <h1 style={{display: "flex",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5%"}}>Log-In</h1>
        
        <div style={ {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "15%"}}>


            <input type="text" placeholder="username@gmail.com"
             style={{width: "40%", marginBottom: "15px",height: "5%" }}></input>

            <input type="text" placeholder="Password"
            style={{width: "40%", height: "5%"}}></input>
        </div>
        </div>
        </>
    )
}