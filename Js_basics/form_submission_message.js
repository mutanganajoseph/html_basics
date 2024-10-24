
const errorDiv = document.getElementById("error");
const my_field = document.getElementById("myField");
const submitted = document.getElementById("submitted");
let back = document.querySelector("a");

function clear_error(){
    errorDiv.textContent ='';
}

document.getElementById("firstName").addEventListener("input", clear_error);
document.getElementById("secondName").addEventListener("input", clear_error);
document.getElementById("email").addEventListener("input", clear_error);


document.getElementById('submit').onclick = function(e){
    e.preventDefault();


    
    const first_name = document.getElementById("firstName").value.trim();
    const second_name = document.getElementById("secondName").value.trim();
    const emailInput = document.getElementById("email").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/
;

   
    
    if(first_name && second_name && emailInput){
        my_field.textContent = `Form submitted successfully! ${first_name}. `;
        back.textContent = 'Back';
       
    }

    else if (!emailRegex.test(email.value)) {
        errorDiv.textContent = "Please enter a valid email address.";
    }
    
    

    else{
        

        errorDiv.textContent = 'Please fill the form!';

        
    }
};