import styled from 'styled-components';

export const Styles = styled.div`
  flex-basis: 30%;

  h1 {
    text-align: center;
    color: #777;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 20px;
    }

    input,
    select {
      font-size: 1.2em;
    }
    .error {
      color: red;
      font-size: 0.6em;
    }
  }

  button {
    background: #1997bf;
    padding: 10px;
    color: white;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 1.2em;
  }
`;
