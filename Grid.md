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
