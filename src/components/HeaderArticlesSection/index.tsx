import { Wrapper, Text, TextQuantity } from "./styled";

export default function HeaderArticlesSection(props: { quantity: number }) {
  const pluralOrSingular = props.quantity > 1 ? "artigos" : "artigo";

  return (
    <Wrapper>
      <Text>Posts</Text>
      <TextQuantity>
        {props.quantity} {pluralOrSingular}
      </TextQuantity>
    </Wrapper>
  );
}
