const contactFormHandler = async (event) => {
    event.preventDefault();


const email = document.querySelector("#email").value.trim();
const name = document.querySelector("#name").value.trim();
const message = document.querySelector("#message").value.trim();
const subject = document.querySelector("#subject").value.trim();

const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({ email, name, message, subject}),
    headers: { 'Content-Type': 'application/json' },
});

  if (response.ok) {
    document.location.replace('/home');
  } else {
    alert('Failed to send.');
  }

};
  document
  .getElementById('contact-form')
  .addEventListener('submit', contactFormHandler);
