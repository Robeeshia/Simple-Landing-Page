// console.log("entered Script");


const text = "Your Trusted Hardware Partner for 31 Years!";
const welcomeTextElement = document.getElementById('welcomeText');
text.split("").forEach((char, index) => {
  const span = document.createElement('span');
  span.style.setProperty('--i', index);
  span.textContent = char === " " ? "\u00A0" : char;
  welcomeTextElement.appendChild(span);
});
// console.log("entered Script");

// document.addEventListener('DOMContentLoaded', () => {
//   const text = "Your Trusted Hardware Partner for 31 Years!";
//   const welcomeTextElement = document.getElementById('welcomeText');
//   if (welcomeTextElement) {
//       text.split("").forEach((char, index) => {
//           const span = document.createElement('span');
//           span.style.setProperty('--i', index);
//           span.textContent = char === " " ? "\u00A0" : char;
//           welcomeTextElement.appendChild(span);
//       });
//   }
// });

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
}
// console.log("entered Script");

document.addEventListener('DOMContentLoaded', () => {
  const chatContainer = document.getElementById('chatContainer');
  const floatingButton = document.getElementById('floatingButton');
  const closeButton = document.getElementById('closeButton');
  const startChatButton = document.getElementById('startChatButton');

  let isOpen = false;

  function toggleChat() {
    isOpen = !isOpen;
    chatContainer.style.display = isOpen ? 'block' : 'none';
  }

  floatingButton.addEventListener('click', toggleChat);
  closeButton.addEventListener('click', toggleChat);
  startChatButton.addEventListener('click', toggleChat);
});
// console.log("entered Script");
