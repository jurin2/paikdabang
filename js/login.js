 //로그인 닫기
 $('#btn-reset').on({
    'click':function(){
        $('.login').css('display','none');
    }
})

 // 로그인하기 / 쿠키 set
 $('#btn-send').on({
    'click':function(){
        if($('#save-id').is(':checked')){
            let uId = $('#user-id').val();
            $.cookie('user-id',uId);
        }else{
            $.removeCookie('user-id');
        }  
        $('.login').css('display','none');
        return false;
    }
})

// 쿠키 get
$('#user-id').val($.cookie('user-id'));

// 로그인창 호출
$('#btn-login').on({
    'click':function(){
        $('.login').css('display','block');
        return false;
    }
})