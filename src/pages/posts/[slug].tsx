import { allPostsProps } from "../../@types/allPostsProps";
import PostsWrapper from "../../components/PostsWrapper";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

export default function Posts(props: { post: allPostsProps }) {
  const { post } = props;

  return (
    <>
      <PostsWrapper post={post} />
    </>
  );
}

export async function getStaticProps(props: {
  params: {
    slug: string;
  };
}) {
  const { params } = props;

  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
