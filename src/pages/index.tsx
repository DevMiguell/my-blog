import { allPostsProps } from "../@types/allPostsProps";
import CardArticle from "../components/CardArticle";
import CardsWrapper from "../components/CardsWrapper";
import HeaderArticlesSection from "../components/HeaderArticlesSection";
import { getAllPosts } from "../lib/api";

interface Props {
  allPosts: allPostsProps[];
}
export default function Home(props: { allPosts: allPostsProps[] }) {
  const { allPosts } = props;

  return (
    <>
      <HeaderArticlesSection quantity={allPosts.length} />

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
