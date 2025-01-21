import "../css/Header.css"

export default function Header({moveScroll}) {



    return (
        <div className="Header_Containor">
            <div className="Header_Box">
                <div className="Header_icon" onClick={()=>{moveScroll("Header_Containor")}} >최승삼's 포트폴리오</div>
                <div className="Header_menu">
                    <span className="Header_menuTap Header_menu1" onClick={()=>{moveScroll("AboutMe_Containor")}}>About Me</span>
                    <span className="Header_menuTap Header_menu2" onClick={()=>{moveScroll("Career_Containor")}}>Career</span>
                    <span className="Header_menuTap Header_menu3" onClick={()=>{moveScroll("Projects_Containor")}}>Projects</span>
                </div>
            </div>
        </div>
    )
}