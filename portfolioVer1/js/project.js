
// project-card.js

function createProjectCard2(title, techStack, imageSrc, description) {
  const wrapper = document.createElement('div');
  wrapper.className = 'project-card';

  const imageWrapper = document.createElement('div');
  imageWrapper.className = 'project-image-wrapper';

  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = title;
  img.className = 'project-image';

  const overlay = document.createElement('div');
  overlay.className = 'project-overlay';
  overlay.textContent = description;

  imageWrapper.appendChild(img);
  imageWrapper.appendChild(overlay);

  const content = document.createElement('div');
  content.className = 'project-content';

  const titleElem = document.createElement('p');
  titleElem.className = 'project-title';
  titleElem.textContent = title;

  const stackElem = document.createElement('p');
  stackElem.className = 'project-stack';
  stackElem.textContent = techStack;

  // hover 시 stack 텍스트 교체
  wrapper.addEventListener('mouseenter', () => {
    stackElem.textContent = '자세히 보기 > ';
  });
  wrapper.addEventListener('mouseleave', () => {
    stackElem.textContent = techStack;
  });

  content.appendChild(titleElem);
  content.appendChild(stackElem);

  wrapper.appendChild(imageWrapper);
  wrapper.appendChild(content);

  return wrapper;
}


const moonshot2 = createProjectCard2(
      'MOONSHOT',
      'react, typescript, emotion, swr',
      './assets/moonshot.png',
      'personal OKR 성과관리 솔루션, Moonshot'
);

const noongil = createProjectCard2(
      'Noongil',
      'react, react-Native,typescript, emotion, swr',
      '',
      '직장인을 위한 커피챗 서비스'
);

document.getElementById('projects').appendChild(moonshot2);
document.getElementById('projects').appendChild(noongil);
