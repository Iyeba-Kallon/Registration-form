document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();
    

        const username= document.getElementById(username).value;
        const email= document.getElementById(email).value;
        const password= document.getElementById(password).value;

        if (username ===  "" || email === "" || password === "") {
            alert("Please fill in all fields");
            return;
        }

        

        registrationForm.reset();
    
    });

});