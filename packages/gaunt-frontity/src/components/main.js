import React from "react";
import { css, connect } from "frontity";
import Switch from "@frontity/components/switch";
import Loading from "./loader";
import PostList from "./content/list";
import Page404 from "./content/no-page";
import Single from "./content/post";
const Main = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <main
      css={css`
        margin: 2em auto;
      `}
    >
      <Switch>
        <Loading when={data.isFetching} />
        <PostList when={data.isArchive} />
        <Single when={data.isPostType} />
        <Page404 when={data.isError} />
      </Switch>
    </main>
  );
};
export default connect(Main);
