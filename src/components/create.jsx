export function Create() {

    return(
        <>
        <div style={{
             position: "absolute",
             top: 0,
             left: 0,
             width: "100%",
             height: "100vh",
            
            backgroundImage: "url('https://th.bing.com/th/id/R.ffedae46889c4082b212d03a7c31ac29?rik=UDbZi4j3H6vsYQ&pid=ImgRaw&r=0')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <h1 style={{display: "flex",
              color: "darkpink",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "100px",
              marginTop: "5%"}}>Registor</h1>

            <div style={ {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10%"}}>

            <input type="text" placeholder="Name" 
            style={{width: "40%", marginBottom: "15px",height: "5%" }}></input>

            <input type="text" placeholder="Email"
            style={{width: "40%", marginBottom: "15px",height: "5%" }}></input>

            <input type="text" placeholder="Password" 
            style={{width: "40%", marginBottom: "15px",height: "5%" }}></input>

            </div>

        </div>
        </>
    )
}