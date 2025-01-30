import "../css/Career.css";

export default function Career() {
    return (
        <div className="Career_Containor">
            <div className="App_CommCenter">
                <div className="Career_FirBox">
                        <span>🔗</span>
                        <span>CAREER</span>
                </div>
                <div className="Career_SecBox">
                    <div className="Career_Career Career_Career1">
                        <div className="Career_Career1_img"></div>
                    </div>
                    <div className="Career_Info_Box">
                        <div className="Career_Info_Title">UrbanLT</div>
                        <div className="Career_Info_period">2024-06-03 ~ 재직중</div>
                        <div className="Career_Info_subTitle">풀스택 개발자</div>
                        <div className="Career_Info_subject">
                            <div>웹 유지보수</div>
                            <div>신규 개발</div>
                        </div>
                        <div>
                            <div className="Career_Info_Perform">아산스포츠센터, 수원도시공사, 국립수목원, 대전시설관리공단, 통영청소년체육센터, 진명스포아트 유지보수</div>
                            <ul className="Career_Info_active">
                                <li>아산스포츠센터 계좌검증 속도 개선</li>
                                <li>국립수목원 차량 조회 API 속도 개선</li>
                                <li>국립수목원 예약 마감일 추가 개발 건</li>
                                <li>수원도시공사 마이페이지 조회 속도 개선</li>
                            </ul>
                            {/* <div className="Career_Info_url"><a>url뿌리기</a></div> */}
                            <div className="Career_Info_Perform">KBS비즈니스 프로젝트, 피트모아 프로젝트 신규개발 참여</div>
                            <ul className="Career_Info_active">
                                <li>KBS비즈니스 프로젝트 자기신고서 스키마 구성, API, 관리자 설정화면 Front 구현(JSP)</li>
                                <li>피트모아 프로젝트 Front 구현 (React) </li>
                            </ul>
                            {/* <div className="Career_Info_url"><a>url뿌리기</a></div> */}
                        </div>
                    </div>
                    <div className="Career_Career Career_Career2">
                        <div  className="Career_Career2_img"></div>
                    </div>
                    <div className="Career_Info_Box">
                        <div className="Career_Info_Title">그린컴퓨터학원 아카데미 풀스택 과정 수료</div>
                        <div className="Career_Info_period">2023.10.25 ~ 2024-05-30</div>
                        <div className="Career_Info_subTitle">프로젝트기반 웹(자바, 스프링, 리액트) SW 개발자 양성과정</div>
                        <div className="Career_Info_subject">
                            <div>JAVA</div>
                            <div>REACT</div>
                            <div>SPRING</div>
                            <div>MYSQL</div>
                        </div>
                        <div>
                            <div className="Career_Info_Perform">HTML, JS, REACT를 이용한 프론트엔드 프로젝트</div>
                            <div className="Career_Info_url"><a href="https://github.com/simsim916/coinJung_CookieRun">https://github.com/simsim916/coinJung_CookieRun</a></div>
                            <div className="Career_Info_Perform">REACT, SPRING, MYSQL, AWS를 이용한 풀스택 프로젝트</div>
                            <div className="Career_Info_url"><a href="https://github.com/winsam003/Sports-complex">https://github.com/winsam003/Sports-complex</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}