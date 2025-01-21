import "../css/Footer.css";

import { FaLaptopCode } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="Footer_Containor">
            <div className="App_CommCenter">
                <div className="FooterBox">
                    <FaLaptopCode  className="Footer_icon"/>
                    <span>2025. Choi Seungsam. All rights reserved.</span>
                </div>
            </div>
        </div>
    )
}