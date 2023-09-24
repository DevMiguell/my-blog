import { Fragment } from "react";
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
  const tags = allPosts.map(post => post.tag)

  return (
    <>
      {tags.map((tag) => (
        <Fragment key={tag}>
          <HeaderArticlesSection quantity={allPosts.length} tag={tag}/>
          <CardsWrapper allPosts={allPosts.filter(post => post.tag === tag)} />
        </Fragment>
      ))}
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
    "tag"
  ]);

  return {
    props: { allPosts },
  };
}
