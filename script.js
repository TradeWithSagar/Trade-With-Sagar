document.getElementById("registerForm").addEventListener("submit", async function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const agree = document.getElementById("agree").checked;

    if(name==""){
        alert("Enter your Name");
        return;
    }

    if(email==""){
        alert("Enter your Email");
        return;
    }

    if(!/^[6-9]\d{9}$/.test(phone)){
        alert("Enter Valid Mobile Number");
        return;
    }

    if(!agree){
        alert("Please Accept Terms & Conditions");
        return;
    }

    const response = await fetch("https://script.google.com/macros/s/AKfycbxqDTaZln5sLYvXfvUZW9MBaK_HvINWb3445Zs7TlHpacy8JaNZePIcFZ9hLSWJNHI/exec",{

        method:"POST",

        body:JSON.stringify({
            name:name,
            email:email,
            phone:phone
        })

    });

    const result=await response.text();

    if(result=="duplicate"){

        alert("You are already registered.");

        return;

    }

    alert("Registration Successful!");

    window.location.href="https://chat.whatsapp.com/H60sRiX0EEAIKj4s3e7XM1";

});