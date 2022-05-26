import styled from 'styled-components';

export const Grid = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 10, 10, 0.3);
  margin-top: 1rem;
  border-radius: 6px;
  height: max-content;

  .title {
    margin-top: 1rem;
    font-size: 36px;
    padding: 0 1rem;
    color: white;
  }

  #bt-left {
    grid-area: bt-lf;
    transform: rotate(-45deg);
  }

  #bt-right {
    grid-area: bt-rg;
    transform: rotate(-135deg);
  }

  #tp-left {
    grid-area: tp-lf;
    transform: rotate(45deg);
  }

  #tp-right {
    grid-area: tp-rg;
    transform: rotate(135deg);
  }
  .left-vertical,
  .right-vertical {
    display: flex;
    flex-direction: row;
    gap: 32px;
    align-items: center;
    grid-area: left-vertical;
    transform: rotate(90deg);
  }
  .left-vertical input,
  .right-vertical input {
    width: 60px;
  }

  .left-vertical .right-vertical {
    grid-area: right-vertical;
    transform: rotate(90deg);
  }

  .right-vertical {
    grid-area: right-vertical;
  }
  .box-container {
    display: grid;
    grid-template-areas: 'tp-lf . tp-rg' 'left-vertical box right-vertical' 'bt-lf . bt-rg';
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    & > div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
`;

export const Box = styled.div`
  grid-area: box;
  background: #3494e6; /* fallback for old browsers */
  background-image: radial-gradient(
    circle farthest-corner at -14.3% -17.5%,
    rgba(245, 168, 168, 1) 4%,
    rgba(164, 168, 248, 1) 100.2%
  );
  width: 150px;
  height: 150px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;
