let myForm = document.querySelector("contact");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const pWord = document.getElementById("pw");
const eMail = document.getElementById("email");
const mobileNum = document.getElementById("phone");
const cityName = document.getElementById("city");
const field = document.querySelectorAll('set');
const button = document.getElementById("subnit");
const result = document.getElementById('result');

myForm.addEventListener('submit', (evt) => {
    
    evt.preventDefault();
   
   result.appendChild(document.createTextNode(`${fname.value}`));
});

