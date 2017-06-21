


$('.login-btn').on('click',function(){
    //check inputed email and password
    var emailEl = $('#email');
    var email = emailEl.val();
    var passwordEl = $('#password');
    var password = passwordEl.val();
    if(email==''){
        emailEl.addClass('br');
        showError('please input your email');
        return false;
    }else if(!$.isEmail(email)){
        emailEl.addClass('br');
        showError('email format is wrong');
        return false;
    }else if(password==''){
        passwordEl.addClass('br');
        showError('please input your password');
        return false;
    }
    //check email matches password
    if(localStorage.users){
        var users = $.p(localStorage.users);
        var checkResult = $.checkUserByEmail(email,password);
        if(checkResult.state==2){
            sessionStorage.userInfo = checkResult.msg;
            location.href='products.html';
        }else{
            showError(checkResult.msg);
            return false;
        }
    }else{
        showError('the emial is not exist');
    }
});
$('.login-right input:lt(2)').on('click',function(){
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