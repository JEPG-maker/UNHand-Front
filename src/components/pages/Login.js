import React from "react";
import "../../App";
import Footer from '../Footer/Footer.js'
import NavbarSign from "../NavBars/NavbarSign";
import FormLogin from "../Forms/FormRegister/FormLogin";

function SingIn() {
    return (
        <>
            <NavbarSign/>
            <FormLogin/>
            <Footer/>
        </>
    )
}

export default SingIn;