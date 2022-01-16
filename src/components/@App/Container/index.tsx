import { ReactNode } from "react";

import { WrapperContainer } from "./styled";

export default function Container(props: { children: ReactNode }) {
  return <WrapperContainer>{props.children}</WrapperContainer>;
}
