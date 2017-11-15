    // 휴대폰정보 필수 팝오버
    $("[data-toggle=tooltip]").tooltip();

    //성별선택
    $(".gender").click(function(){
        $(".gender").removeClass("gender-on");
        $(this).toggleClass("gender-on");
    });

    //체크박스
    $(".check-accept").click(function(){
        $(this).toggleClass("check-accept-on");
    });

    //주소입력 라디오 버튼
    $("input[name=addr]").click(function(){     
        $(".addr").removeClass("check-accept-on");
        $(this).toggleClass("check-accept-on");

    });

    //아이디, 비밀번호 정규식
    var regExId = /^[a-zA-Z]{6,8}$/;
    var regExPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,10}$/;

    //아이디 유효성 검사
    $("#id").on("keyup", function(){

        var inputId = $("#id").val();
        var resultId = regExId.exec(inputId);

        $(".form-control-feedback-id").show();

        //입력값이 없을 때
        if(inputId ==''){

            $(".help-block-id").text("아이디를 입력하세요.").siblings(".form-control-feedback-id").addClass("glyphicon-remove").removeClass("glyphicon-ok")
            .parent().addClass("has-error").removeClass("has-success");

        //아이디 사용가능
        } else if (resultId){

            $(".help-block-id").text("사용할 수 있는 아이디입니다.").siblings(".form-control-feedback-id").addClass("glyphicon-ok").removeClass("glyphicon-remove").parent().addClass("has-success").removeClass("has-error");

        //영숫자 8-10이 아닐 때
        } else {

            $(".help-block-id").text("6-8자의 영문자만 입력하세요.").siblings(".form-control-feedback-id").addClass("glyphicon-remove").removeClass("glyphicon-ok").parent().addClass("has-error").removeClass("has-success");

        }
      });


    //비밀번호 유효성 검사
    $("#pwd").on("keyup", function(){

        $(".form-control-feedback-pwd").show();

        var inputPwd = $("#pwd").val();
        var resultPwd = regExPwd.exec(inputPwd);

        //입력값이 없을 때
        if(inputPwd ==''){

            $(".help-block-pwd").text("비밀번호를 입력하세요.").siblings(".form-control-feedback-pwd").addClass("glyphicon-remove").removeClass("glyphicon-ok")
            .parent().addClass("has-error").removeClass("has-success");

        //비밀번호 사용가능
        } else if (resultPwd){

            $(".help-block-pwd").text("사용할 수 있는 비밀번호입니다.").siblings(".form-control-feedback-pwd").addClass("glyphicon-ok").removeClass("glyphicon-remove").parent().addClass("has-success").removeClass("has-error");

        //영숫자 혼용 10-15자가 아닐 때
        } else {

            $(".help-block-pwd").text("엉어 소문자, 대문자, 숫자를 포함하여 6-10자로 작성하세요.").siblings(".form-control-feedback-pwd").addClass("glyphicon-remove").removeClass("glyphicon-ok").parent().addClass("has-error").removeClass("has-success");

        }

      });

    //비밀번호 확인 유효성 검사
    $("#pwdChk").on("keyup", function(){
        
        $(".form-control-feedback-pwdChk").show();

        var inputPwdChk = $("#pwdChk").val();
        var inputPwd = $("#pwd").val();

        //값이 없을 때
        if(inputPwdChk ==''){

            $(".help-block-pwdChk").text("비밀번호확인을 입력하세요.")
            .parent().addClass("has-error").removeClass("has-success");

        //일치할 때
        } else if (inputPwdChk == inputPwd){

            $(".help-block-pwdChk").text("일치합니다.").siblings(".form-control-feedback-pwdChk").addClass("glyphicon-ok").removeClass("glyphicon-remove").parent().addClass("has-success").removeClass("has-error");

        //일치하지 않을 때
        } else {

            $(".help-block-pwdChk").text("일치하지 않습니다.").siblings(".form-control-feedback-pwdChk").addClass("glyphicon-remove").removeClass("glyphicon-ok").parent().addClass("has-error").removeClass("has-success");

        }

      });

    //이름 입력 skip시
    $("#name").on("mousedown", function(){
        if($("#name").val() == ''){
            $(".help-block-name").text("이름입력하세요.").parent().addClass("has-error");
        }
    });

    $("#name").on("keyup", function(){
        if($("#name").val() != ''){
            $(".help-block-name").hide().parent().removeClass("has-error");
        } else {
            $(".help-block-name").show().text("이름입력하세요.").parent().addClass("has-error");
        }
    });

    //생년월일 입력 
    //연도 skip시
    $(".bdaySelect.year").on("mouseup", function(){

        if($(this).val()==""){
            $(".help-block-bdaySelect").css("display", "block");
            $(".help-block-year").show().text("연도를 선택해주세요.");
            $(".inline-block-year").addClass("has-error");

        } else {

            $(".help-block-bdaySelect").hide();
            $(".help-block-year").hide();
            $(".inline-block-year").removeClass("has-error").addClass("has-success");

        }   
    });

    //연도 skip시
    $(".bdaySelect.year").on("mouseup", function(){

        if($(this).val()==""){
            $(".help-block-bdaySelect").css("display", "block").text("연도를 선택해주세요.");
            $(".inline-block-year").addClass("has-error");

        } else {

            $(".help-block-bdaySelect").hide();
            $(".inline-block-year").removeClass("has-error").addClass("has-success");

        }   
    });

    //월 skip시
    $(".bdaySelect.month").on("mouseup", function(){

        if($(this).val()==""){
            $(".help-block-bdaySelect").css("display", "block").text("월을 선택해주세요.");
            $(".inline-block-month").addClass("has-error");

        } else {

            $(".help-block-bdaySelect").hide();
            $(".inline-block-month").removeClass("has-error").addClass("has-success");

        }   
    });

    //일 skip시
    $(".bdaySelect.day").on("mouseup", function(){

        if($(this).val()==""){
            $(".help-block-bdaySelect").css("display", "block").text("일을 선택해주세요.");
            $(".inline-block-day").addClass("has-error");

        } else {

            $(".help-block-bdaySelect").hide();
            $(".inline-block-day").removeClass("has-error").addClass("has-success");

        }   
    });

    //휴대폰정보 입력 skip시
    $("#phone").on("mousedown", function(){
        if($("#phone").val() == ''){
            $(".help-block-phone").text("휴대폰 번호를 입력하세요.").parent().addClass("has-error");
        }
    });

    $("#phone").on("keyup", function(){
        if($("#phone").val() != ''){
            $(".help-block-phone").hide().parent().removeClass("has-error");
        } else {
            $(".help-block-phone").show().text("휴대폰 번호를 입력하세요.").parent().addClass("has-error");
        }
    });

    //이메일정보 입력 skip시
    $("#email").on("mousedown", function(){
        if($("#email").val() == ''){
            $(".help-block-email").text("이메일 주소를 입력하세요.").parent().addClass("has-error");
        }
    });

    $("#email").on("keyup", function(){
        if($("#email").val() != ''){
            $(".help-block-email").hide().parent().removeClass("has-error");
        } else {
            $(".help-block-email").show().text("이메일 주소를 입력하세요.").parent().addClass("has-error");
        }
    });    

// 주소 찾기

    //주소입력 눌렀을 대
    $("#inputAddr").click(function(){
        //모달 보이게 하기 
        $("#myModal").modal("show");
    });

    //주소찾기 버튼 눌렀을 때 주소리스트 보이게 하기
    $("#btn-find-addr").click(function(){
        $(".collapse").collapse();
    });

    //주소 리스트 클릭했을 때 this의 텍스트를 주소창 인풋 밸류로 가져오기
    $(".table-addr td").click(function(){
        
        var addr = $(this).text();
        
        $("#input-addr").val(addr);
    });

    $(".btn-input-addr").click(function(){
        $("#input-addr").val("");
        $(".collapse").removeClass("in");
    });

    //제출하기 버튼
    $("#btnSubmit").click(function(){

        var required = $(".required").parents();
        var requiredVal = $(".required").val();

        if(requiredVal == '' || required.hasClass("has-error")){

            $(".help-block-submit").text("필수입력항목을 확인하세요.").parent().addClass("has-error");
            return false;  

        }

        
        
    });
