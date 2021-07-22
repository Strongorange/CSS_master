# Varialbe

웹사이트에서 가장 중요한 컬러나 스타일을 저장하고 싶을때 사용
\_variables.scss 폴더를 만들고 (\)는 제거
$bg: #e7473c; 로 하면 변수선언 완료
styles.scss 에서 @import "\_variables" 로 임포트하고 사용할때는 background-color: $bg; 로 사용

# Nesting

.box {
padding: 10px;
&:hover {
background-color: tomato;
}
h2 {
color: blue;
&:hover {
color: red;
}
}
button {
color: red;
}
}

처럼 네스팅 가능!
& => 부모 선택자 https://abcdqbbq.tistory.com/81

# Mixin

상황에따라 다르게 스타일을 주고싶을때
https://www.codingfactory.net/10110
css 를 함수처럼 사용할 수 있음! Wow

# Extends

http://megaton111.cafe24.com/2017/01/13/sass-%EB%AC%B8%EB%B2%95-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0import-%EC%83%81%EC%86%8Dextend-%EB%AF%B9%EC%8A%A4%EC%9D%B8mixin/
같은 코드를 중복하고싶지 않을때 => Class 와 비슷한 사용
ex) a 와 button 이 서로 매우매우 많은 css 속성을 공유할때
