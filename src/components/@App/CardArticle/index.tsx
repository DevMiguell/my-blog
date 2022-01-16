import {
  StyledLink,
  Title,
  Description,
  ReadMore,
  WrapperReadMore,
  Icon,
} from "./styled";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";
export default function CardArticle(props: {
  title: string;
  description: string;
  slug: string;
}) {
  return (
    <Link href={`posts/${props.slug}`} passHref>
      <StyledLink>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>

        <WrapperReadMore>
          <ReadMore>Leia mais</ReadMore>
          <Icon>
            <MdArrowForward />
          </Icon>
        </WrapperReadMore>
      </StyledLink>
    </Link>
  );
}
