import React from "react";
import { Header, HeaderLink } from "./HeaderElements";
 
const HeaderBar = () => {
    return (
        <>
            <Header>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "10vh"}}>
                        <HeaderLink to="/" activeStyle>
                                WABASH WEBSITES
                        </HeaderLink>
                    </div>
            </Header>
        </>
    );
};
 
export default HeaderBar;