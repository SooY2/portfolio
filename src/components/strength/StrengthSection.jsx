import { useEffect, useRef, useState } from "react";
import strengthSt from "../../styles/strength.module.css"; // CSS 모듈 경로 예시

export default function StrengthSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const triggerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    triggerRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
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
            {["책임감", "문제해결능력", "섬세함"].map((text, i) => (
              <p
                key={i}
                data-index={i}
                className={`${strengthSt.strength_text} ${
                  activeIndex === i ? strengthSt.active : ""
                }`}
              >
                {text}
                {i < 2 ? "," : ""}
              </p>
            ))}
            으로
            <p>
              <span style={{ fontSize: "2rem" }}>더 나은 사용자 경험</span>을
              추구합니다.
            </p>
          </div>
        </div>

        <div id={strengthSt.strength_icons}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`${strengthSt.icon} ${
                activeIndex === i ? strengthSt.active : ""
              }`}
              data-index={i}
            >
              {i === 0 && (
                <img src="./assets/responsibilityIcon.png" alt="책임감" />
              )}
              {i === 1 && (
                <>
                  <img src="./assets/problemIcon.png" alt="문제해결능력" />
                </>
              )}
              {i === 2 && <img src="./assets/delicateIcon.png" alt="섬세함" />}
            </div>
          ))}
        </div>
      </section>

      {/* 스크롤 트리거 */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="trigger-zone"
          data-index={i}
          ref={(el) => (triggerRefs.current[i] = el)}
          style={{ height: "80vh" }} // 충분한 스크롤 영역 확보용
        />
      ))}
    </div>
  );
}
