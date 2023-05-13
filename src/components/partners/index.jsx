import React from 'react';
import "./index.css"
import LansoftLogo from "../../assets/partners/lansoft.svg"
import DaypayLogo from "../../assets/partners/daypay.svg"
import Oilama from "../../assets/partners/oilama.svg"
import ItLogo from "../../assets/partners/it.svg"
import LtcLogo from "../../assets/partners/ltc.svg"
import WebsoftLogo from "../../assets/partners/websoft.svg"

const Partners = () => {
    return (
        <div className="partners">
            <h3>Our partners</h3>
            <div className="partners__content">
                    <a href="https://daypay.kz/">
                        <img src={DaypayLogo} alt=""/>
                    </a>
                    <a href="https://oilama.com/">
                        <img width="400" src={Oilama} alt=""/>
                    </a>
                    <a href="https://www.lansoft.by/">
                        <img src={LansoftLogo} alt=""/>
                    </a>
                    <a href="https://astanait.edu.kz/">
                        <img src={ItLogo} alt=""/>
                    </a>
                    <a href="https://ltc.kz/">
                        <img src={LtcLogo} alt=""/>
                    </a>
                    <a href="https://websoft.agency/">
                        <img src={WebsoftLogo} alt=""/>
                    </a>

            </div>
        </div>
    );
};

export default Partners;
