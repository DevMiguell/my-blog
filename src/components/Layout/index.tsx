import { ReactNode } from "react";
import Container from "../@App/Container";

import Footer from "./Footer";
import NavBar from "./NavBar";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Container>
      <NavBar />

      <main>{children}</main>

      <Footer />
    </Container>
  );
}
