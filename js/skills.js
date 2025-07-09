function skillBox(skill, fontColor, bgColor) {
  const box = document.createElement('div');
  box.className = 'skill-box';
  box.textContent = skill;

  // 인라인 스타일 적용
  box.style.color = fontColor;
  box.style.backgroundColor = bgColor;

  // 원하는 위치에 붙이기 (여기선 id="skill-container" 아래에 추가)
  document.getElementById('skills').appendChild(box);
}
// skillBox('JavaScript', '#000000','#F7DF1E');

const skillBox2 = (alt, srcText, color, logo, logoColor) => {
  const img = document.createElement('img');
  img.alt = alt;

  // shields.io API 형식에 맞게 src 생성
  img.src = `https://img.shields.io/badge/${encodeURIComponent(srcText)}-${color}?style=flat-square&logo=${encodeURIComponent(logo)}&logoColor=${encodeURIComponent(logoColor)}`;


  document.getElementById('skills-box-container').appendChild(img);
}

skillBox2('react', 'React', '61DAFB', 'React', 'black');
skillBox2('react-native', 'ReactNative', '61DAFB', 'React', 'black');
skillBox2('typescript', 'Typescript', '3178C6', 'typescript', 'black');
skillBox2('javascript', 'Javascript', 'F7DF1E', 'javascript', 'black');
skillBox2('reactQuery', 'reactQuery', 'FF4154', 'reactQuery', 'black');


