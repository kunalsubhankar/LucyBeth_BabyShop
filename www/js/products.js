$(function(){
    if(sessionStorage.userInfo){
        $('li.text a').html('welcome '+sessionStorage.userInfo);
    }
});