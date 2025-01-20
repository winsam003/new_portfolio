import "../css/AboutMe.css"
import { FaPerson } from "react-icons/fa6";

export default function AboutMe(){
    return (
        <div className="AboutMe_Containor">
            <div className="App_CommCenter">
                <div className="AboutMe_FirBox">
                    <span>🔗</span>
                    <span>ABOUT ME</span>
                </div>
                <div className="AboutMe_SecBox">
                    <div className="AboutMe_SecBox_inner">
                        <div className="AboutMe_SecBox_inner_icon"><FaPerson /></div>
                        <div className="AboutMe_SecBox_innerDetail">
                            <div>이름</div>
                            <div>최승삼</div>
                        </div>
                    </div>
                    <div className="AboutMe_SecBox_inner">
                        <div></div>
                        <div className="AboutMe_SecBox_innerDetail">
                            <div>생년월일</div>
                            <div>1994.10.22</div>
                        </div>
                    </div>
                    <div className="AboutMe_SecBox_inner">
                        <div></div>
                        <div className="AboutMe_SecBox_innerDetail">
                            <div>위치</div>
                            <div>경기도 성남시</div>
                        </div>
                    </div>
                    <div className="AboutMe_SecBox_inner">
                        <div></div>
                        <div className="AboutMe_SecBox_innerDetail">
                            <div>contact</div>
                            <div>winsam003@gamil.com</div>
                        </div>
                    </div>
                    <div className="AboutMe_SecBox_inner">
                        <div></div>
                        <div className="AboutMe_SecBox_innerDetail">
                            <div>학력</div>
                            <div>한양사이버대학교 3학년 재학</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}