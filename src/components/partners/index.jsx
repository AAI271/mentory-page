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
                    <a href="">
                        <img src={DaypayLogo} alt=""/>
                    </a>
                    <a href="">
                        <img width="400" src={Oilama} alt=""/>
                    </a>
                    <a href="#">
                        <img src={LansoftLogo} alt=""/>
                    </a>
                    <a href="#">
                        <img src={ItLogo} alt=""/>
                    </a>
                    <a href="#">
                        <img src={LtcLogo} alt=""/>
                    </a>
                    <a href="#">
                        <img src={WebsoftLogo} alt=""/>
                    </a>

            </div>
        </div>
    );
};

export default Partners;
