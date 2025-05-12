
document.addEventListener("DOMContentLoaded", function() {
  const skills = ["Javascript", "GitHub", "HTML", "CSS"];
  const skillsSection = document.getElementById('skills');
  const skillsList = skillsSection ? skillsSection.querySelector('ul') : null;

  if (!skillsList) {
    console.error('Skills list not found!');
    return;
  }

  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });
});

