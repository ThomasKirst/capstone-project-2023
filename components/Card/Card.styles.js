import styled from "styled-components";

export default styled.article`
  background-color: #eee;
  border: 1px solid #ddd;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  font-family: var(--inter-font);
  padding: 1rem;
  border-radius: 0.5rem;
  max-width: 25rem;
  transition: border 0.2s ease-in-out;

  h3 {
    font-family: var(--orbitron-font);
    margin-top: 0;
  }

  &:hover {
    background-color: #efefef;
    border: 1px solid #ccc;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li::before {
    content: "//";
    color: deeppink;
    margin-right: 0.5rem;
  }

  footer {
    display: flex;
    justify-content: flex-end;
  }

  a {
    background-color: deeppink;
    border-radius: 0.5rem;
    color: white;
    display: inline-block;
    font-weight: medium;
    padding: 0.6rem 1rem 0.5rem 1.6rem;
    text-decoration: none;
    transition: all 0.15s ease-in-out;

    &:hover {
      background-color: #ccc;
      color: #111;
    }
  }
`;
