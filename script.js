// script.js

//smooth scrolling to anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntroView({
            behavior: 'smooth'
        })
    });
});

//submit form event listener

document.getElementById('contact-form').addEventListener('submit',function (e){
    e.preventDefault();
    
    //Get form values
const name =document.getElementById('name').value;
const email =document.getElementById('email').value;
const message =document.getElementById('message').value;

//TODO: perform form validation and submit data

//Reset form
document.getElementById('contact-form').reset();
});