import styled from "styled-components";

export default function Card({ name, price, alc, color }) {
  return (
    <CardBox>
      <h2> {name}</h2>
      <p>{price}</p>
      <p>{alc}</p>
      <p>{color}</p>
    </CardBox>
  );
}

const CardBox = styled.article`
  background: red;
  width: 80%;
`;
