import React from "react";
import "../../App";
import Footer from '../Footer/Footer.js'
import NavbarSign from "../NavBars/NavbarSign";
import SeccionSolicitante from "../sections/SeccionSolicitante.js";


function Solicitante() {
    return (
        <>
            <NavbarSign/>
            <SeccionSolicitante/>
            <Footer/>
        </>
    )
}

export default Solicitante;