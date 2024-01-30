import React from "react";
import Image from "../static/pointing.png";
const Contact = () => {
    return (
        <div style = {{display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0"}}>
            <div>
                <div style = {{textAlign: "center"}}>
                    <h1>CONTACT <br></br>STEPHEN!</h1>
                </div>
                <img src = {Image} width = "300px"/>
            </div>
            <div style={{display: "block", backgroundColor: "#fff5e0", paddingBottom: "50px"}}>
                <div style = {{paddingLeft: "50px", paddingBottom: "10px"}}>
                    <a href = "mailto:brandonkerpel@gmail.com"><button type = "button" style = {{display: "block", outline: "0", textAlign: "center", border: "0", padding: "7px 16px", minHeight: "36px", minWidth: "300px", borderRadius: "4px", backgroundColor: "#f4e0b9", border: "none", color: "000001", textDecoration: "none", display: "inline-block"}}> CLICK HERE TO <br></br> EMAIL <br></br> STEPHEN <br></br> COLBERT</button></a>
                </div>
                <div style = {{paddingLeft: "50px", paddingTop: "10px", paddingBottom: "10px"}}>
                    <a href = "mailto:brandonkerpel@gmail.com"><button type = "button" style = {{display: "block", outline: "0", textAlign: "center", border: "0", padding: "7px 16px", minHeight: "36px", minWidth: "300px", borderRadius: "4px", backgroundColor: "#f4e0b9", border: "none", color: "000001", textDecoration: "none", display: "inline-block"}}> CLICK HERE TO <br></br> EMAIL <br></br> STEPHEN <br></br> COLBERT</button></a>
                </div>
                <div style = {{paddingLeft: "50px", paddingTop: "10px", paddingBottom: "10px"}}>
                    <a href = "mailto:brandonkerpel@gmail.com"><button type = "button" style = {{display: "block", outline: "0", textAlign: "center", border: "0", padding: "7px 16px", minHeight: "36px", minWidth: "300px", borderRadius: "4px", backgroundColor: "#f4e0b9", border: "none", color: "000001", textDecoration: "none", display: "inline-block"}}> CLICK HERE TO <br></br> EMAIL <br></br> STEPHEN <br></br> COLBERT</button></a>
                </div>
                <div style = {{paddingLeft: "50px", paddingTop: "10px"}}>
                    <a href = "mailto:brandonkerpel@gmail.com"><button type = "button" style = {{display: "block", outline: "0", textAlign: "center", border: "0", padding: "7px 16px", minHeight: "36px", minWidth: "300px", borderRadius: "4px", backgroundColor: "#f4e0b9", border: "none", color: "000001", textDecoration: "none", display: "inline-block"}}> CLICK HERE TO <br></br> EMAIL <br></br> STEPHEN <br></br> COLBERT</button></a>
                </div>
                <p style = {{textAlign: "center", paddingLeft: "50px"}}>stephen@colbert.com</p>
            </div>
        </div>
    );
};
 
export default Contact;