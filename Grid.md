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
