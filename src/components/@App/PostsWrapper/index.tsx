import Router from "next/router";
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import { allPostsProps } from "../../../@types/allPostsProps";
import IconButton from "../IconButton";

import { Wrapper, Header, Title, Content } from "./styled";

export default function PostsWrapper(props: { post: allPostsProps }) {
  const { post } = props;

  return (
    <Wrapper>
      <Header>
        <IconButton
          onClick={() => {
            Router.push("/");
          }}
          icon={<MdOutlineArrowBackIosNew />}
        />

        <Title>{post.title}</Title>

        <br />
      </Header>

      <Content dangerouslySetInnerHTML={{ __html: post.content }} />
    </Wrapper>
  );
}
