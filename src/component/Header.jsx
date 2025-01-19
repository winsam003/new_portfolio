import "../css/Header.css"

export default function Header() {
    return (
        <div className="Header_Continor">
            <div className="Header_Box">
                <div className="Header_icon">최승삼's 포트폴리오</div>
                <div className="Header_menu">
                    <span className="Header_menuTap Header_menu1">About Me</span>
                    <span className="Header_menuTap Header_menu2">Career</span>
                    <span className="Header_menuTap Header_menu3">Projects</span>
                </div>
            </div>
        </div>
    )
}