import {
  Wrapper,
  Title,
  Description,
  ReadMore,
  WrapperReadMore,
  Icon,
} from "./styled";
import { MdArrowForward } from "react-icons/md";
import Router from "next/router";
export default function CardArticle(props: {
  title: string;
  description: string;
  slug: string;
}) {
  return (
    <Wrapper
      onClick={() => {
        Router.push(`posts/${props.slug}`);
      }}
    >
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>

      <WrapperReadMore>
        <ReadMore>Leia mais</ReadMore>
        <Icon>
          <MdArrowForward />
        </Icon>
      </WrapperReadMore>
    </Wrapper>
  );
}
