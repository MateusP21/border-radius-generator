import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem auto;
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .button-container {
    display: flex;
    gap: 8px;
  }

  textarea {
    resize: none;
    font-family: 'Poppins';
    font-size: 14px;
    width: 100%;
    height: max-content;
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
`;

export const Button = styled.button`
  font-family: 'Poppins';
  border: none;
  width: 100%;
  border-radius: 6px;
  padding: 10px;
  font-weight: 700;
  background-color: rgb(255, 230, 0);
  cursor: pointer;

  transition: 0.5s all;
  &[type='submit']:hover {
    background-color: rgb(80, 255, 57);
    color: white;
  }

  &[type='button'] {
    background: ${({ check }) => (check ? 'linear-gradient(to right, #396afc, #2948ff); ' : '#eee')};
    color: ${(props) => (props.check === true ? '#fff' : '#282828')};
  }

  &[type='button']:hover {
    background-color: #ddd;
  }
`;
