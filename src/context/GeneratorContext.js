import React, { useState, createContext } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export const GeneratorContext = createContext();

export const GeneratorProvider = ({ children }) => {
  const [check, setCheck] = useState(false);
  const [topLeft, setTopLeft] = useState(100);
  const [topRight, setTopRight] = useState(100);
  const [topLeftVertical, setTopLeftVertical] = useState(100);
  const [topRightVertical, setTopRightVertical] = useState(100);
  const [bottomLeft, setBottomLeft] = useState(42);
  const [bottomRight, setBottomRight] = useState(100);
  const [bottomLeftVertical, setBottomLeftVertical] = useState(100);
  const [bottomRightVertical, setBottomRightVertical] = useState(100);

  const borderRadius = ` ${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}% / ${topLeftVertical}% ${topRightVertical}% ${bottomRightVertical}% ${bottomLeftVertical}% `;

  function handleTopLeft(value) {
    setTopLeft(value);
  }
  function handleTopRight(value) {
    setTopRight(value);
  }
  function handleBottomLeft(value) {
    setBottomLeft(value);
  }
  function handleBottomRight(value) {
    setBottomRight(value);
  }

  function handleTopLeftVertical(value) {
    setTopLeftVertical(value);
  }

  function handleTopRightVertical(value) {
    setTopRightVertical(value);
  }

  function handleBottomLeftVertical(value) {
    setBottomLeftVertical(value);
  }

  function handleBottomRightVertical(value) {
    setBottomRightVertical(value);
  }

  function handleClipboard() {
    navigator.clipboard.writeText(`border-radius: ${borderRadius};`);
    toast.success(`😊 Copiado com Sucesso`);
  }

  function handleCheck() {
    setCheck(!check);
  }

  return (
    <GeneratorContext.Provider
      value={{
        topLeft,
        topRight,
        bottomLeft,
        bottomRight,
        topLeftVertical,
        topRightVertical,
        bottomLeftVertical,
        bottomRightVertical,
        handleTopLeft,
        handleTopRight,
        handleBottomLeft,
        handleBottomRight,
        handleTopLeftVertical,
        handleTopRightVertical,
        handleBottomLeftVertical,
        handleBottomRightVertical,
        handleClipboard,
        borderRadius,
        handleCheck,
        check,
      }}
    >
      {children}
    </GeneratorContext.Provider>
  );
};

export default GeneratorProvider;

GeneratorProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
