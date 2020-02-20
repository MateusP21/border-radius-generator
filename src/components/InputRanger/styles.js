import styled from "styled-components";

export const InputContainer = styled.div`
  transform: ${props => `
       rotate(${props.rotate});
    `};
  grid-area: ${props => props.gridArea};
  input[type="range"] {
    -webkit-appearance: none;

    appearance: none;
    background: transparent;
    height: 20px;
    overflow: hidden;
    background-color: rgb(51, 50, 50);
    border-radius: 16px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 1);
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: rgb(176, 162, 253);
    cursor: pointer;
    border: 4px solid #333;
    box-shadow: -407px 0 0 400px #eee;
  }

  input[type="range"]::-moz-range-thumb {
    -moz-appearance: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: rgb(176, 162, 253);
    cursor: pointer;
    border: 4px solid #333;
    box-shadow: -407px 0 0 400px #eee;
  }

  input[type="range"]::-ms-thumb {
    -moz-appearance: none;
    appearance: none;
    -ms-progress-appearance: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: rgb(176, 162, 253);
    cursor: pointer;
    border: 4px solid #333;
    box-shadow: -407px 0 0 400px #eee;
  }
`;
