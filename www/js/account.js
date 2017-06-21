


$('#submit').on('click',function(){
    //check inputed names,email and password
    var firstNameEl = $('#firstName');
    var firstName = firstNameEl.val();
    var lastNameEl = $('#lastName');
    var lastName = lastNameEl.val();
    var emailEl = $('#email');
    var email = emailEl.val();
    var passwordEl = $('#password');
    var password = passwordEl.val();
    var confirmPasswordEl = $('#confirmPassword');
    var confirmPassword = confirmPasswordEl.val();
    if(firstName==''){
        firstNameEl.addClass('br');
        showError('please input your FIRST NAME');
        return false;
    }else if(lastName==''){
        lastNameEl.addClass('br');
        showError('please input your LAST NAME');
        return false;
    }else if(email==''){
        emailEl.addClass('br');
        showError('please input your EMAIL ADDRESS');
        return false;
    }else if(!$.isEmail(email)){
        emailEl.addClass('br');
        showError('email format is wrong');
        return false;
    }else if(password==''){
        passwordEl.addClass('br');
        showError('please input your PASSWORD');
        return false;
    }else if(confirmPassword==''){
        confirmPasswordEl.addClass('br');
        showError('please input your CONFIRM PASSWORD');
        return false;
    }else if(password!=confirmPassword){
        confirmPasswordEl.addClass('br');
        showError('PASSWORD and CONFIRM PASSWORD must be same');
        return false;
    }
    //check email matches password
    var users = {};
    if(localStorage.users){
        users = $.p(localStorage.users);
        if(users[firstName+' '+lastName]){
            firstNameEl.addClass('br');
            showError('the name '+ firstName+' '+lastName+' is exist');
            return false;
        }else if($.checkEmail(email)){
            emailEl.addClass('br');
            showError('the email '+ email+' is exist');
            return false;
        }
    }
    users[firstName+' '+lastName] = {email:email,password:password};
    localStorage.users = $.s(users);
    location.href = 'login.html';
});
$('#firstName,#lastName,#email,#password,#confirmPassword').on('click',function(){
    $(this).removeClass('br');
    hideError();
});

function showError(msg){
    var errorEl = $('.error');
    errorEl.val(msg).show();
}
function hideError(){
    $('.error').hide();
}