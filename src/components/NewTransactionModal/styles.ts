import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    font-weight: 400;
    font-size: 1rem;

    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: #e7e9ee;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    margin-top: 1.5rem;

    border: 0;
    border-radius: 0.25rem;

    font-size: 1rem;
    font-weight: 600;

    color: #ffffff;
    background: var(--green);

    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
