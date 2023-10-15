import React from "react";
import "../../App";
import Footer from '../Footer/Footer.js'
import NavbarSign from "../NavBars/NavbarSign";

function Solicitante() {
    return (
        <>
            <NavbarSign/>
            <h1 className="solicitante">SOLICITANTE</h1>
            <Footer/>
        </>
    )
}

export default Solicitante;