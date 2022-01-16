import { ReactNode } from "react";
import { WrapperIconButton } from "./styled";

export default function IconButton(props: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <WrapperIconButton onClick={props.onClick}>
      {props.children}
    </WrapperIconButton>
  );
}
