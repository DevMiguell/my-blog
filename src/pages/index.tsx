import { allPostsProps } from "../@types/allPostsProps";
import CardArticle from "../components/@App/CardArticle";
import CardsWrapper from "../components/@App/CardsWrapper";
import HeaderArticlesSection from "../components/@App/HeaderArticlesSection";
import { getAllPosts } from "../lib/api";

interface Props {
  allPosts: allPostsProps[];
}
export default function Home(props: { allPosts: allPostsProps[] }) {
  const { allPosts } = props;

  return (
    <>
      <HeaderArticlesSection quantity={2} />

      <CardsWrapper allPosts={allPosts} />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "description",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
