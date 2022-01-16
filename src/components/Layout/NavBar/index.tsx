import IconButton from "../../@App/IconButton";
import Logo from "../../@App/Logo";
import { Wrapper } from "./styled";
import { FaMoon } from "react-icons/fa";

export default function NavBar() {
  return (
    <Wrapper>
      <Logo />

      <IconButton
        onClick={() => {
          console.log("clickou");
        }}
        icon={<FaMoon />}
      />
    </Wrapper>
  );
}
