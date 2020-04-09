import React from "react";
import Image from "@frontity/components/image";
import { styled, connect, css, decode } from "frontity";
import PostList from "./list";
import Sidebar from "./../sidebar/sidebar";
import FeaturedMedia from "./featured-media";
import Comment from "./comment";
import { IconContext } from "react-icons";
import { FiTag, FiCalendar } from "react-icons/fi";

const Single = ({ state, libraries, actions }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;
  const author = state.source.author[post.author];
  const date = new Date(post.date);
  const allTags = state.source.tag;
  const tags = post.tags && post.tags.map(tagId => allTags[tagId]);

  console.log(post.tags.length);

  /*useEffect(() => {
    	actions.source.fetch("/");
    	PostList.preload();
	}, [])*/

  return data.isReady ? (
    <PostStyle>
      <PostHeader>
        <FeaturedMediaStyle>
          <FeaturedMedia id={post.featured_media} />
        </FeaturedMediaStyle>
        <PostMeta>
          <div>
            <IconContext.Provider value={{ size: "1.5em" }}>
              <FiCalendar
                css={css`
                  margin-right: 1em;
                `}
              />
            </IconContext.Provider>{" "}
            {date.toLocaleDateString()}
          </div>
          {state.theme.showAuthor && author && (
            <AuthorContainer>
              <Image
                src={author.avatar_urls[48]}
                alt="Author profile picture"
              />
              <a href={author.link}>{author.name}</a>
            </AuthorContainer>
          )}
          {post.tags.length > 0 && (
            <TagsStyle>
              <IconContext.Provider value={{ size: "1.5em" }}>
                <FiTag
                  css={css`
                    margin-right: 1em;
                  `}
                />
              </IconContext.Provider>
              {tags.map(({ name, link }) => (
                <a href={link}>{name}</a>
              ))}
            </TagsStyle>
          )}
        </PostMeta>
      </PostHeader>
      <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

      <MainStyle>
        <Content>
          <Html2React html={post.content.rendered} />
        </Content>
        <Sidebar />
      </MainStyle>
      <PostFooterStyle>
        {/* <Comment post={post} /> */}
      </PostFooterStyle>
    </PostStyle>
  ) : null;
};
export default connect(Single);

const PostStyle = styled.article``;
const PostHeader = styled.header`
  width: 100%;
  @media (min-width: 48em) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const FeaturedMediaStyle = styled.div`
  @media (min-width: 48em) {
    box-shadow: -5px -5px 5px #fff, 5px 5px 5px rgba(0, 0, 0, 0.2);
    width: 65%;
  }
  border-radius: 5px;
  overflow: hidden;
`;
const PostMeta = styled.div`
  div {
    padding: 1em 0;
    display: flex;
    align-items: center;
  }
  @media (min-width: 48em) {
    width: 30%;
  }
`;
const AuthorContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 0;
  border-right: 0;
  img {
    box-shadow: -5px -5px 5px #fff, 5px 5px 5px rgba(0, 0, 0, 0.2);
    border-radius: 100%;
    margin-right: 1em;
    position: relative;
  }
  a {
    text-decoration: none;
    text-transform: capitalize;
  }
`;
const TagsStyle = styled.div`
  flex-wrap: wrap;
  a {
    text-decoration: none;
    margin-right: 0.4em;
    &:before {
      content: "#";
      color: rgba(0, 0, 0, 0.2);
    }
  }
`;
const Title = styled.h1`
  /*text-shadow: 3px 3px white, 4px 4px 5px rgba(0,0,0,.3);*/
  @media (min-width: 48em) {
    font-size: 5em;
  }
`;

const MainStyle = styled.div`
  @media (min-width: 48em) {
    display: flex;
  }
`;
const Content = styled.div`
  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }
  ul {
    list-style: initial;
    padding-left: 1em;
    margin-left: 1em;
  }
  a {
    text-decoration: underline;
  }
  blockquote {
    margin: 0;
    position: relative;
    p {
      display: inline-block;
      padding-left: 2em;
    }
    cite {
      display: inline-block;

      &:before {
        content: "";
        width: 2em;
        height: 1px;
        display: inline-block;
        margin: 0.3em;
        background: #414141;
      }
    }
    &:before {
      display: inline-block;
      content: "❠";
      line-height: 0;
      color: rgba(0, 0, 0, 0.1);
      font-size: 4em;
    }
  }
  .wp-block-table {
    word-break: keep-all;
    overflow: auto;
    table,
    tbody,
    tr,
    td {
      border-collapse: collapse;
    }
    tr:nth-child(1) {
      background: #414141;
      color: #ebebeb;
    }
    td {
      padding: 0.3em 0.5em;
      border: 1px solid #414141;
    }
  }
  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  its input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
const PostFooterStyle = styled.div``;
