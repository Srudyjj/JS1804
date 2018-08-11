document.addEventListener('DOMContentLoaded', () => {
  console.log("Hello");
  enter();
  admin();
  exit();
})

function enter() {
  const form = document.querySelector('form');
  if (form !==null) {
    const input = form.querySelector('#name');
    form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = input.value;
    if (name.toLowerCase() === 'admin') {
      localStorage.setItem('name', name);
      this.submit();
    }   
  });  
  } 
}

function admin() {
  const title = document.querySelector('#title');
  if (title !==null) {
    const name = localStorage.getItem('name');
    title.innerHTML = `Вы вошли под именем ${name}`;
  }
}

function exit() {
  const exit = document.getElementById('exit');
  if (exit !== null) {
    exit.addEventListener('click', () => {
      history.back();
    })    
  }  
}
  