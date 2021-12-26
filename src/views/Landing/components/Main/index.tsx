import React from "react";
import { Link, SvgIcon } from "@material-ui/core";
import "./main.scss";
import CatImg from "../../../../assets/icons/Chershire_Cat.jpeg";
import mor from "../../../../assets/icons/mor.png";

function Main() {
    return (
        <div className="landing-main">
            <div className="landing-main-img-wrap">
                <img src={mor} alt="" />
                {/* <SvgIcon color="primary" component={morph_landing} viewBox="0 0 174 40" style={{ minWidth: 174, minHeight: 40 }} /> */}
            </div>
            <div className="landing-main-btns-wrap">
                <Link href="https://morpheus-mu.vercel.app/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Enter App</p>
                    </div>
                </Link>
                <Link href="https://morpheus-dao.gitbook.io/morpheus-dao/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Documentation</p>
                    </div>
                </Link>
            </div>
            <div className="landing-main-title-wrap">
                {/* <p>The Defi</p> */}
                <p>Morpheus Dao</p>
                {/* <p>Welcome to the real world of Defi</p> */}
            </div>
            <div className="landing-main-help-text-wrap">
                <p>Welcome to the real world of Defi</p>
                <br></br>
                <p>Financial tools to grow your wealth - stake</p>
                <p>and earn compounding interest</p>
            </div>
        </div>
    );
}

export default Main;
