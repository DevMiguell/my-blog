import IconButton from "../../@App/IconButton";
import Logo from "../../@App/Logo";
import { WrapperNavBar } from "./styled";
import { FaMoon } from "react-icons/fa";

export default function NavBar() {
  return (
    <WrapperNavBar>
      <Logo />

      <IconButton
        onClick={() => {
          console.log("clickou");
        }}
      >
        <FaMoon />
      </IconButton>
    </WrapperNavBar>
  );
}
