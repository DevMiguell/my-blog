import Link from "next/link";
import { ReactNode } from "react";
import { WrapperIconButton } from "./styled";

export default function IconButton(props: {
  icon: ReactNode;
  onClick?: () => void;
  href?: string;
}) {
  if (props.href) {
    return (
      <Link href={props.href}>
        <a>
          <WrapperIconButton>{props.icon}</WrapperIconButton>
        </a>
      </Link>
    );
  }

  return (
    <WrapperIconButton onClick={props.onClick}>{props.icon}</WrapperIconButton>
  );
}
