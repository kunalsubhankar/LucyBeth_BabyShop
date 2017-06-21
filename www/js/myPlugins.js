;(function($){
    $.extend({
        s:function(obj){
            return JSON.stringify(obj);
        },
        p:function(s){
            return JSON.parse(s);
        },
        isEmail:function(email){
            return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(email);
        },
        checkEmail:function(email){
            var users = $.p(localStorage.users);
            for(var name in users){
                if(users[name].email==email){
                    return true;
                }
            }
        },
        checkUserByEmail:function(email,password){
            var users = $.p(localStorage.users);
            var result = {state:0,msg:'email is not exist'};
            for(var name in users){
                if(users[name].email==email){
                    result.state = 1;
                    if(users[name].password==password){
                        result.state = 2;
                        result.msg = name;
                    }else{
                        result.msg = 'password is wrong';
                        
                    }
                    return result;
                }
            }
            return result;
        }
    });
})($);
$(function(){
    if(sessionStorage.userInfo){
        var a = $('li.text a');
        a.html('welcome '+sessionStorage.userInfo);
        a.attr('href','javascript:void(0);');
    }
});