import styled from "styled-components";

export default function Logo() {
  return <Image src="/assets/logo.svg" alt="Imagem escrita CSS" />;
}

const Image = styled.img`
  width: 6rem;
`;
