
const sections = document.querySelectorAll('#portfolio > div > section');
const navItems = document.querySelectorAll('aside ul li');

const observer = new IntersectionObserver(
entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            navItems.forEach(li => {
            li.classList.toggle('active', li.dataset.target === id);
            if (id ==='education-activity') {
                document.body.style.backgroundColor = '#f7f7f8';
                
            } else document.body.style.backgroundColor = '#ffffff';
            });
        }
    });
},
{
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.5, // 40% 보여질 때 반응
}
);

sections.forEach(section => observer.observe(section));

// (선택) nav 클릭 시 스크롤 이동 기능도 추가
navItems.forEach(li => {
li.addEventListener('click', () => {
    const targetId = li.dataset.target;
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
});
});
