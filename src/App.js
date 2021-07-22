import "./scss/styles.scss";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h2``;

function App() {
  return (
    <>
      <Container className="box">
        <Title>Title</Title>
        <Container>
          <Title>Another Title</Title>
        </Container>
      </Container>
    </>
  );
}

export default App;
