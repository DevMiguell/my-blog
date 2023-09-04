import Link from "next/link";
import styled from "styled-components";

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <Image src="/assets/logo.svg" alt="Imagem escrita CSS" />
      </a>
    </Link>
  );
}

const Image = styled.img`
  width: 5rem;
`;
