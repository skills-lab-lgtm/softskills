// Scroll animation
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});

// Skill toggle
function toggleSkill(card) {
  card.classList.toggle('active');
}

// Language switch
const langBtn = document.getElementById('langBtn');
let currentLang = 'ru';

langBtn.onclick = () => {
  currentLang = currentLang === 'ru' ? 'en' : 'ru';
  langBtn.textContent = currentLang === 'ru' ? 'EN' : 'RU';

  document.querySelectorAll('[data-ru]').forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
};

// Chart
const ctx = document.getElementById('skillsChart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Коммуникация','Мышление','EQ','Креативность'],
    datasets: [{
      label: 'Влияние (%)',
      data: [85, 78, 90, 70],
      backgroundColor: '#6a85ff'
    }]
  }
});
