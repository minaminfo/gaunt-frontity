import React from "react";
import { styled, connect } from "frontity";

const Categories = ({ state }) => {
  const cats = state.source.category;
  return (
    <CatStyl>
      <span>Explore Categories</span>
      <ul>
        {Object.keys(cats).map((key) => (
          <li>
            <a href={cats[key].link}>{cats[key].name}</a>
          </li>
        ))}
      </ul>
    </CatStyl>
  );
};

export default connect(Categories);

const CatStyl = styled.div`
  span {
    font-weight: bold;
  }
  li {
    margin-top: 0.3em;
  }
`;
