import { ReactNode } from "react";

import { Wrapper } from "./styled";

export default function Container(props: { children: ReactNode }) {
  return <Wrapper>{props.children}</Wrapper>;
}
