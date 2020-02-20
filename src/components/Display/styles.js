import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 600px;
  align-self: center;
  justify-self: center;
  height: 200px;

  input {
    font-family: "Poppins";
    font-size: 18px;
    width: 100%;
    padding: 10px;
    background-color: whitesmoke;
    border: none;
    text-align: center;
    font-weight: bold;
  }

  .options {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: violet;
  }
  .options input {
    width: 8%;
    vertical-align: middle;
    line-height: 1;
  }
`;

export const Button = styled.button`
  font-family: "Poppins";
  border: none;
  width: 100%;
  padding: 10px;
  font-weight: 700;
  background-color: rgb(255, 230, 0);
  cursor: pointer;

  transition: 0.5s all;
  &[type="submit"]:hover {
    background-color: rgb(80, 255, 57);
    color: white;
  }

  &[type="button"] {
    background: ${props =>
      props.check === true
        ? "linear-gradient(to right, #396afc, #2948ff); "
        : "#eee"};
    color: ${props => (props.check === true ? "#fff" : "#282828")};
  }

  &[type="button"]:hover {
    background-color: #ddd;
  }
`;
