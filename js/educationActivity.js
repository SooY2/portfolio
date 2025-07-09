import { EDU_LIST } from "../constants/EDU_LIST.js";

function createEduContainer({ title, period, activities }) {
  const container = document.createElement("div");
  container.className = "edu-container";

  // toggle header
  const toggle = document.createElement("div");
  toggle.className = "edu-toggle";

  const titleElem = document.createElement("p");
  titleElem.textContent = title;

  const periodElem = document.createElement("p");
  periodElem.textContent = period;

  const toggleBtn = document.createElement("button");
  toggleBtn.className = "edu-toggle-btn";
  toggleBtn.textContent = "+";

  // ✅ 이벤트를 지금 이 toggle 요소에 바로 붙임
  toggle.addEventListener("click", () => {
    const content = container.querySelector(".edu-content");
    const button = container.querySelector(".edu-toggle-btn");
    const isOpen = content.classList.contains("open");

    if (isOpen) {
      content.style.maxHeight = "0";
      content.classList.remove("open");
      button.textContent = "+";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("open");
      button.textContent = "−";
    }
  });

  toggle.appendChild(titleElem);
  toggle.appendChild(periodElem);
  toggle.appendChild(toggleBtn);

  // edu-content
  const content = document.createElement("div");
  content.className = "edu-content";
  content.style.maxHeight = "0"; // 초기 접힘
  content.style.overflow = "hidden";
  content.style.transition = "max-height 0.3s ease";

  const innerContent = document.createElement("div");
  activities.forEach(act => {
    const p = document.createElement("p");
    p.textContent = act;
    innerContent.appendChild(p);
  });
  content.appendChild(innerContent);

  container.appendChild(toggle);
  container.appendChild(content);

  return container;
}




EDU_LIST.forEach(data => {
  const eduCard = createEduContainer(data);
  document.getElementById('education-activity').appendChild(eduCard);
});



