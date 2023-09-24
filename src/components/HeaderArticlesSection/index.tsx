import { Wrapper, Text, TextQuantity } from "./styled";

export default function HeaderArticlesSection(props: { quantity: number, tag: string}) {
  const pluralOrSingular = props.quantity > 1 ? "artigos" : "artigo";

  return (
    <Wrapper>
      <Text>{props.tag}</Text>
      <TextQuantity>
        {props.quantity} {pluralOrSingular}
      </TextQuantity>
    </Wrapper>
  );
}
