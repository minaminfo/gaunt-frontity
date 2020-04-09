import React from "react";
import { styled, connect } from "frontity";

const description404 = (
  <>The page you're looking for doesn't exist or moved to a new address.</>
);

const description = (
  <>
    Bad luck! Try:
    <ul>
      <li>Retry or refresh</li>
      <li>Make sure your internet is working fine.</li>
      <li>Try contacting us if problem persisted.</li>
    </ul>
  </>
);

// The 404 page component
const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);

  const title = "Something went wrong";
  const title404 = "Wrong Address - 404";

  return (
    <>
      <h1>{data.is404 ? title404 : title}</h1>
      <p>{data.is404 ? description404 : description}</p>
    </>
  );
};

export default connect(Page404);
