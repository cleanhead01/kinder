// var elForm = document.querySelector('.join_form')
// var elName = elForm.querySelector('#name_lbl')
// var elPassword = elForm.querySelector('#password_lbl')
// var elPasswordOk = elForm.querySelector('#passwordok_lbl')
// var elPhone = elForm.querySelector('#phone_lbl')
// var elEmail = elForm.querySelector('#email_lbl')
// var elDomain = elForm.querySelector('#domain')
// var elEmailChoice = elForm.querySelector('#email_choice')
// var elAddrCode = elForm.querySelector('#addr_lbl')
// var elAddr1 = elForm.querySelector('#addr1')
// var elAddr2 = elForm.querySelector('#addr2')
// var elAddr3 = elForm.querySelector('#addr3')
// var elBirthday = elForm.querySelector('#birthday')
// var elMale = elForm.querySelector('#male')
// var elFemale = elForm.querySelector('#female')
// var elHobby1 = elForm.querySelector('#hobby1')
// var elQuery = elForm.querySelector('#query')


(function($){

  $('.join_after').hide()
  $('.join_form').submit(function(){

        // 비밀번호 유효성 체크
        // 영문, 숫자, 특수문자 중 2가지 이상 조합 10~12글자 범위. 첫글자는 영어만
        // var pass1 = $("#password_lbl").val()
        // p.398~p.400 정규표현식 참고
        // ^ 첫 문자 일치, $ 끝 문자 일치
        // ?= 조건확인후 처음으로 돌아감
        // . 임의의문자(숫자,문자,특수문자 포함한 모든 문자)
        // * 앞의 글자가 0번 이상 나옴
        // var check = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/
        // if ( !check.test(pass1) ) {
        //         alert("비밀번호 조건에 맞지 않습니다.")
        //         $('#password_lbl').focus().select();
        //         return false;
        // } 
        
        // return false
        $('.join_box').hide()
        $('.join_after').show()
        return false;
  })

})(jQuery)




