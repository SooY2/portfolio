import headerSt from "./styles/header.module.css";
import strengthSt from "./styles/strength.module.css";

function App() {
  return (
    <>
      <header className={headerSt.header_container}>
        <nav>
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div id={strengthSt.strength_wrapper}>
          <section id={strengthSt.strength}>
            <div id={strengthSt.strength_texts}>
              <div>
                <h1>
                  <p>안녕하세요 😊 </p>
                  <br />
                  <p style={{ fontSize: "4.5rem", color: "#000" }}>
                    사용자의 관점에서 고민하는
                  </p>
                  <br />
                  <p>프론트엔드 개발자 신수연입니다</p>
                </h1>
              </div>
              <div>
                <p data-index="0" className={strengthSt.strength_text}>
                  책임감
                </p>
                ,
                <p data-index="1" className={strengthSt.strength_text}>
                  문제해결능력
                </p>
                ,
                <p data-index="2" className={strengthSt.strength_text}>
                  섬세함
                </p>
                으로
                <p>
                  <span style={{ fontSize: "2rem" }}>더 나은 사용자 경험</span>
                  을 추구합니다.
                </p>
              </div>
            </div>
            <div id={strengthSt.strength_icons}>
              <div className={strengthSt.icon} data-index="0">
                {/* <!-- 책임감 아이콘 --> */}
                <img src="./assets/responsibilityIcon.png" alt="책임감" />
              </div>
              <div className={strengthSt.icon} data-index="1">
                {/* <!-- 문제해결능력 아이콘 --> */}
                <img src="./assets/problemIcon" />
                <img src="./assets/delicateIcon.png" alt="섬세함" />
              </div>
            </div>
          </section>
          {/* <!-- 스크롤 트리거 --> */}
          <div className="trigger-zone" data-index="0"></div>
          <div className="trigger-zone" data-index="1"></div>
          <div className="trigger-zone" data-index="2"></div>
        </div>

        {/* <!-- <section id={about">
            <div>
                <img src="https://avatars.githubusercontent.com/u/101343915" alt="Profile Picture" className={profile-image">
            </div>
            
        </section> --> */}

        <section id="portfolio">
          <aside>
            <ul>
              <li className="common_title" data-target="projects">
                Projects
              </li>
              <li className="common_title" data-target="education-activity">
                Education & Activity
              </li>
              <li className="common_title" data-target="career">
                Career
              </li>
            </ul>
          </aside>
          <div>
            <section id="projects"></section>
            <section id="education_activity" style={{ height: "100rem" }}>
              {/* <!-- 활동 및 교육 컴포넌트 --> */}
            </section>
            <section id={"career"} style={{ height: "100rem" }}>
              경력
            </section>
          </div>
        </section>

        <section id={"contact"}>
          <h2>Contact</h2>
          <div>
            <p>email | ssy67366736@gmail.com</p>
            <p>phone | 010-5048-6736</p>
          </div>
        </section>
      </main>

      <footer id={"footer"}>
        <p>© 2023 SooY. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
