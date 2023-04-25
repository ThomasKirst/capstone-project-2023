import styled from "styled-components";
import Card from "../components/Card";

export default function HomePage() {
  return (
    <MainSection>
      <StyledHeader>Hello from Next.js</StyledHeader>
      <StyledSubline>This is an awesomely styled subline!</StyledSubline>
      <Card>
        <h3>Features</h3>
        <ul>
          <li>Fast</li>
          <li>Simple</li>
          <li>Easy</li>
        </ul>
        <footer>
          <a href="https://nextjs.org/">Visit Next.js &rarr;</a>
        </footer>
      </Card>
    </MainSection>
  );
}

const MainSection = styled.main`
  padding: 1rem;
  max-width: 30rem;
  margin: 0 auto;
`;

const StyledHeader = styled.h1`
  font-family: var(--orbitron-font);
  font-size: 2rem;
  font-weight: 200;
  text-decoration: underline;
  text-decoration-color: deeppink;
  text-decoration-thickness: 0.17rem;
  text-underline-offset: 0.32rem;
`;

const StyledSubline = styled.h2`
  font-family: var(--inter-font);
  font-weight: 200;
`;
