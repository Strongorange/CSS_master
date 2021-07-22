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

https://www.codingfactory.net/10110
css 를 함수처럼 사용할 수 있음! Wow
