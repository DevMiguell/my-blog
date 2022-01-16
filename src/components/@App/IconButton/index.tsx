import { ReactNode } from "react";
import { WrapperIconButton } from "./styled";

export default function IconButton(props: {
  icon: ReactNode;
  onClick: () => void;
}) {
  return (
    <WrapperIconButton onClick={props.onClick}>{props.icon}</WrapperIconButton>
  );
}
