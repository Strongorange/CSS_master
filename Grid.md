# Grid

## Grid Basic

flex 와 마찬가지고 grid 도 father 에서 선언되고 father 에 옵션을 주는 경우가 많음

- 맨 먼저 column 와 row 를 설정!
  display: grid;
  grid-template-columns: 250px 250px 250px;
  grid-template-rows: 100px 50px 300px;
  gap: 10px;

## 2.3 Grid Template Areas

- Repeat
  grid-template-columns: 200px 200px 200px 200px;
  이런식으로 하지말고
  grid-template-columns: repeat(4, 200px);

- Grid template areas
  fatehr 에
  grid-template-areas:
  "header header header header"
  "content content content nav"
  "content content content nav"
  "footer footer footer footer"; 해주고
  child 들에 grid-area : 각 그리드 이름 을 해주면
  grid templates 처럼 레이아웃이 나온다!

  . 을 사용해서 템플릿에서 빈 공간으로 남겨둘 수 있름

## Rows and Columns

- grid-column-start, end
  I ㅁ I ㅁ I ㅁ I ㅁ I 그리드가 있을때 I 는 1~5
  grid-column-start 가 1, end 가 2 라면 변하지 않음
  end 가 5로 바뀌면 해당 가로는 줄을 모두 차지

  grid-row-start, end 도 똑같이 사용가능
  이것을 이용해서 templates 없이도 똑같이 구현가능!

  - 지름길
    짧게하는 법으로 grid-column: 시작 / 끝 으로 사용가능

    - grid 는 뒤에서도 셀 수 있는데 뒤에서부터 -1, -2 .... 순서로
      즉 grid-column: 1 / -1 하면 처음부터 끝까지라는 의미

    - Span 도 사용가능
      몇칸을 먹는지를 적어줌
      grid-column: span 4;

## 라인에 이름짓기

- [라인 이름] 으로 이름지을 수 있음

## Fraction

측정단위 비율!
repeat(4, 1fr) 하면 그리드의 사용가능 범위에서 공간을 나눠서 알아서 가짐
grid-template-columns: 4fr 1fr 1fr 1fr; => 첫번째 column 가 다른애들보다 4배커짐

> navigator 에서 얻는게 아니라 그리드 컨테이너에서 얻는것!!!!!!!!!!!!!!!

grid 에서는 px 이 아니라 fr 단위로 만드는게 좋음 => 반응형 가능

grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
이렇게만 했을때 화면에 아무것도 보이지 않음 => 그리드 컨테이너에 높이가 없음
높이 공간이 없기때문에 나눠가질 공간이 없음

컨테이너에 height: 50vh 같이 값 추가해주면 가능!

## Grid template

이게 짱짱 지름길
각 클래스에 grid-ared : 이름 ; 지정

grid-template:
"header header header header" 1fr
"content content content nav" 2fr
"footer footer footer footer" 1fr / 1fr 1fr 1fr 1fr; //repeat 사용불가
/ 뒤 부분에서 columns 의 크기를 지정 "~~" 뒷부분 fr 은 row 의 크기 (높이) 지정

## Place Items

- justify-items, align-items
  그리드 컨테이너에 적용하는 속성, 어떤 콘텐츠도 없다면 (높이도 지정되어있지 않다면) 아무것도 보이지 않아 적용되지 않는것처럼 보임, grid child 에 height,width 로 기본 크기를 지정했다면 strect는 먹히지 않음!

  -justify-items
  기본값은 stretch => 그리드 컨테이너가 그리드를 가지고있고 그리드 child 를 늘려서 그리드 컨테이너를 채우게 함
  값을 start 로 한다면 그리드 child 가 다 차는게 아니라 왼쪽만 조금 차있음
  center 는 가운데만 조금 end 는 오른쪽만 조금

  -align-items
  flex 와 동일하게 cross-axis 에 작용

- place-items => 지름길
  첫번째는 수평, 그 다음에는 수직
  place-items: strecth center => 위로 쭉 늘어나고 그리드의 가운데에 아이템이 옴

## Place Content

위의 items 속성들은 그리드 안에있는 cell (각각의 네모) 에 적용하는 속성
content 속성은 그리드 자체에 적용하는 속성 (ex) 4 \* 4 그리드 자체에 대한 속성

- justify-content
  justify-content: center 로하면 grid 자체를 가운데로 옮김!
  Grid 로 설정한 div 는 width 100% 로 되어있는데 div 안에서의 grid 위치를 바꿈
  horizontal (수평) 에 적용되는 속성

- align-content
  cross-axis (기본으로는 수직) 에 적용되는 속성
  align-content : space-between 으로하면 그리드 rows 가 서로 멀어져서 정렬!

- place-content => 지름길
  place-items 과 동일하게 수직, 수평 순서

## Align-self, justify-self => place-self

child 에서 사용하고 사용한 child 에게만 적용되는 속성
개별적으로 움직이는 것 외에는 별 것 없음
마찬가지고 지름길인 place-self: 수직 수평 사용가능

## Auto Columns and Rows

grid-template-columns: repeat(4, 100px);
grid-template-rows: repeat(4, 100px);
이렇게 지정된 grid 에서 만약 grid 안에 item 이 40개 들어가면 어떻게될까?
4 4 그리드여서 16개까지 지정되엇는데 이를 넘어가는 아이템이 그리드에 들어가게되면 그리드가 정상적으로 나오지 않음! 이를해결해야함

- Grid-auto-rows
  grid-auto-row: 100px 로하면 100px rows 를 가지는 그리드 셀이 자동적으로 추가됨
  auto-row 를 사용하면 grid-template-rows 가 굳이 필요없음

- Grid-auto-flow
  flex-direction 을 바꾸는 것과 비슷하게 grid 의 flow 를 column 으로 바꾸면
  수평으로 1,2,3,4 가던데 수직으로 1,2,3,4 로 되고 데이터가 지정한 것보다 추가되면 column 가 생기는 것 처럼 보임
  이 상태엣 grid-auto-column 를 지정해주면 실제로 column 가 생기게됨!
