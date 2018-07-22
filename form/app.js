(function validator() {
  const form = document.querySelector('form'); 
  const btn = form.querySelector('input[type="submit"]');
  const inputEmail = form.querySelector('#email');
  const re = new RegExp('\\S+\\w+@\\w+\\S+\\w+\.\\w+', 'i');

  form.addEventListener('submit', (e) => {
    const str = inputEmail.value;
    if (re.test(str)) {
      inputEmail.classList.remove("error"); 
      form.submit();
    } else {
      e.preventDefault();
      inputEmail.classList.add("error");     
    }
  });  
})();
