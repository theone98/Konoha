console.log('Yeah ..Okay');

const form = document.querySelector('form');


const API_URL = 'http://localhost:5023/blog';
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const title = formData.get('title');
  const theme =formData.get('theme');
  const content = formData.get('content'); const mew = { title,theme,content }; console.log(mew);

  fetch(API_URL,{method: 'POST',body: JSON.stringify(mew),headers: {
      'content-type': 'application/json'
  }}).then(response => response.json()).then(crt => {
      console.log(crt);
      form.reset();
    });
  window.location.href="D:/Upside-Down-Full-stack-Devp.-Project--master/SFO/blog.html";
});
