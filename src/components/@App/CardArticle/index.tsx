import {
  Wrapper,
  Title,
  Description,
  ReadMore,
  WrapperReadMore,
  Icon,
} from "./styled";
import { MdArrowForward } from "react-icons/md";
export default function CardArticle() {
  return (
    <Wrapper>
      <Title>Title</Title>
      <Description>Description</Description>

      <WrapperReadMore>
        <ReadMore>Leia mais</ReadMore>
        <Icon>
          <MdArrowForward />
        </Icon>
      </WrapperReadMore>
    </Wrapper>
  );
}
