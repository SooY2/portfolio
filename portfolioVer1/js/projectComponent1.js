const projectMoonshot = {
  title: 'MOONSHOT',
  period: '2023.08 ~',
  subtitle: 'personal OKR 성과관리 솔루션, Moonshot',
  explains: ['okr대시보드 개발', 'okr목표 설정 및 관리 기능 개발'],
  link: 'https://www.moonshotyou.com/about',
  skills: ['React', 'Typescript', 'swr', 'emotion']
};

const projectNoongil = {
  title: '눈길',
  period: '2024.01 ~',
  subtitle: '바쁜 현대 직장인들을 위한 커피챗 서비스',
  explains: ['커널 구조를 활용한 회원가입 프로세스', '웹소켓을 활용한 실시간 채팅 구현'],
  link: '',
  skills: ['React', 'React-Native', 'Typescript', 'emotion']
};
/** 컴포넌트에 위의 정보가 모두 들어가는 컴포넌트 > 현재 미사용 = */

// function createProjectCard({ title, period, subtitle, explains, link, skills }) {
//   const container = document.createElement('div');
//   container.className = 'project-card-container';

//   const titleElem = document.createElement('h3');
//   titleElem.className = 'project-card-title';
//   titleElem.textContent = title;
//   container.appendChild(titleElem);

//   const periodElem = document.createElement('p');
//   periodElem.className = 'project-card-period';
//   periodElem.textContent = period;
//   container.appendChild(periodElem);

//   const subtitleElem = document.createElement('p');
//   subtitleElem.className = 'project-card-subtitle';
//   subtitleElem.textContent = subtitle;
//   container.appendChild(subtitleElem);

//   explains.forEach(text => {
//     const explainElem = document.createElement('p');
//     explainElem.className = 'project-card-explain';
//     explainElem.textContent = `▪ ${text}`;
//     container.appendChild(explainElem);
//   });

//   const linkElem = document.createElement('a');
//   linkElem.className = 'project-card-link';
//   linkElem.href = link;
//   linkElem.target = '_blank';
//   linkElem.textContent = `🧷 ${link}`;
//   container.appendChild(linkElem);

//   const skillsElem = document.createElement('div');
//   skillsElem.className = 'project-card-skills';
//   skillsElem.textContent = skills.join(', ');
//   container.appendChild(skillsElem);

//   return container;
// }


// document.getElementById('projects').appendChild(createProjectCard(projectMoonshot));
// document.getElementById('projects').appendChild(createProjectCard(projectNoongil));
// document.getElementById('projects').appendChild(createProjectCard(projectNoongil));
// document.getElementById('projects').appendChild(createProjectCard(projectNoongil));


// css

/* project card */
//  .project-card-container {
//         padding: 2rem;
//         width: 30rem;
//         height: max-content;
//         border: 1px solid #e4e4e4;
//         box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//         border-radius: 8px;
//         background-color: #ffffff;
//     }

//     .project-card-title{
//         font-size: 1.8rem;
//         width: fit-content;
//         padding: 0.5rem 1rem;
//         border-radius: 10px;
//         background-color: rgb(215, 227, 250);
//     }

//     .project-card-period{
//         font-size: 1.2rem;
//         color: #666;
//         margin: 0.5rem 0;
//     }

//     .project-card-divide {
//         border-top: 1px solid #ccc;
//         padding-top: 1rem;
//     }

//     .project-card-subtitle{
//         font-size: 1.4rem;
//         line-height: 2rem;
//         font-weight: 500;
//     }

//     .project-card-explain{
//         font-size: 1.3rem;
//         line-height: 1.8rem;
//         margin-left: 1rem;
//     }

//     .project-card-link{
//         font-size: 1.2rem;
//     }

//     .project-card-skills {
//         padding: 1rem;
//         margin-top: 1rem;
//         font-size: 1.2rem;
//         background-color: aliceblue;
//         border-radius: 10px;
//     }

