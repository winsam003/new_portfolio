import "../css/Projects.css";

export default function Projects() {
    return (
        <div className="Projects_Containor">
            <div className="App_CommCenter">
                <div className="Projects_FirBox">
                        <span>🔗</span>
                        <span>Projects</span>
                </div>
                <div className="Projects_GridBox">
                    <div className="Projects_ProjectBox">
                        <div className="Projects_Title"><span>KBS 비즈니스</span></div>
                        <div className="Projects_scale">2025.01 (6인 팀 프로젝트)</div>
                        <div className="Projects_subTitle">KBS 비즈니스 신규 웹 페이지 개발 프로젝트</div>
                        <div className="Projects_Info">
                            <ul>
                                <li>KBS 비즈니스 관리자/유저 웹 페이지 개발</li>
                                <li>KBS 스포츠월드 관리자/유저 웹 페이지 개발</li>
                                <li>KBS 아레나 관리자/유저 웹 페이지 개발</li>
                                <li>KBS 예술과학원 관리자/유저 웹 페이지 개발</li>
                            </ul>
                        </div>
                        <div className="Projects_url"><a href="https://kbsbiz.co.kr/">https://kbsbiz.co.kr/</a></div>
                        <div className="Projects_skills">HTML, CSS, JS, JSP, SpringBoot, NAVER Cloud, PostgreSQL, MyBatis</div>
                    </div>
                    <div className="Projects_ProjectBox">
                        <div className="Projects_Title"><span>포트폴리오</span></div>
                        <div className="Projects_scale">2025.01 (1인 프로젝트)</div>
                        <div className="Projects_subTitle">개인 성과 기록 포트폴리오 개발</div>
                        <div className="Projects_Info">
                            <ul>
                                <li>반응형 페이지 구성</li>
                                <li>포트폴리오 깃 페이지 개시</li>
                            </ul>
                        </div>
                        <div className="Projects_url"><a href="https://winsam003.github.io/new_portfolio/">https://winsam003.github.io/new_portfolio/</a></div>
                        <div className="Projects_skills">HTML, CSS, JS, REACT, Git</div>
                    </div>
                    <div className="Projects_ProjectBox">
                        <div className="Projects_Title"><span>리그오브레전드 API 구현</span></div>
                        <div className="Projects_scale">2025.01 (1인 프로젝트)</div>
                        <div className="Projects_subTitle">리그오브레전드 API 개발</div>
                        <div className="Projects_Info">
                            <ul>
                                <li>유저 정보 조회, 최근 매치 정보 조회 구현</li>
                            </ul>
                        </div>
                        <div className="Projects_url"><a href="https://github.com/winsam003/LOL_API.git">https://github.com/winsam003/LOL_API.git</a></div>
                        <div className="Projects_skills">Spring Boot 3.4.2, JDK 21</div>
                    </div>
                </div>
            </div>
        </div>
    )
}