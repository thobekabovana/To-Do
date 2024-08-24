export function Home() {

    return(
        <>
        <div style={{ background: "linear-gradient(to bottom, pink, purple)", 
                      marginTop: "0%",
                      height: "100vh", 
                      width: "100vw", 
                      position: "absolute", 
                      top: 0, 
                      left: 0, 
        }}>
            
            
            <h1  style={{display: "flex",
              color: "black",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5%"}}>What to do?</h1>

            <input type="text" placeholder="tell me what you want to do"
            style={{marginLeft: "5%", width: "40%", textAlign: "center", height: "30px", marginTop: "5%"}}>
                </input>   <button style={{height:"34px", width: "5%", backgroundColor: "purple"}}>Add</button>
        </div>
        </>
    )
}