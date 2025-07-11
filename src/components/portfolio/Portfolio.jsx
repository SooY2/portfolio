import { useEffect, useRef, useState } from "react";

export default function Portfolio() {
  const [activeId, setActiveId] = useState("projects");
  const sectionsRef = useRef({});

  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "education-activity", label: "Education & Activity" },
    { id: "career", label: "Career" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // 요소가 50% 이상 보일 때
      }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const section = sectionsRef.current[id];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="flex items-start gap-8 px-8 py-10">
      <aside className="sticky top-0 self-start h-fit w-[25rem]">
        <ul className="list-none p-0 m-0">
          {navItems.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer py-2 transition-colors duration-300 ease-in-out ${
                activeId === id
                  ? "text-black font-bold"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {label}
            </li>
          ))}
        </ul>
      </aside>

      <div className="flex-1">
        <section
          id="projects"
          ref={(el) => (sectionsRef.current["projects"] = el)}
          style={{ minHeight: "100vh" }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          {/* 콘텐츠 */}
        </section>

        <section
          id="education-activity"
          ref={(el) => (sectionsRef.current["education-activity"] = el)}
          style={{ minHeight: "100vh" }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-6">Education & Activity</h2>
          {/* 콘텐츠 */}
        </section>

        <section
          id="career"
          ref={(el) => (sectionsRef.current["career"] = el)}
          style={{ minHeight: "100vh" }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-6">Career</h2>
          {/* 콘텐츠 */}
        </section>
      </div>
    </section>
  );
}
