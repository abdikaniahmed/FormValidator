const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('Email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}


// success massega 

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

  /// check required feilds
function checkrequired(CheckArr){
    CheckArr.forEach(input =>{
       if(input.value.trim() === ""){
        showError(input, `${feildname(input)} is required`)
       }
       else{
        showSuccess(input)
       }
    })
}
// check lengths

function checkLength(input, min, max) {
    if (input.value.length < min || input.value.length > max ) {
        showError(input,`${feildname(input)} must be at least ${min}`)
    }
    // else if (input.value.length > max) {
    //     showError(input,`${feildname(input)} must be less then ${max}`)
    // }
    else {
        showSuccess(input)
    }
    
}
/// Password match
function checkPass(input1, input2) {
    if (input2.value !== input1.value) {
        showError(input2, "password not match");
    }
    else {
        showSuccess(input)
    }
    
}

// check email validate
function checkEmail(input) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   // return res.test(String(email).toLowerCase());
    if (res.test(input.value.trim())) {
        showSuccess(input)
    }
    else {
        showError(input,"Email is valid")
    }
    
  }

  function feildname(input){
     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }



// Event listner 
form.addEventListener('submit',function(e){

    e.preventDefault();
    checkrequired([username,email,password,password2]);
    checkLength(username,3,15)
    checkLength(password, 6, 25)
    checkEmail(email);
    checkPass(password,password2)
  
    
})









