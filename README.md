# 빽다방 랜딩페이지 클론코딩  

사이트 바로가기 - [paikdabang](https://jurin2.github.io/paikdabang)
![image](https://user-images.githubusercontent.com/89722981/165810093-aa04bfde-fc3f-44f3-b765-f833b041f86b.png)
<br><br> 

## 주요기능
### 웹표준을 준수하여 메가박스 비반응형 페이지를 반응형으로 변경  
<img src="https://user-images.githubusercontent.com/89722981/165810093-aa04bfde-fc3f-44f3-b765-f833b041f86b.png" width="70%" alt="메가박스 랜딩페이지"/> <img src="https://user-images.githubusercontent.com/89722981/165811938-8abf7091-f52e-4acb-878c-5bd3b7405702.png" width="20%" alt="메가박스 반응형 모바일 페이지"/>  

<br>

### 자바스크립트 라이브러리 bxSlider를 이용한 메인 슬라이드 배너
<img src="https://user-images.githubusercontent.com/89722981/165811685-ba42bdde-a56b-4bc5-8873-246cfc943799.png" width="70%" alt="메가박스 ajax"/>  
<br>

### Ajax를 이용하여 메뉴의 상세정보 내용의 빠른 전환  
<img src="https://user-images.githubusercontent.com/89722981/165812937-d821f975-116d-4eac-8daa-10a716e6dd10.png" width="70%" alt="메가박스 ajax"/>
<pre>
<code>
 function loadMenu01(){
        $('#menu-tit').load('./menu.txt #menu-tit1');
        $('#menu-txt').load('./menu.txt #menu-txt1');
        $('#menu-list').load('./menu.txt #menu-list1');
    }
    function loadMenu02(){
        $('#menu-tit').load('./menu.txt #menu-tit2');
        $('#menu-txt').load('./menu.txt #menu-txt2');
        $('#menu-list').load('./menu.txt #menu-list2');
    }
    function loadMenu03(){
        $('#menu-tit').load('./menu.txt #menu-tit3');
        $('#menu-txt').load('./menu.txt #menu-txt3');
        $('#menu-list').load('./menu.txt #menu-list3');
    }
    function loadMenu04(){
        $('#menu-tit').load('./menu.txt #menu-tit4');
        $('#menu-txt').load('./menu.txt #menu-txt4');
        $('#menu-list').load('./menu.txt #menu-list4');
    }
    function loadMenu05(){
        $('#menu-tit').load('./menu.txt #menu-tit5');
        $('#menu-txt').load('./menu.txt #menu-txt5');
        $('#menu-list').load('./menu.txt #menu-list5');
    }
    loadMenu01();
</code>
</pre>
<br>

### 모달팝업창 체크시 하루동안 보지않기
<img src="https://user-images.githubusercontent.com/89722981/165812451-f3735664-b94f-4dad-8c80-6794e5f149a8.png" width="70%" alt="모달팝업창"/>  
* 브라우저는 설정된 유효 일자까지 쿠키를 유지하다가, 해당 일자가 도달하면 쿠키를 자동으로 삭제한다.  
<pre>
<code>
  //모달배너 닫기
    $('.btn-close').on({
        'click':function(){
            $('.popup-par').css('display','none');
            $('.wrap').css('height','auto');
            if($('.chk-box input').is(':checked')){
                $.cookie('modal-popup', 'no', { expires: 1 });

                // let nowDate = new Date(); /* 오늘날짜 */
                // let nowDay = nowDate.getDate(); /* 오늘일 */
                // let endDate = new Date(nowDate.setDate(nowDay + 1)); /* 끝날짜 */
                // document.cookie = 'popup=no;expires=' + endDate + ';'; /* 하루 뒤 종료 */
            }
        }
    })

    // 만들어진 쿠키를 안보이게 하기
    if($.cookie('modal-popup') == 'no'){
        $('.popup-par').css('display','none');
        $('.wrap').css('height','auto');
    }else{
        $('.popup-par').css('display','block');
    }
</code>
</pre>
