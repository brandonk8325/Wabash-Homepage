import React from "react";
import Menu from "../../Components/Menu/menu";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HeaderLink } from "../../Components/Menu/MenuElements";

const IndexMobile = () => {

    const over = event => {
        const el = event.target;
        el.style.backgroundColor = "#efd197"
    };
    const out = event => {
        const el = event.target;
        el.style.backgroundColor = "#f4e0b9"
    }
    const click = event => {
        const el = event.target;
        el.style.backgroundColor = "#eac377"
    }

    return ( 
        
        <>
        <div style = {{display: "grid", }}>
            <div style = {{display: "block", minHeight: "10vh", backgroundColor: "#fff5e0", paddingBottom: "10px"}}>
                <div style = {{display: "flex", float: "right", paddingRight: "15%",  height: "0vh", paddingTop: "20px"}}>
                    <Menu />
                </div>
                <div style = {{display: "flex", float: "left", paddingLeft: "5%", justifyItems: "center", alignItems: "center", paddingTop: "32px"}}>   
                        <HeaderLink to="/" activeStyle>
                                WABASH WEBSITES
                        </HeaderLink>
                </div>
            </div>
      <div  style = {{minHeight: "80vh", backgroundColor: "#fff5e0"}}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div style = {{width: "80%", padding: "0", margin: "0"}}>
            <img src = {require("../../static/stephen-headshot.jpg")} alt = "Main" width = "100%" />
                <p style = {{fontSize: "35px", padding: "0", margin: "0", fontWeight: "bold", paddingBottom: "10px"}}>WABASH WEBSITES</p>
                <h4 style = {{padding: "0", margin: "0", fontSize: "25px", paddingBottom: "10px"}}>Wabash Websites develops and manages HIGH-QUALITY personalized websites for some of the LOWEST PRICES available.<br/>Starting your own website with Wabash Websites is lighting-fast and fantastically easy.<br/><br/>Fill out our Content Form! After you complete the Content Form, our Wabash Design and Development Team will immediately begin creating your website.<br/>Wabash Websites specialized in websites for actors, musicians, bands, artists, filmmakers, music producers, singers, dancers, photographers, producers, podcasters, writers, performers, and more
                </h4>
                <div style = {{paddingBottom: "20px"}}>
                    <NavLink to = "/contact">
                        <button type = "button"  role = "link" onMouseOver = {(event) => over(event)} onMouseOut = {(event) => out(event)} onMouseDown={(event) => click(event)}  style = {{fontSize: "30px", color: "black", textAlign: "center", outline: "0", alignItems: "center",  border: "none", padding: "7px 16px",minWidth: "120px", borderRadius: "4px", backgroundColor: "#f4e0b9",  textDecoration: "none", display: "inline-flex", height: "60px", width: "180px"}}> 
                                CONTACT
                     </button>
                 </NavLink>
                </div>
        </div>
        
        </div>
        </div>
        </div>
        </>
    );

};
 
export default IndexMobile;