import React from "react";
import { connect } from "frontity";

const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  return (
    <div>
      <h2>{post.title.rendered}</h2>
      <p>
        Posted on:
        {post.date}
      </p>
      <p>
        By:
        {author.name}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

export default connect(Post);
