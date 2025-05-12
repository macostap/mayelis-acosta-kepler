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

  const footer = document.createElement('footer');
  document.body.appendChild(footer);

  const today = new Date();
  const thisYear = today.getFullYear();

  const copyright = document.createElement('p');
  copyright.innerHTML = `Mayelis Acosta ${thisYear}`;
  footer.appendChild(copyright);

  const messageForm = document.forms['leave_message'];

  messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    messageForm.reset();

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');

    const newMessage = document.createElement('li');
    newMessage.innerHTML = `
      <a href="mailto:${usersEmail}">${usersName}</a>
      <span>${usersMessage}</span>
    `;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', function() {
      newMessage.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
  });
});
