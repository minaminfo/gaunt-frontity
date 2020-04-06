import React from "react";
import { styled, connect } from "frontity";
import Link from "./../link";
import FeaturedMedia from "./featured-media";

const PostCard = ({ state, item }) => {
  const cat = state.source.category[item.categories[0]];

  return (
    <PostCardStyle>
      <ThumbnailStyle>
        <FeaturedMedia id={item.featured_media} />
      </ThumbnailStyle>
      <CardDataStyle>
        <Title>
          <Link link={item.link}>{item.title.rendered}</Link>
        </Title>
        <CatStyle>
          <a href={cat.link}>{cat.name}</a>
        </CatStyle>
      </CardDataStyle>
    </PostCardStyle>
  );
};
export default connect(PostCard);

const PostCardStyle = styled.li`
  width: 100%;
  display: flex;
  height: 7em;
  margin-bottom: 1em;
  @media (min-width: 35em) {
    height: 10em;
  }
`;
const ThumbnailStyle = styled.div`
  width: 40%;
  box-shadow: -2px -2px 5px #fff, 2px 2px 3px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
  position: relative;

`;
const CardDataStyle = styled.div`
  width: 70%;
  padding-left: 0.5em;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    background: linear-gradient(rgba(235, 235, 235, 0.1), #ebebeb);
    width: 100%;
    height: 30%;
    position: absolute;
    bottom: 0;
  }
  a {
    text-decoration: none;
  }
`;
const Title = styled.h3`
  margin: 0;
  font-size: 1.05em;
  letter-spacing: 0.3px;
  line-height: 1.3;
  @media (min-width: 48em) {
    font-size: 1.3em;
  }
`;
const CatStyle = styled.small`
  position: absolute;
  z-index: 1;
  bottom: 0;
  text-transform: capitalize;
  color: #777;
`;
