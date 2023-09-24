import Link from "next/link";
import styled from "styled-components";

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <Image src="/assets/logo.svg" alt="Imagem escrita CSS" />

        <span style={{ color: "#ccc", marginLeft: "0.5rem", fontSize: "0.8rem" }}>
        Blog
        </span>
      </a>
    </Link>
  );
}

const Image = styled.img`
  width: 5rem;
`;
