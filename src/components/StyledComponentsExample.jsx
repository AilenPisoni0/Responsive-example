import styled from "styled-components";

const Box = styled.div`
  background: palevioletred;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;

  @media (max-width: 600px) {
    background: teal;
  }
`;

export default function StyledComponentsExample() {
  return (
    <section>
      <h2>Styled-components</h2>
      <Box>Este div cambia color con media query ✨</Box>
    </section>
  );
}
