import React from "react";
import { styled, connect } from "frontity";
import PostCard from "./post-card";
import Pagination from "./pagination";
import Sidebar from "./../sidebar/sidebar";
const PostList = ({ state }) => {
  const currentPath = state.router.link;
  const listLink = state.source.get(currentPath);
  const { isSearch, total, query } = state.source.data[currentPath];
  return (
    <>
      {isSearch && total === 0 ? (
        <Empty>
          Nothing found for <b>{query.s}</b>
        </Empty>
      ) : (
        <ListContainer>
          <ListWrapper>            
            <PostListStyle>
              {listLink.items.map(({ type, id }) => {
                const item = state.source[type][id];
                return <PostCard id={id} item={item} />;
              })}
            </PostListStyle>
            <Pagination />
          </ListWrapper>

          <Sidebar />
        </ListContainer>
      )}
    </>
  );
};
export default connect(PostList);

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 48em) {
    flex-direction: row;
  }
`;
const ListWrapper = styled.div`
  width: 100%;
  
`;
const PostListStyle = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Empty = styled.div`
  width: 100%;
`;
