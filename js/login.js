// step 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('submite button');
    // step 2 get the email address inside the email input fild
    const emailField = document.getElementById(' user-email');
    const email = emailField.value;
    // console.log(email);
    // step-3 get the password inside the  input fild
    const passwordField = document.getElementById(' user-password');
    const password = passwordField.value;
    // console.log(email,password );
    // danger :do not verify email password on the clint side

    // stop 4:
    if(email== "akhia7811@gmail.com" & password == "akhi0000"){
        window.location.href = 'Bank.html';
    }
    else{
        alert('toi ka ami chinina !!!')
    }

})