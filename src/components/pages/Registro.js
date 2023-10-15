import React from "react";
import "../../App";
import Footer from '../Footer/Footer.js'
import NavbarSign from "../NavBars/NavbarSign";
import FormSignup from "../Forms/FormRegister/FormSignup";


function SingUp() {
    return (
        <>
            <NavbarSign/>
            <FormSignup/>
            <Footer/>
        </>
    )
}

export default SingUp;