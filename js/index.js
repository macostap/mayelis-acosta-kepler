document.addEventListener("DOMContentLoaded", function () {
  
  const skills = ["Javascript", "GitHub", "HTML", "CSS"];
  const skillsSection = document.getElementById('skills');
  const skillsList = skillsSection ? skillsSection.querySelector('ul') : null;

  if (skillsList) {
    skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
    });
  }


  const footer = document.createElement('footer');
  document.body.appendChild(footer);
  const today = new Date();
  const thisYear = today.getFullYear();
  const copyright = document.createElement('p');
  copyright.innerHTML = `© Mayelis Acosta - ${thisYear}`;
  footer.appendChild(copyright);

 
  fetch('https://api.github.com/users/macostap/repos')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(repositories => {
      const projectList = document.getElementById('project-list');
      if (!projectList) {
        console.error('Element not Found project-list');
        return;
      }

      repositories.forEach(repo => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        link.href = repo.html_url;
        link.textContent = repo.name;
        link.target = "_blank"; 

        listItem.appendChild(link);
        projectList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error fetching repos:', error);
    });
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  console.log("Form submitted:", { name, email, message });

  alert(`Thank you, ${name}! Your message has been received.`);

  form.reset();
});
