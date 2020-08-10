import React from 'react';
import { connect, styled } from "frontity";

import Link from "./link"
import List from "./list";
import Post from "./post";
import Page from "./page";

const HeadingOne = styled.h1`
  font-size: 4rem;
  color: red;
`;


const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  const siteInfo = state.frontity;
  return (
    <>
      <HeadingOne>{siteInfo.title}</HeadingOne>
      <p>Current URL: {state.router.link}</p>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/contact">contact</Link>
      </nav>
      <hr />
      <main>
        {data.isArchive && <List />}
        {data.isPost && <Post />}
        {data.isPage && <Page />}
      </main>
    </>
  );
};

export default connect(Root);