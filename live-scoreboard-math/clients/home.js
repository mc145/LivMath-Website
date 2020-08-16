
const navSlide = () =>{
const burger = document.querySelector('.burger'); 
const nav = document.querySelector('.nav');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active'); 
    }); 
}
navSlide(); 

const API_URL = 'http://localhost:8888/news'; 
const newsletter = document.querySelector('form');

newsletter.addEventListener('submit', (event) =>{
    event.preventDefault(); 
   const formData = new FormData(newsletter);
   const email = formData.get('email'); 
   const mail = { 
        email
    };
        newsletter.reset();   
        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(mail),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(emailWorks => {
                if(emailWorks.works){
                    document.getElementById("explains").innerHTML = "Received"; 
                }
                else{
                    document.getElementById("explains").innerHTML = "NOT VALID"; 

                }
            });
}); 