# FlexBox

- flexbox 에서는 children 과 이야기하지 않는다
  다른 것의 부모가 아닌 바로 붙어있는 부모가 flex 어야 flex 적용됨
  부모에 높이가 있어야 align-item 같은 아이들이 적용됨!!!!

- main-axis 는 기본적으로 row (가로) cross-axis 는 반대
  main-axis 방향 조절은 justify-items, corss-axis 조정은 align-item

- Align-self, Order
  부모가 아닌 자식에게 주는 아이들
  align-self 는 align-item 과 마찬가지고 cross-axis 에 동작
  order 는 html 을 건드리지 않고 순서를 바꿀 수 있음
  order 의 기본값은 0 order 1 로 하면 나머지 요소들은 order 0 이기때문에 order 1으로 지정한 것이 맨 뒤로

- Flex Wrap
  flexbox 는 item 들이 모두 같은 줄에 있도록 유지하려는 속성을 지님
  width 가 바뀌어도 한줄에 유지하려 하기때문에 width 를 설정해도 꾸겨넣어짐!
  Flex Wrap 의 기본값은 flex-wrap : nowrap
  flex-wrap: wrap 을 하면 한줄을 벗어나더라도 child 의 크기를 유지하라는 것

- Row, Column Reverse
  말 그대로 순서를 바꿈
  flex-wrap : wrap - rever 를 하면 내려가는 child 가 wrap 이랑은 반대 순서

- align-content
  cross-axis 의 line (너비?) 를 조절
  wrap 을 해서 child 가 아래로 내려갔는데 떨어진 간격을 조절하는 속성
  flex-start 를 하면 간격이 없어짐

  wrap으로 정렬 시 (여러 줄으로, 각 item의 width를 유지하면서)
  각 줄(기본: row) 간의 간격이 생기는데, 이것을 'align-content'라는 property로 조절 가능

  align-content (line을 변경, line은 cross-axis에 있는 상태)

  justify-content와 비슷하지만 'line'에 관한 것 (각 block이 여러 행에 걸쳐 나올 때, 행간 공백을 얼마나 둘 건지?)
  align-content: flex-start; - align-content: space-around;

- flex-grow, flex-shrink
  child 들에게 적용하는 속성, 반응형 디자인에 중요

  - flex-shrink
    wrap 같은 상황에서 element 가 짜그라질때 동작하는 요소, 얼마나 짜그라질지 설정
    기본값은 flex-shink: 1
    flex-shrink : 2 로하면 다른 박스보다 2배로 짜그라짐

  - flex-grow
    flex-shrink 와 반대로 얼마나 커질지 지정, 주변의 공간을 먹는 속성
    기본값은 0 , 1로 하면 여분의 공간이있으면 모든 공간을 흡수함
    1,2,3 박스중 2번이 2, 3번이 1 의값을 가진다면 남은 공간의 2/3 를 2번이 1/3 을 3번이 가져감

- flex-basis
  child 에서 적용되는 속성, main axios 에서 작용
  element 의 기본크기를 설정 (짜그라지거나 늘어나기 전!)

https://flexboxfroggy.com/#ko
