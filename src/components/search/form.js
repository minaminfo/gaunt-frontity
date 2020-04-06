import React, { useRef } from "react";
import { connect, styled } from "frontity";
import { FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons";

const SearchForm = ({ state, actions, libraries }) => {
  const { searchExpanded } = state.theme;
  const parse = libraries.source.parse(state.router.link);
  const searchQuery = parse.query["s"];
  const searchRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchString = searchRef.current.value;
    if (searchString.trim().length > 0) {
      actions.router.set(`/?s=${searchString.toLowerCase()}`);
    }
  };
  return (
    <Form role="search" onSubmit={handleSubmit}>
      <Input
        type="text"
        id="s"
        name="s"
        placeholder="Search query here..."
        ref={searchRef}
      />
      <Btn role="submit" aria-label="search">
        <IconContext.Provider value={{ size: "1.7em" }}>
          <FiSearch aria-hidden="true" />
        </IconContext.Provider>
      </Btn>
    </Form>
  );
};
export default connect(SearchForm);

const Form = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid #414141;
  border-radius: 3em;
`;
const Input = styled.input`
  border: 0;
  background: none;
  width: 100%;
  margin: 0.1em;
  padding: 0.5em 1em;
`;
const Btn = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
`;
