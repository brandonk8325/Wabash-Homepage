
import React from "react";
import { Footer, FooterMenu } from "./FooterElements";
import Instagram from "../../static/instagram.svg";
import Facebook from "../../static/Facebook.svg";
import Twitter from "../../static/Twitter.svg";
import Youtube from "../../static/Youtube.svg";
const FooterBar = () => {
    return (
        <>
            <Footer style={{ display: 'flex', alignItems: 'center',justifyContent: 'center', height: `10vh`}}>
                <FooterMenu >

                    <a href = "https://instagram.com"><img src = {Instagram} alt = "" height = "30vh" style = {{paddingLeft: "2vh", paddingRight: "2vh", filter: "invert(14%) sepia(51%) saturate(1830%) hue-rotate(213deg) brightness(92%) contrast(99%)"}}/></a>
                    <a href = "https://facebook.com"><img src = {Facebook} alt = "" height = "30vh"  style = {{paddingLeft: "2vh", paddingRight: "2vh", filter: "invert(14%) sepia(51%) saturate(1830%) hue-rotate(213deg) brightness(92%) contrast(99%)"}}/></a>
                    <a href = "https://twitter.com"><img src = {Twitter} alt = "" height = "30vh"  style = {{paddingLeft: "2vh", paddingRight: "2vh", filter: "invert(14%) sepia(51%) saturate(1830%) hue-rotate(213deg) brightness(92%) contrast(99%)"}}/></a>
                    <a href = "https://youtube.com"><img src = {Youtube} alt = "" height = "30vh"  style = {{paddingLeft: "2vh", paddingRight: "2vh", filter: "invert(14%) sepia(51%) saturate(1830%) hue-rotate(213deg) brightness(92%) contrast(99%)"}}/></a>
                </FooterMenu>
            </Footer>
        </>
    );
};
 

export default FooterBar;