import styled from "styled-components";
import CardArticle from "../CardArticle";
import { allPostsProps } from "../../@types/allPostsProps";

export default function CardsWrapper(props: { allPosts: allPostsProps[] }) {
  const { allPosts } = props;

  return (
    <Wrapper>
      {allPosts.map((post) => (
        <CardArticle
          key={post.slug}
          title={post.title}
          slug={post.slug}
          description={post.description}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;
`;
